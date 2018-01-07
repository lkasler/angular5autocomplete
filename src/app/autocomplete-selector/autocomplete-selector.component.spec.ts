import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSelectorComponent } from './autocomplete-selector.component';

describe('AutocompleteSelectorComponent', () => {
  let component: AutocompleteSelectorComponent;
  let fixture: ComponentFixture<AutocompleteSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
