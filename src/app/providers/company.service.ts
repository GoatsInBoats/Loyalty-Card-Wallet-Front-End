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
    stampCardsProgresses: any;
    stampCardId: any;
    private _countStampCardsProgresses: any = ' ';

    constructor(private httpClient: HttpClient,
                private loginService: LoginService,
                private http: HttpClient) {
    }

    get countStampCardsProgresses(): string {
        return this._countStampCardsProgresses;
    }

    getCompanies(): Observable<any> {
        const headers = {
            headers: new HttpHeaders()
                .set('Authorization', `${this.loginService.getToken()}`)
        };
        return this.httpClient.get(`${environment.apiUrl}/api/companies`, headers);
    }

    getCountOfUseCompanyStampCard(companyId) {
        this.getCompanyUserById(companyId).toPromise().then(data => {
            this.stampCardId = data['userSpecifics']['company']['stampCard']['id'].toString()
        }).finally(() => {
            this.stampCardsProgresses = this.getStampCardsProgressesById();
        }).finally(() => {
            this.print(this.stampCardId)
        }).finally(() => {
            // setTimeout(() => {
            console.log(this._countStampCardsProgresses);
            // }, 1000)
        });
    }


    getCompanyUserById(companyId): Observable<any> {
        const header = {
            headers: new HttpHeaders()
                .set('Authorization', `${this.loginService.getToken()}`)
        }
        return this.http.get<any>(`${environment.apiUrl}/api/users/${companyId}`, header)

    }

    print(stampCardId){
        let count: any = ' ';
        this.stampCardsProgresses.subscribe(res => {
            // console.log(res)
            // res.map(console.log, console)
            let result = 0;
            res.forEach(data => {
                if (stampCardId == data['stampCard']['id']){
                    result = result + 1;
                }
            })
            count = result;
            // setTimeout(() => {

            this._countStampCardsProgresses = result.toString();
            // }, 1000)


        }).finally(()=>{
            this._countStampCardsProgresses = count.toString()
            console.log(count)
        })
    }


    getStampCardsProgressesById(): Observable<any> {
        const header = {
            headers: new HttpHeaders()
                .set('Authorization', `${this.loginService.getToken()}`)
        }
        return this.http.get<any>(`${environment.apiUrl}/api/stampcards-progresses`, header)
    }
}
