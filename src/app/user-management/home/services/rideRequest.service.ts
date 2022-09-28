import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RideRequestModel } from '../entities/ride-request';


@Injectable({
    providedIn: 'root'
})
export class RideRequest {

    constructor(private http: HttpClient) {
    }

    rideRequest(rideRequest: RideRequestModel): Observable<RideRequestModel> {
        return this.http.post<RideRequestModel>(environment.apiUrl + 'ride-requests', rideRequest);
    }
    getDriverList(object:any): Observable<any> {
        return this.http.post<any>(environment.apiUrl + 'ride-requests/getDriverList', object);
    }

}
