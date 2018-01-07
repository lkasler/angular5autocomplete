import { Observable } from 'rxjs/Observable';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Subject } from 'rxjs/Subject';

export class User {
  constructor(public name: string) { }
}

@Component({
  selector: 'app-autocomplete-selector',
  templateUrl: './autocomplete-selector.component.html',
  styleUrls: ['./autocomplete-selector.component.css']
})
export class AutocompleteSelectorComponent implements OnInit {

  myControl = new FormControl();

  options = [
    new User('Mary'),
    new User('Shelley'),
    new User('Igor')
  ];

  filteredOptions: Observable<User[]>;
  selectorSubject = new Subject();

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
      startWith({} as User),
      map(user => user && typeof user === 'object' ? user.name : ''),
      map(name => name ? this.filter(name) : this.options.slice())
      );
  }

  filter(name: string): User[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  displayFn(user: User): string {
    return user ? user.name : '';
  }

  handleSelector(event) {
    console.log('Value selected: ', event);
    this.selectorSubject.next(event.option.value);
  }

}
