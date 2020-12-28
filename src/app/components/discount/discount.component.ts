import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Model } from '../../interfaces/data.model';
import { ModelsService } from '../../services/models.servise';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  @Input() product;
 
  products: Model[];

  constructor(private modelService: ModelsService) {}
  
  setDiscount(): void {   
    const modelsObservable = this.modelService.getAllProducts();
    this.subscription = modelsObservable.subscribe((modelsData: Model[]) => {
      this.products = modelsData;
      

      this.products.forEach((element) => {
        if (element.main) {
          element.discount = 70;
        } else if (element.id == 2 || element.id == 3) {
          element.discount = 60;
        } else {
          element.discount = 50;
        }
      });
    });
  }

  ngOnInit(): void {
      this.setDiscount();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
 }
}