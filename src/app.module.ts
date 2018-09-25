import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule, MdButtonModule, MdToolbarModule, MdIconModule, MdListModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { FullscreenService } from './fullscreen.service';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Fullscreen1Component } from './fullscreen1/fullscreen1.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Fullscreen1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    RouterModule.forRoot([
      {
        path: 'comp1',
        component: Comp1Component
      },
      {
        path: 'comp2',
        component: Comp2Component
      },
      <any>{
        path: 'fullscreen1',
        component: Fullscreen1Component,
        fullscreen: true
      },
      {
        path: '',
        redirectTo: 'comp1',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: Comp1Component
      }
    ]),

  ],
  providers: [
    FullscreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
