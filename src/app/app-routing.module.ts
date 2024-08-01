import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cart',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot password/forgot/forgot.module').then(m => m.ForgotPageModule)
  },
  {
    path: 'verifikasi-email',
    loadChildren: () => import('./forgot password/verify-email/verify-email.module').then(m => m.VerifyEmailPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./forgot password/password-reset-confirmation/password-reset-confirmation.module').then(m => m.PasswordResetConfirmationPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./forgot password/new-password/new-password.module').then(m => m.NewPasswordPageModule)
  },
  {
    path: 'beranda',
    loadChildren: () => import('./page/beranda/beranda.module').then(m => m.BerandaPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./page/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./page/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./page/order/order.module').then(m => m.OrderPageModule)
  },
  {
    path: 'groceries',
    loadChildren: () => import('./page/categories/groceries/groceries.module').then(m => m.GroceriesPageModule)
  },
  {
    path: 'snack',
    loadChildren: () => import('./page/categories/snack/snack.module').then(m => m.SnackPageModule)
  },
  {
    path: 'drink',
    loadChildren: () => import('./page/categories/drink/drink.module').then(m => m.DrinkPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
