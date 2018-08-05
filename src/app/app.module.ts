import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {  ChatPage } from '../pages/chat/chat';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemDetailsPage } from '../pages/item-details/item-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PipesModule } from '../pipes/pipes.module';
import { GetMessageService } from '../providers/getMessageService';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
     ChatPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PipesModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     ChatPage,
    ContactPage,
    HomePage,
    TabsPage,
    ItemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GetMessageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
