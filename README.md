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
- styling: scss modules + styled components
- ui development: storybook
- type checking: typescript
- linting:  estlint + stylelint
- debugging: vs code configs
- seo: react-helmet
- forms: react hook forms


### future roadmap plans include:

- testing (unit / e2e testing): jest + cypress + testing library
- state management: react query or redux
- animation: framer motion or react spring
- automating css (autoprefixer, etc): postcss
- code formatter: prettier
- git hooks: husky
- integration: github actions
- bundling: rollup
- requests: axios
- headless cms (if needed): contentful
- three js??

+ features unstyled components for headless ui


for once, this is a project that isn't bootstraped with create react app 
everything's from scratch otherwise, with a work flow that's perfect for a derp
we don't use component / css libraries here 😤 

yee howdy
