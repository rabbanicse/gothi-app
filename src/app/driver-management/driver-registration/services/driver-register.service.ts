import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DriverRegister } from '../entity/driverRegister';

@Injectable({
  providedIn: 'root'
})
export class DriverRegisterService {

  constructor(private http: HttpClient) { }

  registerNewUser(registerObj: DriverRegister): Observable<DriverRegister> {
    return this.http.post<DriverRegister>(environment.apiUrl + 'auth/register',registerObj);
}

}
