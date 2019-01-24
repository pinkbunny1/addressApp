# Address book app
Refactoring code on my old side-project.
In hope to learn and be more comfortable with TypeScripts and DUCKs redux file structure and feature-first file structure to build scalable project, I have started to refactor this simple addressBookApp which is the conventional functionality-first approach React app.

## Author: Jin Lee

## Pre-installations

-   create-react-app@1.5.2
-   node.js@8.11.0

## Installations

```bash
 npm install
 npm start
 (to test) npm test
```

## How to add Typescript to existing React App
In order to convert existing react app to Typesciprt, it requires 2 changes:
 1. Add TypeSciprt Compiler (tsc) to assembling part of pipeline
 2. Change JS --> TS files

### 1. Add TypeSciprt Compiler (tsc) to assembling part of pipeline
1. Install dependencies:
   `$ npm install --save-dev typescript awesome-typescript-loader source-map-loader`
     - awesome-typescript-loader : webpack plugin to compile ts into js (like babel loader for babel)
     - source-map-loader : adds source map support for debugging
   `$ npm install --save @types/react @types/react-dom`  
   install type declaration files (.d.ts files) from @types for  any library in use.

2. Configure TypeScript
    ⋅⋅⋅Create a typescript config file to configure TypesScript (tsconfig.json in the root folder of the app)
    ```javascript
    <!-- tsconfig.json file -->
    {
        "compilerOptions": {
            "outDir": "./dist/",        // path to output directory
            "sourceMap": true,          // allow sourcemap support
            "strictNullChecks": true,   // enable strict null checks as a best practice
            "module": "es6",            // specify module code generation
            "jsx": "react",             // use typescript to transpile jsx to js
            "target": "es5",            // specify ECMAScript target version
            "allowJs": true             // allow a partial TypeScript and JavaScript codebase

            },
            "include": [
                "./src/"                // where ts files that needs to be compiled to js reside
            ]
    }
    ```

3. Setup Build pipeline
        ⋅⋅⋅1. Modify webpack.config.js file in order to add TypeScript compilation as a part of build process. Required changes are:
            ⋅⋅⋅1. To handle .ts & .tsx files
            ⋅⋅⋅2. Replace loader from babel-loader to awesome-typescript-loader
            ⋅⋅⋅3. Add source-map-loader
            ⋅⋅⋅4. Modify entry file from App.js to App.ts [optional]
            ```javascript
               <!-- webpack.config.js file -->
               module.exports = {
                    // change to .tsx if necessary
                    entry: './src/app.jsx',
                    output: {
                        filename: './dist/bundle.js'
                    },
                    resolve: {
                        // changed from extensions: [".js", ".jsx"]
                        extensions: [".ts", ".tsx", ".js", ".jsx"]
                    },
                    module: {
                        rules: [
                        // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
                        { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
                        // addition - add source-map support
                        { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
                        ]
                    },
                    externals: {
                        "react": "React",
                        "react-dom": "ReactDOM",
                    },
                    // addition - add source-map support
                    devtool: "source-map"
                }
            ```
        ⋅⋅⋅2. Delete .babelrc and other Babel dependencies from package.json
        ⋅⋅⋅3. Above actions correctly set up build pipeline with TypeScript for handling transpilation. Build the app with this command --> `$ npx webpack` (installation of npx is required `$ npm install -g npx`)
### 2. Change JS --> TS files
    1. Min conversion
        1. Change `.js —> .ts` or `.jsx --> .tsx` extensions in files
        2. Import React from react —> `import * as React from react`
        3. Add types to class declararion of `React.Component` by the end of `eract.Component<any, any>`. <property type, state type>      
    2. Add types
        1. Add types for properties and state for the Component
        2. Add types to params
    3. Convert the entire codevase
    After each step always bundle the app by running `$ npx webpack`



## To do
- [ ] Add TypeScripts
- [x] Change from functionality-first to feature-first
- [x] Separate one file into Container and Presentational Component
- [x] Apply DUCKs for Redux
- [ ] Add optimisation
