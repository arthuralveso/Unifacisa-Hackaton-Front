import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarCategoriaComponent } from './pesquisar-categoria.component';

describe('PesquisarCategoriaComponent', () => {
  let component: PesquisarCategoriaComponent;
  let fixture: ComponentFixture<PesquisarCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
