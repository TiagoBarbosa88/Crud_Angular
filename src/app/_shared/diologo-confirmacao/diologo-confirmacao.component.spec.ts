import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiologoConfirmacaoComponent } from './diologo-confirmacao.component';

describe('DiologoConfirmacaoComponent', () => {
  let component: DiologoConfirmacaoComponent;
  let fixture: ComponentFixture<DiologoConfirmacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiologoConfirmacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiologoConfirmacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
