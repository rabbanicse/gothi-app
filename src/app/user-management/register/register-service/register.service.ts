import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../entity/register';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) {
    }

    registerNewUser(registerObj: Register): Observable<Register> {
        return this.http.post<Register>(environment.apiUrl + 'auth/register',registerObj);
    }

}
