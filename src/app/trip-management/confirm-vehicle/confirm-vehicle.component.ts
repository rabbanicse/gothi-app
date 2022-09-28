import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google;
@Component({
  selector: 'app-confirm-vehicle',
  templateUrl: './confirm-vehicle.component.html',
  styleUrls: ['./confirm-vehicle.component.scss'],
})
export class ConfirmVehicleComponent implements OnInit {

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;

  constructor() {}
  
  ngOnInit() {
    this.initMap();
  }
  initMap() {

    const centerPosition = { lat: 23.8042, lng: 90.3667 };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: centerPosition,
    });

    const marker = new google.maps.Marker({
      position: centerPosition,
      map: map,
    });
  }
}
