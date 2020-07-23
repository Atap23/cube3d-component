import {Component, ViewChild} from '@angular/core';
import {Cube3dComponentComponent} from '../../../cube3d-component/src/lib/cube3d-component.component';
import {Cube3dShowFaces} from '../../../cube3d-component/src/lib/cube3d-component.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(Cube3dComponentComponent)
  public cube3d: Cube3dComponentComponent;

  public cube3dShowFaces: typeof Cube3dShowFaces;

  constructor() {
    this.cube3dShowFaces = Cube3dShowFaces;
  }

  public faceChanged($event: { face: Cube3dShowFaces }): void {
    alert($event.face);
    console.log($event.face);
  }
}
