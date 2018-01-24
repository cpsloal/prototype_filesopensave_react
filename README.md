# prototype_fileopensave_react

> This is a quick dirty prototype app, to test various different things and should not be considered anywhere close to proper programming. Also do not use this in any form of real app/code.

Including:

* [React Router](https://reacttraining.com/react-router/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk/)
* [Redux Actions](https://github.com/acdlite/redux-actions/)
* [Redux Local Storage](https://github.com/elgerlambert/redux-localstorage/)
* [Electron Packager](https://github.com/electron-userland/electron-packager)
* [Electron DevTools Installer](https://github.com/MarshallOfSound/electron-devtools-installer)
* [Electron Mocha](https://github.com/jprichardson/electron-mocha)
* [Browsersync](https://browsersync.io/)

## Quick start


Install dependencies
```bash
npm install
```

Development
```bash
npm run develop
```

## DevTools

Toggle DevTools:

* OSX: <kbd>Cmd</kbd> <kbd>Alt</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Linux: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>
* Windows: <kbd>Ctrl</kbd> <kbd>Shift</kbd> <kbd>I</kbd> or <kbd>F12</kbd>

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

For a full list of options see: https://github.com/electron-userland/electron-builder/wiki/Options.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## Tests

```
npm run test
```

#### Screenshots
![Screenshot Landing page](/doc/screenshot-01.png)
![Screenshot Open page](/doc/screenshot-02.png)
![Screenshot Open page w/ data](/doc/screenshot-03.png)
![Screenshot Save page w/ data](/doc/screenshot-04.png)
![Screenshot Open/Save As page w/o data](/doc/screenshot-05.png)
![Screenshot Open/Save As page w/ loaded file data](/doc/screenshot-06.png)

---

This project was generated with [electron-react-redux-boilerplate](https://github.com/jschr/electron-react-redux-boilerplate)@[5f1b91f](https://github.com/jschr/electron-react-redux-boilerplate/tree/5f1b91f0d26220e62b1811ebddd6c6491e7a38fb)
