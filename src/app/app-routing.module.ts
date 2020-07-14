import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './providers/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/public/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'card-details/:companyId',
    loadChildren: () => import('./pages/customer/card-details/card-details.module').then( m => m.CardDetailsPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/customer/menu/menu.module').then( m => m.MenuPageModule)
  },

  // MANAGER COMPONENTS

  {
    path: 'menu',
    loadChildren: () => import('./pages/manager/menu/menu.module').then( m => m.MenuPageModule)
  },

  // Wild Card Protection

  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule {}
