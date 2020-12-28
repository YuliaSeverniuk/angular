import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  lat = 50.447914;
  lng = 30.522192;
  constructor() {}

  ngOnInit(): void {}
}
