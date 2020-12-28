import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TruncatePipe } from './pipes/truncate';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
//import { FileUploadModule } from 'primeng/fileupload';
//import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { MapComponent } from './components/map/map.component';
import { SelectModelComponent } from './components/select-model/select-model.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextboxBottomComponent } from './components/textbox-bottom/textbox-bottom.component';
import { BooleanStringPipe } from './pipes/boolean-string.pipe';
import { DiscountComponent } from './components/discount/discount.component';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardComponent } from './components/card/card.component';
import { TopCardComponent } from './components/top-card/top-card.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RatingComponent } from './components/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewDialogComponent } from './components/review-dialog/review-dialog.component';
import { WriteReviewDialogComponent } from './components/write-review-dialog/write-review-dialog.component';
import { DropdownListsComponent } from './components/dropdown-lists/dropdown-lists.component';
import { ZoomComponent } from './components/zoom/zoom.component';
import { BottomSliderComponent } from './components/bottom-slider/bottom-slider.component';
import { ContactSuccessComponent } from './components/contact-success/contact-success.component';
import { OrderSuccessComponent } from './modules/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MapComponent,
    SelectModelComponent,
    DatepickerComponent,
    TruncatePipe,
    TextboxBottomComponent,
    BooleanStringPipe,
    DiscountComponent,
    CardsListComponent,
    CardComponent,
    TopCardComponent,
    ProductDetailsComponent,
    RatingComponent,
    ReviewDialogComponent,
    WriteReviewDialogComponent,
    DropdownListsComponent,
    ZoomComponent,
    BottomSliderComponent,
    ContactSuccessComponent,
    OrderSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBHf6uk7yzwPJK7LOwuvFJdHLomw7Usv4Y',
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatTooltipModule,
    NgbModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
  //  FileUploadModule,
 //   HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ReviewDialogComponent, 
    WriteReviewDialogComponent
  ],
})
export class AppModule {}
