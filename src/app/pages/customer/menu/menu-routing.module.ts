import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MenuPage} from './menu.page';
import {AuthGuard} from '../../../providers/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: MenuPage,
        children: [
            {
                path: 'wallet',
                loadChildren: () => import('../wallet/wallet.module').then(m => m.WalletPageModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'promo',
                loadChildren: () => import('../promo/promo.module').then(m => m.PromoPageModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'map',
                loadChildren: () => import('../map/map.module').then(m => m.MapPageModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'qr',
                loadChildren: () => import('../qr/qr.module').then(m => m.QrPageModule),
                canActivate: [AuthGuard]
            },
            // {
            //     path: 'account',
            //     loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
            // },
            {
                path: '',
                redirectTo: '/menu/wallet',
                pathMatch: 'full'
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MenuPageRoutingModule {
}
