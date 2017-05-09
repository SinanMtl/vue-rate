# Vue Rate

> Rate component for Vue - [Demo](https://sinanmtl.github.io/vue-rate/)

## Installation and usage

Once, install rate component for your project

```
npm install vue-rate --save
```

Import your app

```
import Rate from 'vue-rate';

new Vue({
    components: {
        Rate
    }
})
```
HTML template
```
<Rate :length="5"></Rate>
```

## Options from props
- length {number} : Star size
```
<Rate :length="5"></Rate>
```

- value {number}: Default value
```
<Rate :length="5" :value="2"></Rate>
```

- showcount {boolean}: Shows rate number when mouseover the star.

```
<Rate :length="5" :value="2" :showcount="true"></Rate>
```

- ratedesc {object}: Rate star description array. 

```
<Rate :length="5" :value="2" :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']"></Rate>
```
