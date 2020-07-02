/* tslint:disable:no-trailing-whitespace */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from './login.service';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    company: any;
    stampCardId: any;
    stampCardProgresses: any;

    constructor(private httpClient: HttpClient,
                private loginService: LoginService) {
    }

    getCompanies(): Observable<any> {
        const headers = {
            headers: new HttpHeaders()
                .set('Authorization', `${this.loginService.getToken()}`)
        };
        return this.httpClient.get(`${environment.apiUrl}/api/companies`, headers);
    }


}
