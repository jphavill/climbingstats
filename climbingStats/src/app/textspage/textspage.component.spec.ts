import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextspageComponent } from './textspage.component';

describe('TextspageComponent', () => {
  let component: TextspageComponent;
  let fixture: ComponentFixture<TextspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
