import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product-success',
  templateUrl: './new-product-success.component.html',
  styleUrls: ['./new-product-success.component.css']
})
export class NewProductSuccessComponent implements OnInit {


  product;
 
  constructor(private router:Router) {
       console.log(this.router.getCurrentNavigation().extras.state);
  }

  ngOnInit(): void {
       this.product=history.state;
  }


}
