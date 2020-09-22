import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/AuthGuard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'playlist/:id', loadChildren: () => import('./modules/playlist/playlist.module').then(m => m.PlaylistModule),canActivate: [AuthGuard] },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
