# Vue Rate

[![npm version](https://badge.fury.io/js/vue-rate.svg)](https://badge.fury.io/js/vue-rate)

> Rate component for Vue - [Demo](https://sinanmtl.github.io/vue-rate/)

## Installation and usage

Once, install rate component for your project

```bash
npm install vue-rate --save
```

Import Vue Rate into your app

```javascript
import Rate from 'vue-rate';

new Vue({
    components: {
        Rate
    }
})
```

Use HTML template

```html
<Rate :length="5"></Rate>
```

## Options from props

- `length {number}`: Star size

```html
<Rate :length="5"></Rate>
```

- `value {number}`: Default value

```html
<Rate :length="5" :value="2"></Rate>
```

- `showcount {boolean}`: Shows rate number when mouseover the star.

```html
<Rate :length="5" :value="2" :showcount="true"></Rate>
```

- `ratedesc {object}`: Rate star description array. 

```html
<Rate :length="5" :value="2" :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']"></Rate>
```

## License

MIT.
