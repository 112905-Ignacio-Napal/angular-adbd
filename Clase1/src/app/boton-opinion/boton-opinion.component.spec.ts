import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonOpinionComponent } from './boton-opinion.component';

describe('BotonOpinionComponent', () => {
  let component: BotonOpinionComponent;
  let fixture: ComponentFixture<BotonOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonOpinionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
