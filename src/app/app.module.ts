import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';


import {LoginService} from "./providers/login.service";
import {HttpClientModule} from "@angular/common/http";
import {CompanyService} from "./providers/company.service";
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";
import {Base64ToGallery} from "@ionic-native/base64-to-gallery/ngx";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    BarcodeScanner,
    Base64ToGallery,
    HttpClientModule,
    LoginService,
    CompanyService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
