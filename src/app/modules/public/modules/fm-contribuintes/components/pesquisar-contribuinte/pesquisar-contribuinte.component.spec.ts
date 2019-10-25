import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarContribuinteComponent } from './pesquisar-contribuinte.component';

describe('PesquisarContribuinteComponent', () => {
  let component: PesquisarContribuinteComponent;
  let fixture: ComponentFixture<PesquisarContribuinteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarContribuinteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarContribuinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
