# Popcorn Frontend Challenge

## Table of Contents

- [Setup and Run](#Setup-and-Run)
- [Technologies](#Technologies)

### Setup and Run

##### Developer mode

- Install dependencies:

```
$ yarn
```

- Create `.env` based on `.env.example`
- Configure the envs

```
NEXT_PUBLIC_GOOGLE_BOOK_API_URL=
NEXT_PUBLIC_API_KEY=
NEXT_PUBLIC_APP_URL=
```

- Run `$ yarn dev`

##### Production mode

- Install dependencies:

- Run `$ yarn`
- Run `$ yarn build`
- Run `$ yarn start`

### Tests and Coverage

- Run tests `$ yarn test`
- Run test coverage `$ yarn test-coverage`

### Technologies

- [NextJS](https://nextjs.org/) as the frontend framework to build the app
- [Jest](https://jestjs.io/) as a test tool
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/) as a tool to test UI
- [Eslint](https://eslint.org/) to code pattern
- [Husk](https://github.com/typicode/husky) a git hook that run prettier, eslint and tests when doing commit
- [Typescript](https://www.typescriptlang.org/) to code typecheck

### ToDo
- [ ] Add storybook
- [ ] I18n to localization
- [ ] Improve test coverage
