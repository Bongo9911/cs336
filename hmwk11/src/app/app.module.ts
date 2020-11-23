import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

const firebaseConfig = {
	apiKey: "AIzaSyCReArVNuzqhvNNC_72NTzwYSC2Ok_9_Jc",
	authDomain: "dab33chat.firebaseapp.com",
	databaseURL: "https://dab33chat.firebaseio.com",
	projectId: "dab33chat",
	storageBucket: "dab33chat.appspot.com",
	messagingSenderId: "400026663970",
	appId: "1:400026663970:web:7460ad7d6ecd3168e89e7b",
	measurementId: "G-8FJ6QT0Z2F"
  };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
