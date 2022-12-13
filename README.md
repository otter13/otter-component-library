# otter-component-library
A library of React components which follows HOC pattern, aiming at open for extension.
## Installation
Run the following command:
`npm install otter-component-library`
### Support for both CommonJS and ES6 module
Yes, this module supports both mode. Under the dist folder there are 2 different outputs.
## Published npm module
Visit [npmjs.com/package/otter-component-library](https://www.npmjs.com/package/otter-component-library)
## Working in this project
### Structure
It is just a choice of how to orgainse things. If you have a preferred way of structuring React components within a project you are of course welcome to do it however you like :)
```
.
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
└── package-lock.json
```
### Housework tools
#### Packaging
Instead of webpack, <mark>rollup</mark> is used. Typically webpack is used for bundling applications while rollup is particularly suited for bundling libraries (like ours). That's why I've chosen rollup. See the details in its config:
`rollup.config.js`
#### Optimizing
A plugin called <mark>terser</mark> is used to minify bundle and reduce the overall file size.
#### Testing
To test components I use React Testing Library, and to run those tests: Jest
`jest.config.js`
#### Transpiling
The bundle tool rollup has its plugin @rollup/plugin-typescript so all good.
For instructing Jest, a Jest plugin called babel-jest that tells Jest to use Babel to handle JSX transformations. See config at:
`babel.config.js`