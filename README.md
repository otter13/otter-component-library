# otter-component-library
A library of React components which follows HOC pattern, aiming at open for extension. For education, exploration and prototype purposes based on React v18.

[Figma Design System (WIP)](https://www.figma.com/community/file/1184696002966775031)

[Storybook Demo @ Github Page](https://otter13.github.io/otter-component-library)

[Github](https://github.com/otter13/otter-component-library)

[NPM](https://www.npmjs.com/package/otter-component-library)

## Installation
Run the following command:
`npm install otter-component-library`

### Support for both CommonJS and ES6 module
Yes, this module supports both mode. Under the dist folder there are 2 different outputs.
## Published npm module
Visit [npmjs.com/package/otter-component-library](https://www.npmjs.com/package/otter-component-library)
## Working in this project
### Project Structure

It is just a choice of how to orgainse things. If you have a preferred way of structuring React components within a project you are of course welcome to do it however you like :)

The folder structure of this app is explained below:

```
.
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx | The definition of component
|   |   │   ├── Button.test.tsx | Unit tests for this component
|   |   │   ├── Button.stories | The storybook presentation of this component
|   |   │   └── index.ts | The export to external for this component
|   │   └── index.ts
│   └── index.ts
├── package.json
└── package-lock.json
```

---
## Build Prerequisites

- Install [macOS nvm](https://github.com/nvm-sh/nvm)
- Install [Windows nvm option 1:](https://github.com/coreybutler/nvm-windows)
- Install [Windows nvm option 2:](https://github.com/jasongin/nvs)
- Version on `nvm`.
  #### `nvm --version`
- Commands supported by `nvm`
  #### `nvm --help`
- Display versions of `node` available fo install
  #### `nvm ls-remote`
- Install the version of node to be used.
  #### `nvm install v16.14.0`
- The file `.nvmrc` at the root of the project directory should have the version of node you are using
  #### `echo "v16.14.0" > .nvmrc`
- [node.js](https://nodejs.org/en/) version `16.14.0`

---
## Build Project

- Install project defined `node` version

  - Assuming nvm (Node Version Manager) is installed.
  - Assuming version of node defined in the `.nvmrc` file is installed (`` nvm install `cat .nvmrc` ``)

  ### `nvm use`

- Install `node modules` as defined in the `package.json` file.

  ### `yarn install`

---
## Creating or Modifiying Components

Refer to `CONTRIBUTE.md`

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

#### Publishing Storybook to Github Page
I override the default script inserted by Storybook init: `build-storybook`

This will tell Storybook to put the statically generated files into a `docs-build` folder. We don't actually need to create a `docs-build` folder in our repo as it will only be used temporarily for the deployment.

I am triggering the workflow only when files change inside the `stories` and `src/components` folders. You can customize the script accordingly if your stories and/or source files reside in another folder. Alternatively, you can trigger the workflow on every push by setting the `on` section

For more details, see inside `.github\workflows\storybook.yml`. For consistency, `yarn` is used instead of `npm` in the workflow.

The actual deployment is in [github settings](https://github.com/otter13/otter-component-library/settings/pages), which automatically takes `/docs` to deploy to Github Page.

### TODOs

- [x] Storybook
- [ ] Figma UX Component Dictionary
- [ ] More advanced components
- [ ] SCSS
- [ ] Automatically publish to NPM / Git module
- [x] Host Storybook on Github Page
- [x] Use Github's CICD (Github action)


