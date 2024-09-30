import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GifData, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: GifData[] = [];
  private _history: string[] = [];
  private apiKey  : string = 'zSF38R8Nkn0k6qt4nhGwIkKQMpxShFLm';
  private url     : string = 'https://api.giphy.com/v1/gifs/';

  constructor(
    private htpp: HttpClient
  ) {
    this.loadLocalStorage();
  }

  get history() {
    return [...this._history];
  }


  private loadLocalStorage():void{
    const history = localStorage.getItem('history');
    if(history){
      this._history = JSON.parse(history);
    }

    if(this._history.length === 0)return;

    this.searchTag(this._history[0]);

  }

  private saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._history));
  }

  private organizeHistory(tag: string):void{

    tag = tag.toLowerCase();

    if(this._history.includes(tag)){
      this._history = this._history.filter(t => t !== tag);
    }

    this._history.unshift(tag);
    this._history = this._history.splice(0,10);
    this.saveLocalStorage();

  }

  public  async searchTag(tag:string):Promise<void>{

    if (tag.trim().length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '12')
    .set('q', tag);

    this.htpp.get<SearchResponse>(`${this.url}search`, {params})
    .subscribe(resp => {
      this.gifList = resp.data;
    }
    );
  }


}
