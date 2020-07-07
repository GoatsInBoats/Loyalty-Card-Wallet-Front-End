import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../../providers/login.service";
import {CompanyService} from "../../../providers/company.service";

@Component({
  selector: 'app-stat',
  templateUrl: './stat.page.html',
  styleUrls: ['./stat.page.scss'],
})
export class StatPage implements OnInit {
  private userId: string;
  stampCardCount: any;

  constructor(
      private loginService: LoginService,
      private companyService : CompanyService
  ) { }

  ionViewDidEnter() {
    this.userId = this.loginService.userId;
    this.loginService.loginDismiss();
    this.getCountOfUseCompanyStampCard()
    setTimeout(()=>{
      this.getCountOfUseCompanyStampCard()
    },1000)
    //TODO
  }

  ngOnInit() {
  }

  getCountOfUseCompanyStampCard(){
    console.log(this.companyService.getCountOfUseCompanyStampCard(this.userId));
    setTimeout(()=>{
      this.stampCardCount = this.companyService.countStampCardsProgresses
    },1000)
    //TODO
  }

}
