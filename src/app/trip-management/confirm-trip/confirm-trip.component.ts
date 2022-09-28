import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Driver } from 'src/app/user-management/home/entities/driver';
import { RideRequestModel } from './entities/ride-request';
import { RideRequestService } from './services/rideRequest.service';
import { Storage } from '@capacitor/storage';
import { TouchSequence } from 'selenium-webdriver';
declare var google;

@Component({
  selector: 'app-confirm-trip',
  templateUrl: './confirm-trip.component.html',
  styleUrls: ['./confirm-trip.component.scss'],
})
export class ConfirmTripComponent implements OnInit,AfterViewInit {
  isHide:boolean = false;
  
  @Input() isHidden:boolean;
  @Input() driverList:any;
  debugger;
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  public rideRequestModel:RideRequestModel = new RideRequestModel();
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsDisplay = new google.maps.DirectionsRenderer();
  locationObj:any;
  tokenObj:any;
  googleResponse:any;
  map:any
  
  
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private rideRequestService:RideRequestService) { }
  ngAfterViewInit(): void {
    //this.loadMapWithDirection();
  }

  async ngOnInit() {
    let token = await Storage.get({ key: 'Token'});
    this.tokenObj = JSON.parse(token.value);
    let googleObj = await Storage.get({ key:'google'});
    this.googleResponse = JSON.parse(googleObj.value);
    console.log('check token', this.tokenObj);
    console.log('check google',this.googleResponse);
    this.locationObj =  history.state.driver;
    console.log('check location',this.locationObj);
    this.initMap();
    
    
  }
  initMap() {
    const centerPosition = { lat: 23.8042, lng: 90.3667 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: centerPosition,
    });
    this.directionsRenderer.setMap(map); 
    this.directionsRenderer.setDirections(this.googleResponse);
  }

  loadMapWithDirection() {
    const centerPosition = { lat: 23.8042, lng: 90.3667 };
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      center: centerPosition,
    });
    this.directionsRenderer.setMap(map); 
     this.directionsRenderer.setMap(map);
    this.directionsRenderer.setMap(map); 
    this.directionsRenderer.setDirections(this.googleResponse);
  }

  confirmTrip(){
    this.rideRequestModel.destination = this.googleResponse.request.destination.query;
    this.rideRequestModel.destination_latitude = this.locationObj.latitude;
    this.rideRequestModel.destination_longitude = this.locationObj.longitude;
    this.rideRequestModel.duration = this.googleResponse.routes[0].legs[0].duration.text;
    this.rideRequestModel.passenger_id = 2458;
    this.rideRequestModel.pickup_location = this.googleResponse.routes[0].legs[0].start_address;
    this.rideRequestModel.ride = 1;

    console.log('checking rider',this.rideRequestModel);
    console.log('checking token',this.tokenObj.accessToken);
    

    this.rideRequestService.rideRequest(this.rideRequestModel,this.tokenObj.accessToken).subscribe((response)=>{
      console.log('checking response',response);
      
    }); 
  }
  selectVehicleType(value:any){
    if (value == 'Moto'){
      this.isHidden = !this.isHidden;
    } else if(value == 'Car'){
      this.isHidden = !this.isHidden
    } else if(value == 'Cng'){
      this.isHidden = !this.isHidden
    }else if(value == 'Micro'){
      this.isHidden = !this.isHidden
    } else {
      this.isHidden = this.isHidden;
    }
  } 
  hideData() {
    this.isHidden = !this.isHidden;
  }
  

}

