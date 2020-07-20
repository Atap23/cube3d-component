import {ChangeDetectorRef, Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cube3d-component',
  templateUrl: 'cube3d-component.component.html',
  styleUrls: ['cube3d-component.component.scss']
})
export class Cube3dComponentComponent {
  public showClass: string;

  constructor(private _cd: ChangeDetectorRef) {
    this.showClass = 'show-bottom';
  }

  public showFrontFace(): void {
    this.showClass = 'show-front';
    this._cd.markForCheck();
  }

  public showBackFace(): void {
    this.showClass = 'show-back';
    this._cd.markForCheck();
  }

  public showLeftFace(): void {
    this.showClass = 'show-left';
    this._cd.markForCheck();
  }

  public showRightFace(): void {
    this.showClass = 'show-right';
    this._cd.markForCheck();
  }

  public showTopFace(): void {
    this.showClass = 'show-top';
    this._cd.markForCheck();
  }

  public showBottomFace(): void {
    this.showClass = 'show-bottom';
    this._cd.markForCheck();
  }



}
