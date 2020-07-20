import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Cube3dComponentModule} from '../../../cube3d-component/src/lib/cube3d-component.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Cube3dComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
