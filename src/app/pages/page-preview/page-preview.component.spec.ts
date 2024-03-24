import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepreviewComponent } from './page-preview.component';

describe('PagepreviewComponent', () => {
  let component: PagepreviewComponent;
  let fixture: ComponentFixture<PagepreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagepreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagepreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
