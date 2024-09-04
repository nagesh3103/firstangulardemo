import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingrestaurantComponent } from './addingrestaurant.component';

describe('AddingrestaurantComponent', () => {
  let component: AddingrestaurantComponent;
  let fixture: ComponentFixture<AddingrestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddingrestaurantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddingrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
