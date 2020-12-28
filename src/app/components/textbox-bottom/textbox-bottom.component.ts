import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textbox-bottom',
  templateUrl: './textbox-bottom.component.html',
  styleUrls: ['./textbox-bottom.component.css'],
})
export class TextboxBottomComponent implements OnInit {
  @Input() product;

  constructor() {}

  ngOnInit(): void {}
}
