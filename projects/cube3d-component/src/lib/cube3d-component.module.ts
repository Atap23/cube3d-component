import { NgModule } from '@angular/core';
import { Cube3dComponentComponent } from './cube3d-component.component';
import {CommonModule} from '@angular/common';
import {Cube3dFrontFaceDirective} from './directives/cube3d-front-face.directive';
import {Cube3dBackFaceDirective} from './directives/cube3d-back-face.directive';
import {Cube3dLeftFaceDirective} from './directives/cube3d-left-face.directive';
import {Cube3dRightFaceDirective} from './directives/cube3d-right-face.directive';
import {Cube3dTopFaceDirective} from './directives/cube3d-top-face.directive';
import {Cube3dBottomFaceDirective} from './directives/cube3d-bottom-face.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    Cube3dComponentComponent,
    Cube3dFrontFaceDirective,
    Cube3dBackFaceDirective,
    Cube3dLeftFaceDirective,
    Cube3dRightFaceDirective,
    Cube3dTopFaceDirective,
    Cube3dBottomFaceDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [Cube3dComponentComponent]
})
export class Cube3dComponentModule { }
