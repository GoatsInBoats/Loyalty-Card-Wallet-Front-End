import {Component, OnInit} from '@angular/core';
import {Config} from '@ionic/angular';
import {CompanyService} from '../../../providers/company.service';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-promo',
    templateUrl: './promo.page.html',
    styleUrls: ['./promo.page.scss'],
})
export class PromoPage implements OnInit {
    companies: any[];

    constructor(
        public config: Config,
        public companyService: CompanyService,
        public http: HttpClient
    ) {
    }

    ngOnInit() {
        this.getCompanies();
    }

    getCompanies() {
        this.companyService.getCompanies().subscribe(
            response => this.companies = response
        );
    }
}
