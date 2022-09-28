import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../entity/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Otp } from '../entity/otp';
import { LoginRequest } from '../entity/loginRequest';
import { LocationRequest } from '../entity/locationRequest';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    phoneNoCheck(phoneNo: string): Observable<Login> {
        return this.http.get<Login>(environment.apiUrl + 'auth/phone-no-check/' + phoneNo);
    }
    otpCheck(phoneNo: string): Observable<Login> {
        return this.http.get<Login>(environment.apiUrl + 'auth/otp-check/' + phoneNo);
    }

    otpPost(otpObject: Otp): Observable<Otp> {
        return this.http.post<Otp>(environment.apiUrl + 'auth/otp-view/', otpObject);
    }
    login(loginObjkct: LoginRequest): Observable<LoginRequest> {
        return this.http.post<LoginRequest>(environment.apiUrl + 'auth/login/', loginObjkct);
    }
    getLocationOfCustomer(locationRequest: LocationRequest): Observable<LocationRequest> {
        return this.http.post<LocationRequest>(environment.apiUrl + 'auth/login/', locationRequest);
    }

}
