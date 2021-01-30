# tailwind-direction ![tailwind-direction minzip package size](https://img.shields.io/bundlephobia/minzip/tailwind-direction) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php) [![Twitter Follow](https://img.shields.io/twitter/follow/yassinebridi.svg?style=social&label=Follow)](https://twitter.com/yassinebridi)

A tailwindcss plugin, that makes working with directions a breeze.

![Preview](https://user-images.githubusercontent.com/18403595/106312235-a509c800-6266-11eb-859b-1dd6edb671ee.gif)
> Check out the [Live Example](https://tailwind-direction.vercel.app/) to try it for yourself.

## Installation

```bash
$ npm install --dev tailwind-direction
# or
$ yarn add -D tailwind-direction
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

## You might like
I created another plugin that makes working with bi-direction less painful with Next.js, check it out:
https://github.com/yassinebridi/next-direction
