import { Component, OnInit, Input} from '@angular/core';
import { Review } from '../../interfaces/data.model';
import { ReviewDialogComponent } from '../review-dialog/review-dialog.component';
import { WriteReviewDialogComponent } from '../write-review-dialog/write-review-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  subscription: Subscription;
  @Input() product;
  currentRate: number;
  reviews: Review[];
  dialogValue: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(ReviewDialogComponent, {data: this.product.review});
  }

  openWriteDialog(): void {
    const dialogRef = this.dialog.open(WriteReviewDialogComponent, {
      width: '250px',
    });

    this.subscription = dialogRef.afterClosed().subscribe(result => {    
      this.dialogValue = result.data;
      console.log('The dialog was closed', result.data);
      this.subscription.unsubscribe();
    });
  }

  ngOnInit(): void {
    this.currentRate = this.getRating();
  }

  getRating(): number {
    this.reviews = this.product.review;
    let sum = 0;
    for (let i = 0; i < this.reviews.length; i++) {
      sum += this.reviews[i].rating;
    }
    return sum/this.reviews.length;
  }
}
