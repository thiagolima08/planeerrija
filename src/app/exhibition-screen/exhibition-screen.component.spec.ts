import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionScreenComponent } from './exhibition-screen.component';

describe('ExhibitionScreenComponent', () => {
  let component: ExhibitionScreenComponent;
  let fixture: ComponentFixture<ExhibitionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
