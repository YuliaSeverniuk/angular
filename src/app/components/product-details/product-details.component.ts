import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ModelsService } from '../../services/models.servise';
import { OrderService } from '../../services/order.service';
import { Subscription } from 'rxjs';
import { Model } from '../../interfaces/data.model';
import { DropdownListsComponent } from '../dropdown-lists/dropdown-lists.component'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @ViewChild("mainImg", {static: false}) mainImg: ElementRef;
  @ViewChild("dropdowns") private dropdowns: DropdownListsComponent;

  subscription: Subscription;

  product: any = [];
  slashColor: string;
  charLimit = 250;
  products: Model[];
  dropdownsData;
  
  constructor( 
    private route: ActivatedRoute,
    private modelService: ModelsService,
    private orderService: OrderService,
    private renderer: Renderer2
    ) { }

  ngOnInit(): void {
   this.getProduct();
  }

  getProduct(): void  {
    const id: string = this.route.snapshot.paramMap.get('id');
    console.log(id)
    const numId: number = +id;
    this.subscription = this.modelService.getProductById(numId).subscribe((product) => this.product = product);

    this.slashColor = this.product.color.join(',').replace(/,/g, '/').split();
  }

  receiveSlideEvent(event: any): void {
    this.renderer.setProperty(this.mainImg.nativeElement, 'src', event)
  }

  showMore(): void {
    this.charLimit = this.product.description.length;
  }

  showLess(): void {
    this.charLimit = 250;
  }

  addToCart(product: any): void {
    this.dropdowns.sendData();
    if (this.dropdownsData.length === 3) {
      product = {...product, ...this.dropdownsData[0], ...this.dropdownsData[1], ...this.dropdownsData[2]};
      this.orderService.addToCart(product);
      this.dropdowns.dropAlertDropdowns();
    } else {
      this.dropdowns.alertDropdowns();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}