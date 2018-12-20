## Project Info

Running any of these commands will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

**Main stack**
- Server: express
- Request: axios
- Render: create-react-app (without eject use react-app-rewired)
- UI library: antd
- Status management: redux
- Route: react-router-dom
- Code splitting: Loadable component
- Modular import: babel-plugin-import

**Folder Structure**
```
Project-path
├── README.md
├── LICENSE
├── node_modules
├── package.json
├── yarn.lock
├── yarn-error.log
├── .gitignore
├── .babelrc
├── .cmrh.config.js
├── .config-override.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── server
│   ├── html-template.js
│   └── server.js
└── src
    ├── asset
    ├── component
    ├── page
    ├── redux
    ├── utils
    ├── test
    ├── App.js
    ├── index.js
    └── serviceWorker.js
```

### In the project directory, you can run:

### `npm install || yarn`
After clone this project and before ant opration you should run this script to download all dependencies.

### `npm run deploy || yarn deploy`
This opration can deploy the front-end files on production environment.<br>
Open [http://localhost:9093](http://localhost:9093) to view it in the browser.

### `npm start || yarn start`
Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

### `npm build || yarn build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

### `npm test || yarn test`
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

[Read more about testing](https://facebook.github.io/create-react-app/docs/running-tests).