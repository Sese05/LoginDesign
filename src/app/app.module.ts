import { DetailDisplayPage } from './../pages/detail-display/detail-display';
import { StartUpPage } from './../pages/start-up/start-up';
import { DetailsPage } from './../pages/details/details';
import { RegisterPage } from './../pages/register/register';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Service} from './../app/service/service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    DetailsPage,
    StartUpPage,
    DetailDisplayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    DetailsPage,
    StartUpPage,
    DetailDisplayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Service,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
