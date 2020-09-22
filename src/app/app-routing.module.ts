import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './services/AuthGuard/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'playlist/:id', loadChildren: () => import('./modules/playlist/playlist.module').then(m => m.PlaylistModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
