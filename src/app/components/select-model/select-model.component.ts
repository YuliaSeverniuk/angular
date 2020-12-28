import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-model',
  templateUrl: './select-model.component.html',
  styleUrls: ['./select-model.component.css'],
})
export class SelectModelComponent implements OnInit {
  selectedModel = '';

  selectChangeHandler(event: any) {
    this.selectedModel = event.target.value;
  }

  constructor() {}

  ngOnInit(): void {}
}
