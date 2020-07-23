import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef, EventEmitter,
  KeyValueDiffer, KeyValueDiffers, Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Cube3dShowFaces} from './cube3d-component.types';
import {Cube3dComponentService} from './cube3d-component.service';
import {animate, AnimationEvent, state, style, transition, trigger} from '@angular/animations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cube3d-component',
  templateUrl: 'cube3d-component.component.html',
  styleUrls: ['cube3d-component.component.scss'],
  animations: [
    trigger('cube3dRotation', [
      state(Cube3dShowFaces.FRONT, style({
        transform: 'translate3d(0, 0, calc(({{cubeDeep}} / 2) * -1) )'
      }), { params: {cubeDeep: '200px'}}),
      state(Cube3dShowFaces.BACK, style({
        transform: 'rotate3d(0, 1, 0, 180deg) translate3d(0, 0, calc({{cubeDeep}} / 2) )'
      }), { params: {cubeDeep: '200px'}}),
      state(Cube3dShowFaces.LEFT, style({
        transform: 'rotate3d(0, 1, 0, 90deg) translate3d(calc(({{cubeWidth}} / 2)), 0, 0)'
      }), { params: {cubeWidth: '200px'}}),
      state(Cube3dShowFaces.RIGHT, style({
        transform: 'rotate3d(0, 1, 0, -90deg) translate3d(calc(({{cubeWidth}} / 2) * -1), 0, 0)'
      }), { params: {cubeWidth: '200px'}}),
      state(Cube3dShowFaces.TOP, style({
        transform: 'rotate3d(1, 0, 0, -90deg) translate3d(0, calc(({{cubeHeight}} / 2)), 0)'
      }), { params: {cubeHeight: '200px'}}),
      state(Cube3dShowFaces.BOTTOM, style({
        transform: 'rotate3d(1, 0, 0, 90deg) translate3d(0, calc(({{cubeHeight}} / 2) * -1), 0)'
      }), { params: {cubeHeight: '200px'}}),
      transition('* => *', animate('2000ms cubic-bezier(0.215, 0.61, 0.355, 1)'))
    ])
  ]
})
export class Cube3dComponentComponent implements DoCheck {
  @ViewChild('cubeContainer')
  public cubeContainer: ElementRef<HTMLElement>;
  @ViewChild('front')
  public front: ElementRef<HTMLElement>;
  @ViewChild('back')
  public back: ElementRef<HTMLElement>;
  @ViewChild('left')
  public left: ElementRef<HTMLElement>;
  @ViewChild('right')
  public right: ElementRef<HTMLElement>;
  @ViewChild('top')
  public top: ElementRef<HTMLElement>;
  @ViewChild('bottom')
  public bottom: ElementRef<HTMLElement>;

  @Output('faceChangeEnd')
  public faceChangeEnd: EventEmitter<{face: Cube3dShowFaces}>;

  public cubeHeight: string;
  public cubeWidth: string;
  public cubeDeep: string;
  public showClass: Cube3dShowFaces;

  private differ: KeyValueDiffer<string, any>;

  constructor(
    private _renderer: Renderer2,
    private _cd: ChangeDetectorRef,
    private differs: KeyValueDiffers,
    private elRef: ElementRef,
    private _cube3d: Cube3dComponentService
  ) {
    this.showClass = Cube3dShowFaces.FRONT;
    this.differ = this.differs.find({}).create();
    this.faceChangeEnd = new EventEmitter<{face: Cube3dShowFaces}>();

    this.cubeHeight = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-height');
    this.cubeWidth = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-width');
    this.cubeDeep = getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-deep');
  }

  public ngDoCheck(): void {
    const aux = {
      cubeHeight: getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-height'),
      cubeWidth: getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-width'),
      cubeDeep: getComputedStyle(this.elRef.nativeElement).getPropertyValue('--cube3d-deep')
    };
    const change = this.differ.diff(aux);
    if (change) {
      change.forEachChangedItem(item => {
        this[item.key] = item.currentValue;
      });
    }
  }

  public showFace(face: Cube3dShowFaces): void {
    this.showClass = face;
    this._cd.markForCheck();
  }

  public faceChangeAnimationEnd(event: AnimationEvent): void {
    this.faceChangeEnd.emit({ face: event.toState as Cube3dShowFaces });
  }
}
