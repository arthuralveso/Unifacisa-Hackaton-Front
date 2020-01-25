import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarProdutosComponent } from './atualizar-produtos.component';

describe('AtualizarProdutosComponent', () => {
  let component: AtualizarProdutosComponent;
  let fixture: ComponentFixture<AtualizarProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtualizarProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
