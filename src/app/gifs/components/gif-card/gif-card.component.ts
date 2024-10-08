import { Component, Input, OnInit } from '@angular/core';
import { GifData } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})

export class GifCardComponent implements OnInit {

  @Input()
  public gif!: GifData;

  constructor() {}
  ngOnInit(): void {
    if (!this.gif) {
      throw new Error('GifCardComponent: gif property is required');
    }
  }

}
