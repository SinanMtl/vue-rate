<template>
  <div class="App">
    <div class="container">
      <h1 style="margin-bottom: 20px;">Vue Rate Component</h1>
      <h2>Active Form</h2>
      <div class="grid">
        <div class="col-3">
          <p>
            <strong>Basic</strong>
            <rate v-model="myCurrentRate" :length="5" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Default value</strong>
            <rate :length="5" :value="3" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Show count</strong>
            <rate :length="5" :showcount="true" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Show count (Default value)</strong>
            <rate :length="5" :value="3" :showcount="true" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Rate Descriptions</strong>
            <rate :length="5" :ratedesc="['Very Bad', 'Bad', 'Normal', 'Good', 'Very Good']" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Rate Descriptions (Default Value)</strong>
            <rate :length="5" :value="3" :ratedesc="['Very Bad', 'Bad', 'Normal', 'Good', 'Very Good']" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Rate Descriptions (Read-only)</strong>
            <rate :length="5" :value="3" :readonly="true" :ratedesc="['Very Bad', 'Bad', 'Normal', 'Good', 'Very Good']" />
          </p>
        </div>
      </div>
      <h2>Disabled Form</h2>
      <div class="grid">
        <div class="col-3">
          <p>
            <strong>Basic</strong>
            <rate :length="5" :disabled="true" :showcount="true" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Default value</strong>
            <rate :length="5" :value="3" :disabled="true" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Show count</strong>
            <rate :length="5" :value="3" :disabled="true" :showcount="true" />
          </p>
        </div>
        <div class="col-3">
          <p>
            <strong>Rate Descriptions</strong>
            <rate :length="5" :value="3" :disabled="true" :ratedesc="['Very Bad', 'Bad', 'Normal', 'Good', 'Very Good']" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rate from '../src/Rate'

export default {
  name: 'App',
  data () {
    return {
      myCurrentRate: 0
    }
  },
  components: {
    rate
  }
}
</script>

<style>
  *{box-sizing: border-box;}

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Avenir,Helvetica,Arial,sans-serif;
    margin: 0;
    padding: 0;
  }

  .App{
    text-align: center;
    color: #2c3e50;
    margin-top: 60px
  }

  .container{
    max-width: 1200px;
    padding: 0 20px;
    margin: 0 auto
  }

  .grid{
    display: flex;
    flex-wrap: wrap;
  }

  .grid [class*=col-]{padding: 0 20px;}
  .grid .col-3{width: 100%}

  @media screen and (min-width: 768px) {
    .grid .col-3{
      width:50%
    }
  }

  @media screen and (min-width: 992px) {
    .grid .col-3{
      width: 25%;
    }
  }
</style>

