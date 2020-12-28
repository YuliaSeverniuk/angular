import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.css']
})
export class TopCardComponent implements OnInit {
  @Input() product;

  constructor() {}

  ngOnInit(): void {}
}
