import { MaterialModule } from './material/material.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AutocompleteSelectorComponent } from './autocomplete-selector/autocomplete-selector.component';
import { SelectorHolderComponent } from './selector-holder/selector-holder.component';
import { SelectorSiblingComponent } from './selector-sibling/selector-sibling.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteSelectorComponent,
    SelectorHolderComponent,
    SelectorSiblingComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
