import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarProdutosComponent } from './pesquisar-produtos.component';

describe('PesquisarProdutosComponent', () => {
  let component: PesquisarProdutosComponent;
  let fixture: ComponentFixture<PesquisarProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
