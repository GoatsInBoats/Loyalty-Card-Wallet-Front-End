/* tslint:disable:no-trailing-whitespace */
import {Component, OnInit, ViewChild} from '@angular/core';
import {Config, IonList} from '@ionic/angular';
import {CompanyService} from '../../../providers/company.service';
import {UserService} from '../../../providers/user.service';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../../providers/login.service';
import {any} from 'codelyzer/util/function';

@Component({
    selector: 'app-wallet',
    templateUrl: './wallet.page.html',
    styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

    @ViewChild('cardsList', {static: true}) cardsList: IonList;

    ios: boolean;
    segment = 'myCards';
    groups: any = [];
    user: any;
    userId: string;
    companies: any[];
    companies1: any;

    constructor(
        public config: Config,
        public httpClient: HttpClient,
        public loginService: LoginService,
        public companyService: CompanyService,
        public userService: UserService
    ) {
        this.getCompanies();
    }


    ionViewDidEnter(){
        this.getCompanies();
        this.userId = this.loginService.userId;
        this.companies = this.companies1;
        this.getUser();
        this.ios = this.config.get('mode') === 'ios';
    }

    ngOnInit() {
        this.getCompanies();
        this.loginService.loginDismiss();
    }

    getCompanies() {
        this.companyService.getCompanies().subscribe(
            response => {
                this.companies1 = response;
                this.companies = response;
            }
        );
    }

    getItems(ev: any) {
        this.companies = this.companies1;
        const val = ev.target.value;
      // tslint:disable-next-line:triple-equals
        if (val && val.trim() != '') {
            this.companies = this.companies.filter((item) => {
                return (item.companyName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    }

    private getUser() {
        this.userService.getUserById(this.userId).subscribe(
            response => this.user = response
        );
    }

}
