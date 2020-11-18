import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyLibComponent } from './dummy-lib.component';

describe('DummyLibComponent', () => {
  let component: DummyLibComponent;
  let fixture: ComponentFixture<DummyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
