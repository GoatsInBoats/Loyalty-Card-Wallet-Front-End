import { Component, OnInit } from '@angular/core';
import {Config} from '@ionic/angular';
import {CompanyService} from '../../../providers/company.service';
import {UserService} from '../../../providers/user.service';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../../../providers/login.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  segment = 'myCards';
  groups: any = [];
  user: any;
  userId: string;
  companies: any[];

  constructor(
      public config: Config,
      public httpClient: HttpClient,
      public loginService: LoginService,
      public companyService: CompanyService,
      public userService: UserService
  ) {
  }



  ngOnInit() {
  }

}
