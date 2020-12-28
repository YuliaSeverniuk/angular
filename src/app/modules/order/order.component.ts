import { Component, OnInit, ViewChild, ElementRef, Renderer2  } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  items;
  expanded = false;
  paymentMethods: any = ['card', 'PayPal', 'cash'];
  step: any = 1;
  boxIndex = [];
  objectKeys = Object.keys;
  isSubmitted = false;
  orderFormData = {};
  emptyData = {
    itemsArray: null, 
    deliveryAddress: null, 
    paymentMethod: null, 
    deliveryDate: null
  };
  @ViewChild('checkboxes') checkboxes: ElementRef;

  constructor(
    private corderService: OrderService, 
    private fb: FormBuilder, 
    private renderer: Renderer2,
    private router: Router
    ) {}

  orderForm = this.fb.group({
    itemsArray: this.fb.array([], [Validators.required]),
    deliveryAddress: this.fb.group({
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
    }),
    paymentMethod: ['', [Validators.required]],
    deliveryDate: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.items = this.corderService.getItems();
    console.log(this.items);
  }

  public onCheckboxChange(e: any, i): void {
    const itemsArray: FormArray = this.orderForm.get('itemsArray') as FormArray;
    if (this.boxIndex[i]){  
      this.boxIndex[i] = !this.boxIndex[i];
    }
    else{
      this.boxIndex[i] = true;
    }
    if (e.target.checked) {
      itemsArray.push(new FormControl(e.target.value));
    }  else {
      let i = 0;
      itemsArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          itemsArray.removeAt(i);
        }
        i++;
      });
    }
  }

  get paymentMethod() {
    return this.orderForm.get('paymentMethod');
  }
  get deliveryAddress() {
    return this.orderForm.get('deliveryAddress');
  }
  get itemsArray() {
    return this.orderForm.get('itemsArray').value;
  }
  get deliveryDate() {
    return this.orderForm.get('deliveryDate');
  }

  showCheckboxes(): void {
    if (!this.expanded) {
      this.renderer.setStyle(this.checkboxes.nativeElement, "display", "block");
      this.expanded = true;
    } else {
      this.renderer.setStyle(this.checkboxes.nativeElement, "display", "block");
      this.expanded = false;
    }
  }

  changeMethod(e: any): void {
    console.log(e.value)
    this.paymentMethod.setValue(e.target.value, {
      onlySelf: true
    })
  }

  previous(): void {
    this.step -= 1;
  }

  next(): void  {
    this.step += 1;
  }

  submitForm() {
    this.isSubmitted = true;
    
    if (!this.orderForm.valid) {
      return false;
    } else {
      console.log(this.orderForm.value);
      Object.assign(this.orderFormData, this.emptyData);
      console.log(this.orderFormData);
      this.router.navigate(['/orderSuccess']);
    }
  }
}
