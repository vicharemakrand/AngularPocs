import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterErrorComponent } from './footer-error.component';

describe('FooterErrorComponent', () => {
  let component: FooterErrorComponent;
  let fixture: ComponentFixture<FooterErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
