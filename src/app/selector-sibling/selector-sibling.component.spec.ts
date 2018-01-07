import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSiblingComponent } from './selector-sibling.component';

describe('SelectorSiblingComponent', () => {
  let component: SelectorSiblingComponent;
  let fixture: ComponentFixture<SelectorSiblingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
