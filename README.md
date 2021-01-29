# tailwind-direction ![tailwind-direction minzip package size](https://img.shields.io/bundlephobia/minzip/tailwind-direction)

A tailwindcss plugin, that makes working with directions a breeze.

> Check out the [Live Example](https://tailwind-direction.vercel.app/) to try it for yourself.

## Installation

```bash
$ npm install tailwind-direction
# or
$ yarn add tailwind-direction
```

## Usage

- Add the tailwind-direction plugin to the `tailwind.config.js` file

```js
plugins: [
  require('tailwind-direction').default,
],
```
- Change the html tag `dir` attribute:
```html
<html dir="rtl">
  ...
</html>
```
`dir` can be:
```ts
dir: "ltr" | "rtl"
```

That's it, now your tailwind utilities works out of the box with directions in mind.

## Comparison
There are two other know packages that solves the same problem:
- [tailwindcss-dir](https://github.com/RonMelkhior/tailwindcss-dir): This package adds new variants `ltr`, `rtl`, that you have to add for every utility by hand.

- [tailwindcss-rtl](https://github.com/20lives/tailwindcss-rtl): This package takes a different and a better approach, instead of adding new variants, you replace the targeted variants, like `mr`, `rounded-bl`, with it's direction corresponding utilites: `ms`, `rounded-be`
- [tailwind-direction 🚀](https://github.com/20lives/tailwindcss-rtl): What this package does, is replacing the core utilites, with direction in mind ones, so you can just plug-in this packages and you are done, no refractoring proccess needed.

## Affected core plugins:
Currently the affected core plugins are:
- padding
- margin
- borderRadius
- borderWidth
- space
- divide
- clear
- float
- textAlign
- transformOrigin

## Not Affected core plugins(But needs to be):
- Inset (This is a big core plugin)
- (Add new ones if you think others are missing)
