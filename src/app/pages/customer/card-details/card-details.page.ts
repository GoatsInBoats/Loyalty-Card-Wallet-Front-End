/* tslint:disable:no-trailing-whitespace */
import {Component, OnInit} from '@angular/core';
import {Config} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../../providers/company.service';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.page.html',
    styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

    passedId = null;
    company: any[];

    constructor(public config: Config,
                private http: HttpClient,
                private route: ActivatedRoute,
                public companyService: CompanyService) {

    }

    ngOnInit() {
        this.passedId = this.route.snapshot.paramMap.get('companyId');
        this.getCard();
    }


    private getCard() {
        this.companyService.getCompanyById(this.passedId).subscribe(
            response => {
                this.company = response;
                this.company = Array.of(this.company);
            }
        );
    }
}
