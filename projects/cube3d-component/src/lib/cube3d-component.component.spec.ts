import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cube3dComponentComponent } from './cube3d-component.component';

describe('Cube3dComponentComponent', () => {
  let component: Cube3dComponentComponent;
  let fixture: ComponentFixture<Cube3dComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cube3dComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cube3dComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
