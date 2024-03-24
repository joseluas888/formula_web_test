import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllFoldersComponent } from './page-all-folders.component';

describe('PageAllFoldersComponent', () => {
  let component: PageAllFoldersComponent;
  let fixture: ComponentFixture<PageAllFoldersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAllFoldersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageAllFoldersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
