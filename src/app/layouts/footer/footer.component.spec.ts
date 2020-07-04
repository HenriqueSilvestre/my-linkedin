import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterngComponent } from './footer.component';

describe('FooterngComponent', () => {
  let component: FooterngComponent;
  let fixture: ComponentFixture<FooterngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
