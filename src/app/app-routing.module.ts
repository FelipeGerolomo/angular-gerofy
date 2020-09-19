import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuard } from './services/AuthGuard/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },
    ]
  },
  {
    path: 'auth', component: LoginComponent, children: [{ path: '', component: LoginComponent }]
  }
];

// const routes: Routes = [
//   { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
