import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerPadraoComponent } from './container-padrao.component';

describe('ContainerPadraoComponent', () => {
  let component: ContainerPadraoComponent;
  let fixture: ComponentFixture<ContainerPadraoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerPadraoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerPadraoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
