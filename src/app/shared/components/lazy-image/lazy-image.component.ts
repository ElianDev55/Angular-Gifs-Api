import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './shared-lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input()
  public url!:string


  @Input()
  public title:string = 'Image'

  public hasLoaded:Boolean = false


  ngOnInit(): void {

    if(!this.url) throw new Error('url is required')

    }

    onLoad(){
      setTimeout(() => {
      this.hasLoaded = true
    }, 200)
    }

}
