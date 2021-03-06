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

## Running Tests and Checks

Running all tests and checks (linting, type checking, tests and code coverage) once:
```
npm test
```

Launching the interactive test runner:
```
npm run spec
```

Running just the tests once:
```
npm run spec:ci
```

Running just the tests with code coverage:
```
npm run spec:coverage
```

Running just the [Flow](https://flowtype.org/) type checker:
```
npm run flow
```

Running just the [ESLint](http://eslint.org/) JavaScript linter:
```
npm run lint:js
```

## Creating Production Build

```
npm run build
```

Creates a production build in the `build` directory.

## Deploying to GitHub Pages

```
npm run deploy
```

Creates a production build with `npm run build` and executes `deploy.sh` to
deploy to GitHub pages.

## License

[MIT](LICENSE)

## Acknowledgements

The CSS spinner shown during repository fetching is from
[SpinKit](https://github.com/tobiasahlin/SpinKit).
