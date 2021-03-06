## NuxtBnB (WIP)

NuxtBnB is production ready AirBnB clone. Get to work with bookings, date picking, payments, galleries, users, and many more!

### DEMO
[Access](https://nuxtbnb-gabrielcaiana.vercel.app/)

> technologies used

-   ð [Nuxt](https://nuxtjs.org/)â - The Intuitive Vue Framework
-   â¦ï¸ [Algolia](https://www.algolia.com/)â - The best Search and Discovery Platform for your business
-   ð½ [Vuex](https://vuex.vuejs.org/)â - Vuex is a state management pattern + library for Vue.js applications.
-   ð° [Stripe](https://pinia.vuejs.org/)â - internet payment infrastructure
-   ð  [Google Maps](https://developers.google.com/maps?hl=pt-br)â - âCloud APIs allow you to automate workflows using your preferred langua
-   ð [Jest](https://jestjs.io/)â -â Unit/Snapshot Testing
-   ð§© [Commitlint](https://commitlint.js.org/#/)â -â helps your team adhering to a commit convention.
-   ð»ââï¸ [Tailwind](https://tailwindcss.com/)â -â Rapidly build modern websites without ever leaving your HTML.

## Usage

-   `yarn dev` - This start application.
-   `yarn jest` - Run all linting and unit tests before committing.
-   `yarn jest -o` - Run only the tests that have changed.
-   `yarn jest -u` - Update all of the snapshot tests.


Install dependencies:

```sh
yarn install
```

## Testing

Run Vue components unit tests:

```sh
yarn jest
```

Open test coverage detailed report:

```sh
yarn jest:coverage
```
## Commit types

| Commit Type | Title                    | Description                                                                                                 | Emoji |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- | :---: |
| `feat`      | Features                 | A new feature                                                                                               |   â¨   |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |   ð   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |   ð   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |   ð   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |   ð¦   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |   ð   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |   ð¨   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   ð    |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |   âï¸   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |   â»ï¸   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |   ð   |


