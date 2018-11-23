import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFirestoreModule } from "@angular/fire/firestore";

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from '@angular/fire';

export const config = {
    apiKey: "AIzaSyAN2ekCuCYU5LP2fsR1Ox1pyjc93Z-VRGQ",
    authDomain: "chatapp-9f6b4.firebaseapp.com",
    databaseURL: "https://chatapp-9f6b4.firebaseio.com",
    projectId: "chatapp-9f6b4",
    storageBucket: "chatapp-9f6b4.appspot.com",
    messagingSenderId: "631992828450"
  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
