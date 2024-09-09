import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductitemsComponent } from './productitems.component';

describe('ProductitemsComponent', () => {
  let component: ProductitemsComponent;
  let fixture: ComponentFixture<ProductitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductitemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
