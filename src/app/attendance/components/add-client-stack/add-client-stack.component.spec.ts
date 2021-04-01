import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientStackComponent } from './add-client-stack.component';

describe('AddClientStackComponent', () => {
  let component: AddClientStackComponent;
  let fixture: ComponentFixture<AddClientStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
