import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {redirectUnauthorizedTo, redirectLoggedInTo, canActivate}  from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/home-page']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPagePageModule),
    ...canActivate(redirectLoggedInToHome),
  },
  {
    path: 'home',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then( m => m.HomePagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'home-pagedf',
    loadChildren: () => import('./pages/shorts-page/shorts-pagedf.module').then( m => m.ShortsPagedfPageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'chat-page',
    loadChildren: () => import('./pages/chat-page/chat-page.module').then( m => m.ChatPagePageModule),
    ...canActivate(redirectUnauthorizedToLogin),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
