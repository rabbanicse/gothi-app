import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RideRequestModel } from '../entities/ride-request';
import { UpdateLocation } from '../entities/update-location';


@Injectable({
    providedIn: 'root'
})
export class UpdateLocationService {

    constructor(private http: HttpClient) {
    }

    updateLocation(updateLocation: UpdateLocation): Observable<UpdateLocation> {
        return this.http.post<UpdateLocation>(environment.apiUrl + 'auth/updateLocation', updateLocation);
    }

}
