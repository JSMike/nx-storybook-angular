# Setting up a composed Storybook with Angular in an Nx Monorepo

## Objective

Show a working example of a composed Storybook including an Angular library that works with the latest verion of Angular.

## Problem Statement

In Angular 12.2 changes to the Angular CLI resulted in breaking changes to how styles work with an @storybook/angular project.
Importing within an MDX with `import '!style-loader!css-loader!sass-loader!./...' no longer applied styles to the preview. New
patterns needed to be established to apply styling to the canvas in an Angular project, especially for cases where global styles
were expected, or where styles were required for formatting the canvas for Angular examples. This project will show patterns
that can be used for Angular 12.2+ projects to properly support these scenarios. This project will also show examples specific
to composed storybooks, how to set up a composed storybook, and review some of the current issues.

## Initial setup

This project was created using `npx create-nx-workspace`, and with generators provided by nrwl and storybook.

```bash
npx create-nx-workspace
npm install --save-dev @nrwl/storybook @storybook/angular @storybook/html
```

For create-nx-workspace an Angular application was selected, and then after installing the additional dev dependencies the angular and styles libraries were created using the nx console.

## Adding storybook

Storybooks were generated using the nx console for the Angular library, the styles library (js library), and the initial angular application (which will be used for the composed storybook).
Create storybook for styles library with brief intro and stories for the button toggle and 
button toggle group. Repeat for Angular component.

## Creating an example component

Created simple design for button toggle and button toggle group with html / css (scss).
Implement component using storybook.
Abstracted styles into mixins to enable sharing of styles between native and angular components.
Create angular component in a way that it consumes the styles library.

## Add some global styles to the project

Use bootstrap grid, and add some default spacing / font rules

## Add config for importing styles globally

^

## Add config for wrapping the storybook examples and applying canvas styles

^

## Configure composed storybook

Create intro page for composed storybook
Add config for composed stories.





