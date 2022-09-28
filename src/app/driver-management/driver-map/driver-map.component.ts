import { Component, OnInit } from '@angular/core';
declare var google;

@Component({
  selector: 'app-driver-map',
  templateUrl: './driver-map.component.html',
  styleUrls: ['./driver-map.component.scss'],
})
export class DriverMapComponent implements OnInit {
  

  constructor() { }

  ngOnInit() {
    this.initMap();
   }

  initMap() {
    const centerPosition = { lat: 23.8042, lng: 90.3667 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: centerPosition,
    });
    const marker = new google.maps.Marker({
      position: centerPosition,
      map: map,
    });
  }

}
