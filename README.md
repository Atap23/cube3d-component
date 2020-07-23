# Cube3dComponent

Documentation [Working in progress]. Yes, i have to do a lot of work but... step by step, mate :)

### Basic usage
Import the module:
```
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
```

Add this in your component's HTML:
```
<cube3d-component>
  <div cube3dFrontFace>Front</div>
  <div cube3dBackFace>Back</div>
  <div cube3dLeftFace>Left</div>
  <div cube3dRightFace>Right</div>
  <div cube3dTopFace>Top</div>
  <div cube3dBottomFace>Bottom</div>
</cube3d-component>
```

If some face is not provided, only face background-color will be visible.

### Define Cube3d size

You can define the Cube3d sizes (height, width and deep) by defining the next css variables:
```
--cube3d-height: 200px;
--cube3d-width: 400px;
--cube3d-deep: 200px;
```

Other css variables you can define:
```
--cube3d-front-face-background: red;
--cube3d-back-face-background: blue;
--cube3d-top-face-background: purple;
--cube3d-bottom-face-background: green;
--cube3d-left-face-background: olive;
--cube3d-right-face-background: gray;

--cube3d-face-border: 1px solid black;
--cube3d-face-border-radius: 25px;
```

### Change Cube3d face

To change Cube3d face, you will have to add this to the component where you are using the Cube3d:
```
import {Cube3dComponentComponent, Cube3dShowFaces} from 'cube3d-component';

@ViewChild(Cube3dComponentComponent)
public cube3d: Cube3dComponentComponent;

public changeCubeFace(): void {
  this.cube3d.showFace(Cube3dShowFaces.BACK);
}
```

### Listen for Cube3d face events

You can listen for the of a change animation like this:
```
<cube3d-component (faceChangeEnd)="yourFunction($event)">
  <div cube3dFrontFace>Front</div>
  <div cube3dBackFace>Back</div>
  <div cube3dLeftFace>Left</div>
  <div cube3dRightFace>Right</div>
  <div cube3dTopFace>Top</div>
  <div cube3dBottomFace>Bottom</div>
</cube3d-component>
```

