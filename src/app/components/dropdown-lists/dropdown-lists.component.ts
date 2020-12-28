import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-dropdown-lists',
  templateUrl: './dropdown-lists.component.html',
  styleUrls: ['./dropdown-lists.component.css']
})
export class DropdownListsComponent implements OnInit {
  @ViewChild('color') color: ElementRef;
  @ViewChild('size') size: ElementRef;
  @ViewChild('quantity') quantity: ElementRef;

  @Input() product;
  @Output() dropdownsEvent: EventEmitter<string[]> = new EventEmitter<string[]>();
  featureValue;
  selectedQuantity= "1";
  preselectedQuantity = this.selectedQuantity;
  productFeatures = [];
  
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.defaultQuantity();
  }

  defaultQuantity(): void {
    this.productFeatures.push({selectQuantity: this.preselectedQuantity});
  }

  selectFeature(event: any, feature: string): void {
    this.featureValue = event.target.value;
    if (this.productFeatures.some(item => item[feature])) {
      this.productFeatures = this.productFeatures.filter(item => !item[feature]);
    }
      this.productFeatures.push({[feature]: this.featureValue}); 
  }

  sendData(): void {
    console.log("Event fired");
    this.dropdownsEvent.emit(this.productFeatures);
  }

  alertDropdowns(): void {
    console.log(Object.values(this.productFeatures));
    if (this.productFeatures.length === 1) {
      this.renderer.setStyle(this.color.nativeElement, "border-color", "red");
      this.renderer.setStyle(this.size.nativeElement, "border-color", "red")
    } else {
      for (let i=0; i<this.productFeatures.length; i++) {
        if (Object.keys(this.productFeatures[i]).toString() == "selectSize") {
          this.renderer.setStyle(this.color.nativeElement, "border-color", "red")
        } else if (Object.keys(this.productFeatures[i]).toString() == "selectColor") {
          this.renderer.setStyle(this.size.nativeElement, "border-color", "red")
        } 
      }
    }
  }

  dropAlertDropdowns(): void {
    this.renderer.setStyle(this.color.nativeElement, "border-color", "rgb(82, 80, 80)")
    this.renderer.setStyle(this.size.nativeElement, "border-color", "rgb(82, 80, 80)")
  }
}
