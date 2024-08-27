import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
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
    loadChildren: () => import('./page/account/account.module').then(m => m.AccountPageModule),
    canActivate: [AuthGuard]  // Melindungi rute dengan guard
  },
  {
    path: 'order',
    loadChildren: () => import('./page/order/order.module').then(m => m.OrderPageModule),
    canActivate: [AuthGuard]  // Menambahkan guard jika perlu
  },
  {
    path: 'categories/groceries',
    loadChildren: () => import('./page/categories/groceries/groceries.module').then(m => m.GroceriesPageModule)
  },
  {
    path: 'categories/snack',
    loadChildren: () => import('./page/categories/snack/snack.module').then(m => m.SnackPageModule)
  },
  {
    path: 'categories/drink',
    loadChildren: () => import('./page/categories/drink/drink.module').then(m => m.DrinkPageModule)
  },
  {
    path: 'categories/essential-groceries',
    loadChildren: () => import('./page/categories/essential-groceries/essential-groceries.module').then( m => m.EssentialGroceriesPageModule)
  },
  {
    path: '**',
    redirectTo: 'beranda',  // Redirect untuk rute yang tidak ditemukan
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
