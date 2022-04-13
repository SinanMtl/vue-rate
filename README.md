# Vue Rate

[![npm version](https://badge.fury.io/js/vue-rate@next.svg)](https://www.npmjs.com/package/vue-rate@next)
[![npm](https://img.shields.io/npm/dt/vue-rate@next.svg)](https://www.npmjs.com/package/vue-rate@next)

> Rate component for Vue - [Demo](https://sinanmtl.github.io/vue-rate/).
> Note: This version for Vue 3. If you want to use for Vue 2.x,  please [see](https://github.com/SinanMtl/vue-rate/tree/master).

## Installation and usage

Once, install rate component for your project

```bash
npm install vue-rate@next --save
// or yarn add vue-rate@next
```

Import Vue Rate into your app

```javascript
import { createApp } from 'vue'
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

createApp(App)
  .use(rate)
  .mount('#app')
```

Use HTML template

```html
<rate :length="5" />
```

## Options from props

- `length {number}`: Star size

```html
<rate :length="5" />
```

- `value {number}`: Default value

```html
<rate :length="5" :value="2" />
```

- `showcount {boolean}`: Shows rate number when mouseover the star.

```html
<rate :length="5" :value="2" :showcount="true" />
```

- `ratedesc {object}`: Rate star description array. 

```html
<rate :length="5" :value="2" :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']" />
```

- `disabled {boolean}`: Disable rate.

```html
<rate :length="5" :value="2" :disabled="true" />
```

- `readonly {boolean}`: Read-only rate.

```html
<rate :length="5" :value="2" :readonly="true" />
```

- `iconref {string}`: ID of symbol icon

Insert symbol icon into your codebase
```html
<symbol id="icon-heart" class="icon" viewBox="0 0 32 32">
  <path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path>
</symbol>
````

Then add Rate component. `iconref` must be symbol's id
```html
<rate :length="5" iconref="icon-heart" />
```

- `v-model`

```javascript
export default {
  data: {
    return () { myRate: 0 }
  }
}
```

or `setup()` in Option API
```javascript
import { ref } from 'vue';

export default {
  setup () {
    const myRate = ref(0);
    return { myRate }
  }
}
```

or Composition API with `<script setup>`
```javascript
<script setup>
  import { ref } from 'vue';
  const myRate = ref(0);
}
<script>
```

And bind to component
```html
<rate :length="5" v-model="myRate" />
```

## Events

```javascript
<script setup>
function onBeforeRate (rate) {
  alert(rate)
}

function onAfterRate (rate) {
  alert(rate)
}
</script>
```

```html
<rate :length="5" :value="2" @before-rate="onBeforeRate" @after-rate="onAftereRate" />
```

## Development
1. Fork the project
2. Install all dependencies
3. Make your changes on `src/Rate.vue`
4. Build the package
```bash
npm run build
# or yarn build
```
5. Commit and create PR

## License

MIT.
