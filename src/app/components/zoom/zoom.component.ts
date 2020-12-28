import { Component, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})
export class ZoomComponent {
  
  @Input() product;
  @ViewChild('modal') modal: ElementRef;

  constructor(private renderer: Renderer2) { }

  zoom(): void  {
    this.renderer.setStyle(this.modal.nativeElement, "display", "block")
  }

  close(): void {
    this.renderer.setStyle(this.modal.nativeElement, "display", "none")
 }
}
