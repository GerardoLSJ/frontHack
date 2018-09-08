import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { TitlesPage } from '../pages/titles/titles';
import { DetailPage } from '../pages/detail/detail';
import { AgendaPage } from '../pages/agenda/agenda';
import { ProfilePage } from '../pages/profile/profile';
import { AgendaDetailPage } from '../pages/agenda-detail/agenda-detail';
import { NewPostPage } from '../pages/new-post/new-post';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../env/environment';

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
    NewPostPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    IonicModule.forRoot(MyApp),
    HttpClientModule
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
    NewPostPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
