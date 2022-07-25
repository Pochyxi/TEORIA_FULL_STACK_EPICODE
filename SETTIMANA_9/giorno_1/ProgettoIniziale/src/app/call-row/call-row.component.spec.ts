import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallRowComponent } from './call-row.component';

describe('CallRowComponent', () => {
  let component: CallRowComponent;
  let fixture: ComponentFixture<CallRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
