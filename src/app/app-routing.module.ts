import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ContactSuccessComponent } from './components/contact-success/contact-success.component';
import { OrderSuccessComponent } from './modules/order-success/order-success.component';

const routes: Routes = [
  { path: '', component: CardsListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contactSuccess', component: ContactSuccessComponent},
  { path: 'orderSuccess', component: OrderSuccessComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule) },
  { path: 'new-product', loadChildren: () => import('./modules/new-product/new-product.module').then(m => m.NewProductModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
