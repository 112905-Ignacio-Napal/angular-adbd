import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorClicksComponent } from './contador-clicks.component';

describe('ContadorClicksComponent', () => {
  let component: ContadorClicksComponent;
  let fixture: ComponentFixture<ContadorClicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorClicksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorClicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
