import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadpreviewComponent } from './cadpreview.component';

describe('CadpreviewComponent', () => {
  let component: CadpreviewComponent;
  let fixture: ComponentFixture<CadpreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadpreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
