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
import { TramiteDetailPage } from './../pages/tramite-detail/tramite-detail';
import { TramitesPage } from './../pages/tramites/tramites';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../env/environment';
import { NewProcedurePage } from '../pages/new-procedure/new-procedure';
import { ApiProvider } from '../providers/api';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';


import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';


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
    LoginPage,
    NewProcedurePage,
    TramitesPage,
    TramiteDetailPage
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
    LoginPage,
    NewProcedurePage,
    TramitesPage,
    TramiteDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider, 
    Media, File, 
    FileTransfer
  ]
})
export class AppModule {}
