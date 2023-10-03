import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPackageUserSubscriptionComponent } from './list-package-user-subscription.component';

describe('ListPackageUserSubscriptionComponent', () => {
  let component: ListPackageUserSubscriptionComponent;
  let fixture: ComponentFixture<ListPackageUserSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPackageUserSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPackageUserSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
