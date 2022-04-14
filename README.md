# Vue Rate

[![npm version](https://badge.fury.io/js/vue-rate.svg)](https://www.npmjs.com/package/vue-rate)
[![npm](https://img.shields.io/npm/dt/vue-rate.svg)](https://www.npmjs.com/package/vue-rate)

> Rate component for Vue - [Demo](https://sinanmtl.github.io/vue-rate/).
> Note: This version for Vue 2. If you want to use for Vue 3.x,  please [see](https://github.com/SinanMtl/vue-rate/tree/next).

## Installation and usage

Once, install rate component for your project

```bash
npm install vue-rate --save
# or
yarn add vue-rate
```

Import Vue Rate into your app

```javascript
import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

Vue.use(rate)
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

- `slot`: Custom icon via slot

You can directly use custom icon via default slot
```html
<rate :length="5" :value="3" :ratedesc="desc" class="viaSlot">
  <svg class="icon" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.034 7.074H19.416L13.445 11.448L15.726 18.524L9.75201 14.151L3.77901 18.524L6.06101 11.448L0.0880127 7.075H7.47001L9.75201 0.002V0L12.034 7.075V7.074Z"
      fill="currentColor"/>
  </svg>
</rate>
```

Add some flavour
```css
.RateCustom.viaSlot .icon {
  width: 25px;
  height: 25px;
}
.Rate.viaSlot .Rate__star.filled{color: #813d1a;}
.Rate.viaSlot .Rate__star.hover{color: #E67136;}
```

- `v-model`

```javascript
new Vue({
  ...
  data: {
    return () {
      myRate: 0
    }
  }
  ...
})
```

```html
<rate :length="5" v-model="myRate" />
```

## Events

```javascript
new Vue({
  ...
  methods: {
    onBeforeRate (rate) {
      alert(rate)
    },
    onAfterRate (rate) {
      alert(rate)
    }
  }
  ...
})
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
