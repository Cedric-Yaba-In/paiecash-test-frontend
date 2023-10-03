import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeToPackageComponent } from './subscribe-to-package.component';

describe('SubscribeToPackageComponent', () => {
  let component: SubscribeToPackageComponent;
  let fixture: ComponentFixture<SubscribeToPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeToPackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeToPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
