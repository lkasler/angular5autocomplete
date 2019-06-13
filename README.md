# Angular 5 MatAutocomplete selected option event handling demo

Mat Autocomplete example, with selected option event handling and transfroming to Observable

Open JS console to check the event handling logging

## MatAutocomplete selector component
autocomplete-selector.component

Check event handlong functions and properties, Subscriber stream, optionSelected event binding etc

## Sibling component of autocomplete-selector.component where we access the autocomplete component
selector-sibling.component
In the sibling component we accees the autocomplete component via @Input

## selector-sibling.component the holder component where we configure components and communications between them.


# AngularCommunication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Debug Angular app in VS Code

Use the `Debugger for Chrome` plugin for debugging client code in VS Code.

In the file launch.json use:
```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "runtimeExecutable": "/usr/bin/chromium-browser", //you may have to remove this line  or reassign the path of chrome
      "name": "Launch Chrome",
      "url": "http://localhost:4200",
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true,
      "userDataDir": "${workspaceRoot}/.vscode/chrome",
      "runtimeArgs": ["--disable-session-crashed-bubble"]
    },
    {
      "name": "Attach Chrome",
      "type": "chrome",
      "request": "attach",
      "url": "http://localhost:4200",
      "port": 9222,
      "webRoot": "${workspaceRoot}",
      "sourceMaps": true
    }
  ]
}
```

It's important to be sure that Chrome instances are not already running or Chrome already launched with debug port 9222.
To lauch chrome with debug port use the additional argument in the target shortcut (Recommandation: Create a new desktop short for that): ` --remote-debugging-port=9222`.

Example whole command: ${Chrome_folder}/chrome.exe --remote-debugging-port=9222`
