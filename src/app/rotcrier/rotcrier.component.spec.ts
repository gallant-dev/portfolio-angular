import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotcrierComponent } from './rotcrier.component';

describe('RotcrierComponent', () => {
  let component: RotcrierComponent;
  let fixture: ComponentFixture<RotcrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotcrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotcrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
