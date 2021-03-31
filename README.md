# React Coding Challenge

This project uses [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## TODO

The skeleton app uses test data but should use real data from https://jsonplaceholder.typicode.com/posts. The store is already configured and has a `posts` slice. It uses [Redux Toolkit](https://redux-toolkit.js.org/), which includes [Redux Thunk](https://github.com/reduxjs/redux-thunk) middleware, so [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk) can be used to create an action that loads the data. It should be dispatched when the `Posts` component mounts. When loading the `isLoading` state should be set to true then reset to false when the request succeeds.

You can load the data any way you like, for example using the `fetch` API or a library like [Axios](https://github.com/axios/axios).

The skeleton app uses [React Router](https://reactrouter.com/web/guides/quick-start) for displaying the relevant component for the current URL and linking between the posts list and the post page.

There are also other TODOs dotted around the code that need sorting.
