import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadSalasComponent } from './cantidad-salas.component';

describe('CantidadSalasComponent', () => {
  let component: CantidadSalasComponent;
  let fixture: ComponentFixture<CantidadSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CantidadSalasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CantidadSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
