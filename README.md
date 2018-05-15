## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

# Approach

### Created component strucuture on paper

https://imgur.com/a/o0GMHby


### Setup

Used create-react-app to get up and running quickly

Added aditional dependencies  -
    Axios - For network call
    Enzyme - To test components
    styled-components - Compoennt based approach for CSS
    standard - Linter. Easy to get start

Setup Enzyme
Added jest Mocks for axios
Cleanup unnecessary things from create react app

## Developement

Created presentational/dumb components first using TDD
Created connected dots with container

Fixed issues - 
    1) Blank UI was visible to user until we receive data from service. Fixed by adding placeholders (reactive design pattern)

    Screenshots - https://imgur.com/a/69Qb3O2 
    Commit - https://github.com/swapnil00patil/react-tdd/commit/2404322b44a61049f108c5d9ca56c241268a811f

    2) Initial load was not showing animation
    Commit - https://github.com/swapnil00patil/react-tdd/commit/017a1017b0d380ea5f08cb54b31f7adb9144f39e

    3) Issue with Mutating state (as we are not using any immutable library)
    Commit - https://github.com/swapnil00patil/react-tdd/commit/f259bccd5f2e3bd26aac4b676c0f0c3a59899e94

## Deployment

Added code splitting for vendors (we can split more if app size grow)

Added drop console logs to uglify webpack plugin

### Deployed to heroku 

URL - https://react-tdd-demo.herokuapp.com/
Screenshot - https://imgur.com/a/hnVCjBa