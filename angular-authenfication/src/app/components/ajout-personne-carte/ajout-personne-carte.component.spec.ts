import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPersonneCarteComponent } from './ajout-personne-carte.component';

describe('AjoutPersonneCarteComponent', () => {
  let component: AjoutPersonneCarteComponent;
  let fixture: ComponentFixture<AjoutPersonneCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutPersonneCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPersonneCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
