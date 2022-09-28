import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RideRequestModel } from '../entities/ride-request';


@Injectable({
    providedIn: 'root'
})
export class RideRequestService {

    constructor(private http: HttpClient) {
    }

    rideRequest(rideRequest: RideRequestModel,token:any): Observable<RideRequestModel> {
        var reqHeader = new HttpHeaders({ 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
         });
        return this.http.post<RideRequestModel>(environment.apiUrl + 'ride-requests', rideRequest, { headers: token });

    }
}
