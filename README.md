# github-repo-lister

A [React](https://facebook.github.io/react/index.html) + [Redux](http://redux.js.org/)
exercise, a web app that lists a user’s GitHub repositories. Check it at [GitHub
pages](https://peruukki.github.io/github-repo-lister/).

The project’s structure is based on
[create-react-app](https://github.com/facebookincubator/create-react-app), see
its separate [README](README-create-react-app.md) for more details.

## Running Development Server

```
npm start
```

Runs the app in the development mode. Watches for changes and reloads the app in the browser. Also runs the linter.

## Running Tests

```
npm test
```

Runs the tests once.

```
npm run test:watch
```

Runs the tests on file changes.

## Running Type Checks

```
npm run flow
```

Runs the [Flow](https://flowtype.org/) type checks.

## Creating Production Build

```
npm run build
```

Creates a production build in the `build` directory.

## License

[MIT](LICENSE)

## Acknowledgements

The CSS spinner shown during repository fetching is from
[SpinKit](https://github.com/tobiasahlin/SpinKit).
