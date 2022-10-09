# clackd-slider

## how to make it work

1. `git clone` into an empty folder
2. `npm i`: installs necessary dependencies
3. `npm run dev`: to run the slider locally


## notes

- added lightbox functionality on image click in case the user wants to view the image at full width/height of the screen


## concerns

- still ironing out animations and design since i am not a designer :^) it was fun to learn though
- pagination / dots are a bit buggy still since the dots do not move if user's as the edge of the dots slider
- will fix `npm run build` later to get building for production (aka not locally) working


cheers

### tech stack:

- react 18
- vite: gotta go fast
- routing: react router
- type checking: typescript
- linter:  estlint + stylelint
- styling: scss modules + styled components
- ui development: storybook
- forms: react hook forms
- debugging: vs code configs


### future roadmap plans include:

- testing (unit / e2e testing): jest + cypress + react testing library
- state management: react query or redux
- animation: react spring
- automating css (autoprefixer, etc): postcss
- code formatter: prettier
- git hooks: husky or github actions
- bundling: rollup
- headless cms: (if needed) contentful

+ features unstyled components for headless ui


for once, not a project that isn't bootstraped with create react app 
everything's from scratch otherwise, with a work flow that's perfect for a derp
we don't use component / css libraries here 😤 and we're making our own boilerplate

yee howdy
