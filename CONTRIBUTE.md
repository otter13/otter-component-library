# Developing for the Otter UI Library

This is a simple guide to help you getting started in developing or modifying a new component in the UI Library

## Structure
This project can be viewed from three perspectives, 1/ developer, 2/ storybook reader, 3/library consumer. 
Each perspective comes with its own structure and the developers are responsible for them. 

On the **developer perspective** we are following the atomic design. Details: https://atomicdesign.bradfrost.com/chapter-2/.

On the **storybook reader perspective** component are categorised by their usage (form, feedback, data display...)

On the **consumer perspective** components are not categorised.

## Creating New Components

- make sure to put in the correct folder (see above)
- use the styles we already have declared in the [themes folder](https://github.com/otter13/otter-component-library/blob/main/src/theme)
- create a `yourNewComponent.stories.tsx`and include all possible variations and attributes using [controls](https://storybook.js.org/docs/react/essentials/controls).
- if not sure where to start, try to follow the logic and stories for the `checkbox component` (it is quite simple component and it covers what is expected)
- while creating component, it is necessary for component props to also extends native props HTMLAttribute where possible to enhance accessibility. For reference, checkout `Chip element` to see implementation

## Modifying Components

- the most important thing is to ensure the stories are still valid and there are no major breaking changes.


## Documenting

In add
## Raising a Pull Request / Merging Code

- Create a new feature/bug fix from the master branch
- update the [CHANGELOG.MD](https://github.com/otter13/otter-component-library/blob/main/CHANGELOG.md) page.
  - for new components record as major version
  - for bug fixes and enhancements record as a minor version
- Mention that your pull request is ready for review

## Deploying

- Once the code has been merged to master, visit [Gitlab](https://gitlab.com/limosmiley/otter-component-library)
- Click on the link with the latest build number
- After the `Checkout and build` has been completed, click on `Deploy to PDEV` and run this job
- Once the previous step has also been completed, click on `Release` and run this job
- Verify on [NPM](https://www.npmjs.com/package/otter-component-library) that the version has been created successfully
- Announce the new version by messaging `https://github.com/otter13` with some information on the work that has been done. **Make sure to highlight breaking changes**

## Maintainers

- [Jin Li](https://github.com/otter13)
