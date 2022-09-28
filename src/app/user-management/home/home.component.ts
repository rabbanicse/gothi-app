import {
  AfterViewInit,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RideRequestModel } from './entities/ride-request';
import { RideRequest } from './services/rideRequest.service';
import { Storage } from '@capacitor/storage';
import { UpdateLocationService } from './services/updateLocation.service';
import { UpdateLocation } from './entities/update-location';
import { UserType } from 'src/app/Utility/enums/enum';
import { ToastController } from '@ionic/angular';
import { Driver } from './entities/driver';
import { DriverList } from './entities/driver-list';
import { DriverLocaiton } from './entities/driver-location';
import { ChangeDetectorRef } from "@angular/core";
declare var google;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  @ViewChild('search') public searchElementRef!: ElementRef;
  map: any;
  sourceLocation = '';
  destinationLocation = { input: '' };
  isExpand: boolean = false;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsDisplay = new google.maps.DirectionsRenderer();
  googleMapResponse: any;
  mobileNo: any;
  phoneNo: any;
  apiStatus: boolean;
  phoneNoValue: any;
  interval: any;
  public rideRequestObj: RideRequestModel = new RideRequestModel();
  public updateLocation: UpdateLocation = new UpdateLocation();
  driverLocaiton:DriverLocaiton = new DriverLocaiton();
  driver:DriverList = new DriverList();
  driverList:Driver[]=[];
  legs:any[]=[];

  GoogleAutocomplete: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  isShow:boolean = false;
  isShowList: boolean = false;

  constructor(
    public rideRequestService: RideRequest,
    private route: ActivatedRoute,
    private updateLocationService: UpdateLocationService,
    public toastController: ToastController,
    private router:Router,
    private cdr: ChangeDetectorRef,
    public zone: NgZone,
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];
  }

  async ngOnInit() {
    this.phoneNoValue = await Storage.get({ key: 'PhoneNo' });
   // this.getCurrentPosition();
    // this.interval = setInterval(() => {
    //   this.getCurrentPosition();
    // }, 1000000);
    this.initMap();
  }
  initMap() {
    const centerPosition = { lat: 23.8042, lng: 90.3667 };
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: centerPosition,
    });
    const marker = new google.maps.Marker({
      position: centerPosition,
      map: this.map,
    });
  }

  loadMapWithDirection() {
    const centerPosition = { lat: 23.8042, lng: 90.3667 };
    const map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 10,
      center: centerPosition,
    });
     this.directionsRenderer.setMap(map);
  }

  calculateAndDisplayRoute1() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const centerPosition = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: centerPosition,
      });

      const marker = new google.maps.Marker({
        position: centerPosition,
        map: map,
      });

      console.log('currentPosition', centerPosition);
      console.log('map', map);
    });
    this.directionsService.route(
      {
        origin: {
          query: this.sourceLocation,
        },
        destination: {
          query: this.destinationLocation,
        },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        console.log('google', response);
        this.googleMapResponse = response;
        if (status == 'OK') {
          this.directionsRenderer.setDirections(response);
        } else {
          window.alert('Direction req failed due to' + status);
        }
      }
    );
  }

  async calculateAndDisplayRoute() {
    this.directionsService
      .route(
        {
          origin: {
            query: this.sourceLocation,
          },
          destination: {
            query: this.destinationLocation.input,
          },
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          console.log('google', response)
          this.googleMapResponse = response;
          if (status == "OK") {
            // this.map = new google.maps.Map(document.getElementById("map"));
            this.directionsRenderer.setMap(this.map); 
            this.directionsRenderer.setDirections(response);
            this.driver.userLatitude = String(response.routes[0].legs[0].start_location.lat());
            this.driver.userLongitude = String(response.routes[0].legs[0].start_location.lng());
            this.driver.phoneNumber = this.phoneNoValue.value;
            this.driver.destinationLatitude = String(response.routes[0].legs[0].end_location.lat());
            this.driver.destinationLongitude = String(response.routes[0].legs[0].end_location.lng());
            this.driver.pickupLocation = response.routes[0].legs[0].start_address;
            this.rideRequestService
              .getDriverList(this.driver)
              .subscribe(async (res) => {
                if (res != null || res != undefined) {
                  this.driverLocaiton.phoneNumber = res.phoneNumber;
                  this.driverLocaiton.driverList = res.driverList;
                  this.driverLocaiton.rideFareModelList = res.rideFareModelList;
                  
                  const toast = await this.toastController.create({
                    message: 'Location Updated',
                    duration: 2000,
                    position: 'bottom',
                    color: 'tertiary',
                  });
                  await toast.present();
                  this.isExpand = false;
                }
                await Storage.set({key: 'google',  value:`${JSON.stringify(response)}`});
                // this.router.navigateByUrl('/trip/confirm-trip', {state: {driver: this.driverLocaiton}});
              });
              
          } else {
            window.alert("Direction req failed due to" + status);
          }
        })
    this.isExpand = false;
  }

  modalShow() {
    this.isExpand = !this.isExpand;
  }

  modalShowConfirmTrip() {
    this.isShow = !this.isShow;
  }

  rideRequest() {
    this.rideRequestObj.destination =
      this.googleMapResponse.routes[0].legs[0].end_address;
    this.rideRequestObj.destination_latitude =
      this.googleMapResponse.routes[0].legs[0].end_location.lat();
    this.rideRequestObj.destination_longitude =
      this.googleMapResponse.routes[0].legs[0].end_location.lng();
    this.rideRequestObj.driver_id = 1;
    this.rideRequestObj.duration = 30;
    this.rideRequestObj.fare = 100;
    this.rideRequestObj.passenger_id = history.state.PhoneNo != null ? history.state.PhoneNo : this.phoneNoValue.value;
    this.rideRequestObj.payment_type = 1;
    this.rideRequestObj.pickup_location =
      this.googleMapResponse.routes[0].legs[0].start_address;
    this.rideRequestObj.ride = 1;
    this.rideRequestObj.ride_category = 1;
    this.rideRequestObj.total_fare = 100;
  }
  getCurrentPosition() {
    // navigator.geolocation.watchPosition(pos=> {
    //   console.log('position',pos);
    // });
    navigator.geolocation.getCurrentPosition((pos) => {
      // this.sourceLocation = `${pos.coords.latitude},${pos.coords.longitude}`;
      this.updateLocation.latitude = String(pos.coords.latitude);
      this.updateLocation.longitude = String(pos.coords.longitude);
      this.updateLocation.phoneNumber = this.phoneNoValue.value;
      this.updateLocation.userType = UserType.Customer;
      this.updateLocationService
        .updateLocation(this.updateLocation)
        .subscribe(async (response) => {
          if (response != null || response != undefined) {
            this.driverList = response.driverList;
            this.addMarkersToMap(this.driverList);
            const toast = await this.toastController.create({
              message: 'Location Updated',
              duration: 2000,
              position: 'bottom',
              color: 'tertiary',
            });
            await toast.present();
          }
        });
    });
  }

  addMarkersToMap(driverList) {
    // const image ="../../../assets/carPremier.png";
    // var images = {
    //   url: image,
    //   size: new google.maps.Size(71, 71),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(17, 34),
    //   scaledSize: new google.maps.Size(20, 20)
    // };
    const centerPosition = { lat: 23.8042, lng: 90.3667 };
    this.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: centerPosition,
    });

   driverList.forEach(element => {
        var myLatLng = new google.maps.LatLng(element.latitude, element.longitude);
        const marker = new google.maps.Marker({
          position: myLatLng,
          map:this.map
        });
        marker.setMap(this.map);
        this.cdr.detectChanges()
      });

  }

  updateSearchResults(){
    if (this.destinationLocation.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.destinationLocation.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }
  selectSearchResult(item) {
    console.log(item)
    this.location = item
    this.placeid = this.location.place_id
    console.log('placeid'+ this.placeid)
  }

  selectVehicleType(car:string){
    this.isShowList = true;
  }

}
