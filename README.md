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

You can then add [shapes from Konva](https://konvajs.github.io/docs/shapes/Rect.html) inside the `can-vue` element:

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
