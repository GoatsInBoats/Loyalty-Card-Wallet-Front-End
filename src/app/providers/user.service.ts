/* tslint:disable:no-trailing-whitespace */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
        private loginService: LoginService
    ) {
    }

    getUserById(userId): Observable<any> {
        const headers = {
            headers: new HttpHeaders()
                .set('Authorization', `${this.loginService.getToken()}`)
        };
        return this.http.get<any>(`${environment.apiUrl}/api/users/${userId}`, headers);
    }

    getAllUsers(): Observable<any> {
        const headers = {
            headers: new HttpHeaders()
                .set('Authorization', `${this.loginService.getToken()}`)
        };
        return this.http.get<any>(`${environment.apiUrl}/api/users`, headers);
    }
}
