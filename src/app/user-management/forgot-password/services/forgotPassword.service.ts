import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ForgotPassword } from '../entity/forgot-password';
import { Otp } from '../entity/otp';


@Injectable({
    providedIn: 'root'
})
export class ForgotPasswordService {

    constructor(private http: HttpClient) {
    }

    forgotPassword(forgotPassword: ForgotPassword): Observable<ForgotPassword> {
        return this.http.post<ForgotPassword>(environment.apiUrl + 'auth/changePassword', forgotPassword);
    }

    phoneNoCheck(phoneNo: string): Observable<any> {
        return this.http.get<any>(environment.apiUrl + 'auth/phone-no-check/' + phoneNo);
    }

    otpPost(otpObject: Otp): Observable<Otp> {
        return this.http.post<Otp>(environment.apiUrl + 'auth/otp-view/', otpObject);
    }

}
