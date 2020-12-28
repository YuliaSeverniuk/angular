import { Component, OnInit} from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-write-review-dialog',
  templateUrl: './write-review-dialog.component.html',
  styleUrls: ['./write-review-dialog.component.css']
})
export class WriteReviewDialogComponent implements OnInit {
  fromDialog: string;

  constructor(public dialogRef: MatDialogRef<WriteReviewDialogComponent>,
    ) { }

  ngOnInit(): void {
  }

  saveDialog(): void  {
    this.dialogRef.close({ event: 'close', data: this.fromDialog });
  }

}
