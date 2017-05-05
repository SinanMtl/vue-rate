<template>
  <div id="app">
    <div class="container">
      <h1 style="margin-bottom: 20px;">Vue Rate Component</h1>
      <div class="grid">
        <div class="col-3">
          <p>
            <strong>Basic</strong>
            <Rate :length="5"></Rate>
          </p>  
        </div>
        <div class="col-3">
          <p>
            <strong>Default value</strong>
            <Rate :length="5" :value="3"></Rate>
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Show count</strong>
            <Rate :length="5" :showcount="true"></Rate>
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Rate Descriptions</strong>
            <Rate :length="5" :ratedesc="['Very Bad', 'Bad', 'Good', 'Very Good', 'Excellent']"></Rate>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rate from './components/Rate'

export default {
  name: 'app',
  components: {
    Rate
  }
}
</script>

<style lang="scss">
$gutter-width: "20px";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.container{
  max-width: 1170px;
  padding: 0 $gutter-width;
  margin: 0 auto;
}

.grid{
  display: flex;
  flex-wrap: wrap;

  [class*="col-"]{
    padding: 0 $gutter-width;
  }

  .col-3{
    width: 100%;

    @media screen and (min-width: 768px){
      width: 50%;
    }

    @media screen and (min-width: 992px){
      width: 25%;
    }
  }
}

</style>
