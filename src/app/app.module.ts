import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

import {MatGridListModule, MatButtonModule} from '@angular/material';

import { CounterComponent } from './component/counter/counter.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const COMPONENTS = [
  CounterComponent
];

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    BrowserAnimationsModule,
    MatGridListModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
