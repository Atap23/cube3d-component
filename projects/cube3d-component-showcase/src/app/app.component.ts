import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Cube3dComponentComponent} from '../../../cube3d-component/src/lib/cube3d-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(Cube3dComponentComponent)
  public cube3d: Cube3dComponentComponent;
}
