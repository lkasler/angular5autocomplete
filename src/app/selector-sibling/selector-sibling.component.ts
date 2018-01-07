import { AutocompleteSelectorComponent } from './../autocomplete-selector/autocomplete-selector.component';
import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-selector-sibling',
  templateUrl: './selector-sibling.component.html',
  styleUrls: ['./selector-sibling.component.css']
})
export class SelectorSiblingComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() selectorAutocomplete: AutocompleteSelectorComponent;

  ngOnDestroy(): void {
    this.selectorAutocomplete.selectorSubject.unsubscribe();
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.selectorAutocomplete.selectorSubject.subscribe(option => console.log('User selected: ', option));
  }

  clickHandler(event) {
    console.log('Button clicked', event);
    console.log('User selected: ', this.selectorAutocomplete.myControl.value);
  }
}
