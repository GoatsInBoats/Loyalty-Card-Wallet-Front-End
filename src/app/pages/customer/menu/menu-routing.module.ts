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
