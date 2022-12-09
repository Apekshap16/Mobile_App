import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferspendingComponent } from './offerspending.component';

describe('OfferspendingComponent', () => {
  let component: OfferspendingComponent;
  let fixture: ComponentFixture<OfferspendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferspendingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferspendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
