# can-vue

Vue plugin for HTML5 Canvas + Vue.js, nice and straightforward. Built on [Konva](https://konvajs.github.io/).

## Getting Started

`npm i can-vue`

Register the plugin:

```js
import CanVue from 'can-vue'
Vue.use(CanVue)

// instantiate your Vue instance after registering
new Vue({
    // ...options
})
```

Then, in a [single-file component](https://vuejs.org/v2/guide/single-file-components.html):

```html
<template>
    <can-vue>
        <!-- your canvas content here! -->
    </can-vue>
</template>
```

You can then add [shapes from Konva](https://konvajs.github.io/docs/shapes/Rect.html) inside `can-vue` with `draw-shape` and some props:

```html
<template>
    <can-vue>
        <draw-shape
            shape="circle"
            x="100"
            y="100"
            width="50"
            height="50"
            opacity="1"
            fill="red"/>
    </can-vue>
</template>
```

Properties can be reactive:

```html
<template>
    <can-vue>
        <draw-shape
            shape="rect"
            :x="myAnimatingValue"/>
    </can-vue>
</template>
```

and/or percentages of the canvas space:

```html
<template>
    <can-vue>
        <draw-shape
            shape="rect"
            x="50%"/>
    </can-vue>
</template>
```

## Component API

### `can-vue`

Wrapper for `can-vue` instance. Creates a div with classes `can-vue` and `wrapper` which wrap a canvas element and Vue slot.

#### Props

| Name     | Type           | Default Value | Description                                                                  |
| -------- | -------------- | ------------- | ---------------------------------------------------------------------------- |
| `height` | String, Number | -1            | Height in px of the canvas. Defaults to full height of containing div if -1. |
| `width`  | String, Number | -1            | Width in px of the canvas. Defaults to full width of containing div if -1.   |

### `draw-shape`

Wrapper for a single Konva shape.

#### Props

| Name      | Type           | Default Value | Description                                                                                   |
| --------- | -------------- | ------------- | --------------------------------------------------------------------------------------------- |
| `fill`    | String         | `blue`        | Fill color of this shape.                                                                     |
| `height`  | String, Number | `100`         | Height in pixels of the shape. Also accepts percentage of height of canvas. (example `"50%"`) |
| `opacity` | String, Number | `1`           | Opacity of the shape.                                                                         |
| `shape`   | String         | `Rect`        | Konva shape to render. Works with `Rect` and `Circle` currently.                              |
| `width`   | String, Number | 100           | Width in pixels of the shape. Also accepts percentage of height of canvas (example `"50%"`)   |
| `x`       | String, Number | 0             | X coordinate in pixels. Also accepts percentage of width of canvas (example `"50%"`)          |
| `y`       | String, Number | 0             | Y coordinate in pixels. Also accepts percentage of height of canvas (example `"50%"`)         |

## What about [vue-konva](https://konvajs.github.io/docs/vue/)?

Vue-Konva is great, but it's a bit more complicated than can-vue in order to support Konva's full feature set. I was looking for a simple, reactive canvas framework for Vue and, since Vue-Konva [isn't reactive](https://github.com/konvajs/vue-konva/issues/24), made a quick version of my own.
