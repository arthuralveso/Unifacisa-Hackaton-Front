import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterContribuinteComponent } from './manter-contribuinte.component';

describe('ManterContribuinteComponent', () => {
  let component: ManterContribuinteComponent;
  let fixture: ComponentFixture<ManterContribuinteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterContribuinteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterContribuinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
