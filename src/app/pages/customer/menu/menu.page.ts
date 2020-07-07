/* tslint:disable:no-trailing-whitespace */
import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {LoginService} from '../../../providers/login.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    pages = [
        {
            title: 'Wallet',
            url: '/menu/wallet',
            icon: 'wallet'
        }
    ];

    selectedPath = '';

    constructor(private router: Router,
                private loginService: LoginService) {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }

    logOut() {
        this.loginService.logout();
    }

    ngOnInit() {
    }

}
