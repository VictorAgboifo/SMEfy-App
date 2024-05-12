import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PremiumFeaturePage } from './premium-feature.page';

describe('PremiumFeaturePage', () => {
  let component: PremiumFeaturePage;
  let fixture: ComponentFixture<PremiumFeaturePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumFeaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
