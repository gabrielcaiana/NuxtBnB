## NuxtBnB (WIP)

NuxtBnB is production ready AirBnB clone. Get to work with bookings, date picking, payments, galleries, users, and many more!

### DEMO
[Access](https://nuxtbnb.gabrielcaiana.vercel.app/)

> technologies used

-   💚 [Nuxt](https://nuxtjs.org/)  - The Intuitive Vue Framework
-   ♦️ [Algolia](https://www.algolia.com/)  - The best Search and Discovery Platform for your business
-   👽 [Vuex](https://vuex.vuejs.org/)  - Vuex is a state management pattern + library for Vue.js applications.
-   💰 [Stripe](https://pinia.vuejs.org/)  - internet payment infrastructure
-   🛠 [Google Maps](https://developers.google.com/maps?hl=pt-br)  -  Cloud APIs allow you to automate workflows using your preferred langua
-   🃏 [Jest](https://jestjs.io/)  -  Unit/Snapshot Testing
-   🧩 [Commitlint](https://commitlint.js.org/#/)  -  helps your team adhering to a commit convention.
-   🐻‍❄️ [Tailwind](https://tailwindcss.com/)  -  Rapidly build modern websites without ever leaving your HTML.

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
| `feat`      | Features                 | A new feature                                                                                               |   ✨   |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |   🐛   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |   📚   |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |   💎   |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |   📦   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |   🚀   |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |   🚨   |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |   🛠   |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |   ⚙️   |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |   ♻️   |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |   🗑   |


