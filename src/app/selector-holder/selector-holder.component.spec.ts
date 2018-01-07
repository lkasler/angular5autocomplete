import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorHolderComponent } from './selector-holder.component';

describe('SelectorHolderComponent', () => {
  let component: SelectorHolderComponent;
  let fixture: ComponentFixture<SelectorHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
