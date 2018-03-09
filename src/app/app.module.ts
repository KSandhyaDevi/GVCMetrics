import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GvcMetricsService } from './gvc-metrics.service';
import { AppRoutingModule } from './/app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';
import { HelpComponent } from './help/help.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { DateComponentComponent } from './date-component/date-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    ErrorComponent,
    HelpComponent,
    FeedBackComponent,
    DateComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GvcMetricsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
