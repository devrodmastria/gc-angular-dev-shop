import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCatalogComponent } from './dev-catalog.component';

describe('DevCatalogComponent', () => {
  let component: DevCatalogComponent;
  let fixture: ComponentFixture<DevCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
