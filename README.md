# Vue.js Project Boilerplate

## Index
- [Library used](#library-used)
- [Directory Structure](#directory-structure)
- [Preparation](#preparation)
- [How to use](#how-to-use)
- [Update Logs](#update-logs)
- [Appendix](#appendix)

<a name="library-used"></a>
## Library used
- Vue.js 2.6
- Vuex
- Vue Router
- Jest /w vue-jest
- Webpack & Babel

<a name="directory-structure"></a>
## Directory Structure

```md
/
|- configs/       : Configuration files for compile, build
  |- env/         : Environment variables (User-defined `.env` file goes here)
|- src/
  |- components/  : Re-usable Vue component codes
  |- directives/  : Custom directives for elements
  |- mixins/      : Re-usable Vue logics
  |- pages/       : Page codes which composes a single view
  |- router/      : Vue Router logics
  |- store        : Vuex store logics
  |- index.html   : Base HTML file
  |- main.js      : Vue entry code
  |- App.vue      : Root Vue component
|- tests/         : Custom unit tests
```

<a name="preparation"></a>
## Preparation

1. Run npm install to provide required npm modules
2. Go to `/config/env` and make .env file for your project

### `.env`
TBD

<a name="how-to-use"></a>
## How to use

### How to build
1. Run `npm run build`
2. Use a build output from `/build` directory

### How to run webpack-dev-server
1. Run `npm run dev`
2. Visit `http://localhost:3000` (Automatically opens)

### How to run test
1. Run `npm run test:watch`

<a name="update-logs"></a>
## Update Logs

### v1.0.0
- Initial simple ready-to-use version

<a name="appendix"></a>
## Appendix
TBD
