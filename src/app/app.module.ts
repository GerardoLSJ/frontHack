import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { TitlesPage } from '../pages/titles/titles';
import { DetailPage } from '../pages/detail/detail';
import { AgendaPage } from '../pages/agenda/agenda';
import { ProfilePage } from '../pages/profile/profile';
import { AgendaDetailPage } from '../pages/agenda-detail/agenda-detail';
import { NewPostPage } from '../pages/new-post/new-post';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage, 
    TitlesPage, 
    DetailPage, 
    AgendaPage, 
    ProfilePage, 
    AgendaDetailPage, 
    NewPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage, 
    TitlesPage, 
    DetailPage, 
    AgendaPage, 
    ProfilePage, 
    AgendaDetailPage, 
    NewPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
