import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  public tag = '';

  constructor(
    private gifsService: GifsService
  ) {}

  @ViewChild('txtTag')
  public tagInput!: ElementRef<HTMLElement>;

  searchTag() {
    let tag = (this.tagInput.nativeElement as HTMLInputElement).value;
    this.gifsService.searchTag(tag);
    tag = (this.tagInput.nativeElement as HTMLInputElement).value = '';
  }
}
