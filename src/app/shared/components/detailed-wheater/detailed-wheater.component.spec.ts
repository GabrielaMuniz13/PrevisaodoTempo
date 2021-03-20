import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedWheaterComponent } from './detailed-wheater.component';

describe('DetailedWheaterComponent', () => {
  let component: DetailedWheaterComponent;
  let fixture: ComponentFixture<DetailedWheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedWheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedWheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
