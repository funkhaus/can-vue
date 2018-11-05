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

        </can-vue>

    </main>

</template>
```

You can then add [shapes from Konva](https://konvajs.github.io/docs/shapes/Rect.html) inside the `can-vue` element:

```html
<template>

    <main>

        <can-vue>



        </can-vue>

    </main>

</template>
```

## Contributing
