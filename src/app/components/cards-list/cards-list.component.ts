import { Component, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs';
import { Model } from '../../interfaces/data.model';
import { ModelsService } from '../../services/models.servise';

@Component({
  selector: 'app-card-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css'],
})
export class CardsListComponent implements OnDestroy  {
  subscription: Subscription;
  products: Model[];

  constructor(private modelService: ModelsService) {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.subscription = this.modelService.getAllProducts().subscribe((models) => (this.products = models));
  }

  ngOnDestroy(): void {
     this.subscription.unsubscribe();
  }
}
