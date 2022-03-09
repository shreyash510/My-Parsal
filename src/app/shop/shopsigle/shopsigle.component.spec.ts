import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsigleComponent } from './shopsigle.component';

describe('ShopsigleComponent', () => {
  let component: ShopsigleComponent;
  let fixture: ComponentFixture<ShopsigleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsigleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopsigleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
