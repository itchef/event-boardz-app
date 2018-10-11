# Event Boardz App
[![CircleCI](https://circleci.com/gh/itchef/event-boardz-app.svg?style=svg)](https://circleci.com/gh/itchef/event-boardz-app)

This is the front end application of event boardz. You need to start API to run Event Boardz application properly.

## Prerequisites
* Git - 2.17
* Angular CLI - 6.2.4
* NodeJS - 9.11.1
* Yarn - 1.10.1
* Chrome Browser

## Development

Want to contribute? Great!

### Setup Dependencies
1. Setup Event Boardz API and start the server
2. On the project root directory, run the followings,
```
git clone https://github.com/itchef/event-boardz-app.git
cd event-boardz-app
yarn install
yarn start
```
It will build event-boardz-app and run it on http://localhost:4200

### Other useful commands

| Command | Description |
| ------ | ------ |
| yarn build | Build the application. You can find the built project under dist/ folder. |
| yarn test | Run test cases of the project. It runs lint check before running the testcases. |
| yarn lint | Runs project indentation or linting rules |
| yarn e2e | Runs end to end protractor test cases. |
