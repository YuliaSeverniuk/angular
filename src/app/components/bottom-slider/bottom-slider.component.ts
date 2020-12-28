import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-bottom-slider',
  templateUrl: './bottom-slider.component.html',
  styleUrls: ['./bottom-slider.component.css']
})
export class BottomSliderComponent implements OnInit {
  @ViewChild("slide1", {static: false}) slide1: ElementRef;
  @ViewChild("slide2", {static: false}) slide2: ElementRef;
  @Input() product;
  @Output() slideEvent = new EventEmitter<string>();

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  changeSlide(event: any): void {
    const slide1 = this.renderer.selectRootElement('.slide1', true);
    const slide2 = this.renderer.selectRootElement('.slide2', true);
    console.log(slide1.className);
    this.slideEvent.emit(event.target.src);
    if (slide1.classList.contains('highlighted')) {
      this.renderer.removeClass(this.slide1.nativeElement, 'highlighted');
    } else if (slide2.classList.contains('highlighted')){
      this.renderer.removeClass(this.slide2.nativeElement, 'highlighted');
    }
    event.target.classList.add('highlighted');
  }

}
