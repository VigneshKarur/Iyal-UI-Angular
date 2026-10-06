import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build a Google Maps directions URL for the workshop address', () => {
    const url = component.getDirectionsUrl();

    expect(url).toContain('https://www.google.com/maps/dir/?api=1');
    expect(url).toContain('destination=11.02640419623925%2C76.95095051349344');
    expect(url).toContain('travelmode=driving');
  });
});
