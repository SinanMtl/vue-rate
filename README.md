# Vue Rate

[![npm version](https://badge.fury.io/js/vue-rate.svg)](https://www.npmjs.com/package/vue-rate)
[![npm](https://img.shields.io/npm/dt/vue-rate.svg)](https://www.npmjs.com/package/vue-rate)

> Rate component for Vue - [Demo](https://sinanmtl.github.io/vue-rate/)

## Installation and usage

Once, install rate component for your project

```bash
npm install vue-rate --save
```

Import Vue Rate into your app

```javascript
import rate from 'vue-rate';

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

## License

MIT.
