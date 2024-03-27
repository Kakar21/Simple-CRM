import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideNativeDateAdapter(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-2c2fe","appId":"1:715619531708:web:183e668f642686b49d09b9","storageBucket":"simple-crm-2c2fe.appspot.com","apiKey":"AIzaSyC4QQylGu1sFjotPjabPGguomdLCdn8VnQ","authDomain":"simple-crm-2c2fe.firebaseapp.com","messagingSenderId":"715619531708"}))), importProvidersFrom(provideFirestore(() => getFirestore())), importProvidersFrom(provideDatabase(() => getDatabase()))]
};
