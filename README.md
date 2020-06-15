<h1 align="center">
  <a href="https://colorspalette.vercel.app//?ref=github">
    <img src="https://colorspalette.vercel.app//logo-256.png" alt="colorspalette" />
    <br />
    ColorsPalette
  </a>
</h1>

<h4 align="center">Various colors palettes for your next project, design or app</h4>

## Contributing

### Adding New Palette

Adding a new palette is very easy, just follow the steps:

- In [palettes/index.ts](./palettes/index.ts) file, create a new key and its object of the shape

  ```js
  key: {
    name: 'Name of the Palette',
    colors: ['Array', 'of', 'colors', 'hex', 'rgb'],
    keywords: ['search', 'keywords', 'for', 'the', 'palette']
  }
  ```

- There is no second step, just `git add palettes/index.ts` and commit - push.

### Other (Features/Bug Fixes)

The app is build with Next.js (React, TypeScript, Styled Components), if you are comfortable with the stack and would love to contribute, feel welcomed to raising a PR.

#### Various NPM Scripts

| script  | description                 |
| ------- | --------------------------- |
| `build` | build the app               |
| `dev`   | run app in development mode |
| `start` | start the _built_ app       |

## Father

The App is built with care :mask: by -

- [Dhruv Jain](https://maddhruv.github.io)
