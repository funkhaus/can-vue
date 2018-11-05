# can-vue

Canvas + Vue.js, nice and straightforward. Built on [Konva](https://konvajs.github.io/).

## Getting Started

`npm i can-vue`

Register the plugin:

```js
import CanVue from 'can-vue'

Vue.use(CanVue)

new Vue({
    // ...options
})
```

Then, in a [single-file component](https://vuejs.org/v2/guide/single-file-components.html):

```html
<template>

    <main>

        <can-vue>

            <!-- your canvas content here! -->

        </can-vue>

    </main>

</template>
```

The `can-vue` element creates a div with the class `can-vue` and a canvas that fills that div. You can either size `.can-vue` in CSS to control the size of the canvas or add `height` and `width` props to the `can-vue` element.

You can then add [shapes from Konva](https://konvajs.github.io/docs/shapes/Rect.html) inside the `can-vue` element with the `draw-shape` element and some props:

```html
<template>

    <main>

        <can-vue>

            <draw-shape
                shape="circle"
                x="100"
                y="100"
                height="25"
                fill="red"/>


        </can-vue>

    </main>

</template>
```

## API

**TODO**

## Contributing

**TODO**

## What about [vue-konva](https://konvajs.github.io/docs/vue/)?

Vue-Konva is great, but it's a bit more complicated than can-vue in order to support Konva's full feature set. I was looking for a simple, reactive canvas framework for Vue and, since Vue-Konva [isn't reactive](https://github.com/konvajs/vue-konva/issues/24), made a quick version of my own.
