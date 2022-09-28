import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-ride',
  templateUrl: './switch-ride.component.html',
  styleUrls: ['./switch-ride.component.scss'],
})
export class SwitchRideComponent implements OnInit {
  isShown:boolean = false;

  constructor() { }

  ngOnInit() {}

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }

}
