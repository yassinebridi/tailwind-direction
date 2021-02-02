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

- Extend our configuration preset which disables the core tailwind
  plugins we replace (otherwise, directional utilitites will produce
  both left and right css rules at the same time).

```js
presets: [
  require("tailwind-direction").configPreset,
],
```

> ⚠ **Warning:** If you are modifing `corePlugins` in your own
> `tailwind.config.css`, you have to use the object syntax while
> extending our configuration preset. This is because the array syntax
> [does not support
> merging](https://tailwindcss.com/docs/presets#core-plugins) and your
> own configuration will have priority. If you must use the array syntax
> you have to manually disable [all the core plugins we
> replace](https://github.com/yassinebridi/tailwind-direction/blob/main/README.md#affected-core-plugins).

- Change the html tag `dir` attribute:

```html
<html dir="rtl">
  ...
</html>
```

`dir` can be:

```ts
dir: 'ltr' | 'rtl';
```

That's it, now your tailwind utilities works out of the box with directions in mind.

## Comparison

There are two other know packages that solves the same problem:

- [tailwindcss-dir](https://github.com/RonMelkhior/tailwindcss-dir): This package adds new variants `ltr`, `rtl`, that you have to add for every utility by hand.

- [tailwindcss-rtl](https://github.com/20lives/tailwindcss-rtl): This package takes a different and a better approach, instead of adding new variants, you replace the targeted variants, like `mr`, `rounded-bl`, with it's direction corresponding utilites: `ms`, `rounded-be`
- [tailwind-direction 🚀](https://github.com/yassinebridi/tailwind-direction): What this package does, is replacing the core utilites, with direction in mind ones, so you can just plug-in this packages and you are done, no refractoring proccess needed.

## Affected core plugins

Currently the affected core plugins are:

- borderRadius
- borderWidth
- clear
- divide
- float
- inset
- margin
- padding
- space
- textAlign
- transformOrigin

## Not Affected core plugins(But needs to be):

- (Add new ones if you think others are missing)

## You might like

I created another plugin that makes working with bi-direction less painful with Next.js, check it out:
https://github.com/yassinebridi/next-direction
