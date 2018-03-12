import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { HelpComponent } from './help/help.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { DateComponentComponent } from './date-component/date-component.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'menu',
    component: MenuComponent,
    outlet: 'outlet'
  },
  {
    path: 'error',
    component: ErrorComponent,
    outlet: 'outlet'
  },
  {
    path: 'help',
    component: HelpComponent,
    outlet: 'outlet'
  },
  {
    path: 'feedback',
    component: FeedBackComponent,
    outlet: 'outlet'
  },
  {
    path: 'date',
    component: DateComponentComponent,
    outlet: 'outlet'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }