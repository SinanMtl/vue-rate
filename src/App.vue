<template>
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
          <rate showcount :length="5" :value="3" />
        </p>
      </div>
      <div class="col-3">
        <p>
          <strong>Rate Descriptions</strong>
          <rate :length="5" :ratedesc="desc" />
        </p>
      </div>
      <div class="col-3">
        <p>
          <strong>Rate Descriptions (Default Value)</strong>
          <rate :length="5" :value="3" :ratedesc="desc" />
        </p>
      </div>
      <div class="col-3">
        <p>
          <strong>Rate Descriptions (Read-only)</strong>
          <rate readonly :length="5" :value="3" :ratedesc="desc" />
        </p>
      </div>
    </div>
    <h2>Disabled Form</h2>
    <div class="grid">
      <div class="col-3">
        <p>
          <strong>Basic</strong>
          <rate showcount disabled :length="5" />
        </p>
      </div>
      <div class="col-3">
        <p>
          <strong>Default value</strong>
          <rate disabled :length="5" :value="3" />
        </p>
      </div>
      <div class="col-3">
        <p>
          <strong>Show count</strong>
          <rate disabled showcount :length="5" :value="3" />
        </p>
      </div>
      <div class="col-3">
        <p>
          <strong>Rate Descriptions</strong>
          <rate disabled :length="5" :value="3" :ratedesc="desc" />
        </p>
      </div>
    </div>

    <h2>Customization</h2>
    <div class="grid">
      <div class="col-2 m-b-20">
        <strong>Via Slot</strong>
        <rate :length="5" :value="3" :ratedesc="desc" class="viaSlot">
          <svg class="icon" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.034 7.074H19.416L13.445 11.448L15.726 18.524L9.75201 14.151L3.77901 18.524L6.06101 11.448L0.0880127 7.075H7.47001L9.75201 0.002V0L12.034 7.075V7.074Z"
              fill="currentColor"/>
          </svg>
        </rate>
        <details>
          <summary>Example</summary>
          <div class="code">
            <pre>
&lt;template&gt;
  &lt;div&gt;
    &lt;rate :length="5" class="viaSlot"&gt;
      &lt;svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.034 7.074H19.416L13.445 11.448L15.726 18.524L9.75201 14.151L3.77901 18.524L6.06101 11.448L0.0880127 7.075H7.47001L9.75201 0.002V0L12.034 7.075V7.074Z"
          fill="currentColor"/&gt;
      &lt;/svg&gt;
    &lt;/rate&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.RateCustom.viaSlot .icon {
  width: 25px;
  height: 25px;
}
.Rate.viaSlot .Rate__star.filled{color: #813d1a;}
.Rate.viaSlot .Rate__star.hover{color: #E67136;}
&lt;/style&gt;</pre>
          </div>
        </details>
      </div>
      <div class="col-2">
        <strong>Via SVG Symbol</strong>
        <svg
          style="position: absolute; width: 0; height: 0;"
          width="0"
          height="0"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <symbol id="icon-heart" class="icon" viewBox="0 0 32 32">
              <path
                d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z" />
            </symbol>
          </defs>
        </svg>
        <rate class="RateCustom" :length="5" :value="3" :ratedesc="desc" iconref="icon-heart" />
        <details>
          <summary>Example</summary>
          <div class="code">
            <pre>
&lt;template&gt;
  &lt;div&gt;
    &lt;svg style="position: absolute; width: 0; height: 0;"  height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"&gt;
      &lt;defs&gt;
        &lt;symbol id="icon-heart" class="icon" viewBox="0 0 32 32"&gt;
          &lt;path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z" /&gt;
        &lt;/symbol&gt;
      &lt;/defs&gt;
    &lt;/svg&gt;

    &lt;rate class="RateCustom" :length="5" :value="3" :ratedesc="desc" iconref="icon-heart"&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.RateCustom.Rate .icon {
  width: 25px;
  height: 25px;
}
.RateCustom.Rate .Rate__star.filled { color: blue; }
.RateCustom.Rate .Rate__star.hover { color: red; }
&lt;/style&gt;</pre>
          </div>
        </details>
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
      myCurrentRate: 3,
      desc: ['Very Bad', 'Bad', 'Normal', 'Good', 'Very Good']
    }
  },
  components: {
    rate
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

.code{
  text-align: left;
  background-color: #efefef;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
  max-width: 100%;
}

.code pre{margin: 0}

.Rate.RateCustom .icon {
  width: 25px;
  height: 25px;
}

.Rate.RateCustom .Rate__star.filled{color: teal;}
.Rate.RateCustom .Rate__star.hover{color: red;}

.flex-primary{ flex: 1; width: 100%; }
.grid [class*=col-]{padding: 0 20px;}
.grid .col-3{width: 100%}

@media screen and (min-width: 768px) {
  .grid .col-3{width: 50%;}
  .grid .col-2{width: 50%;}
}

@media screen and (min-width: 992px) {
  .grid .col-3{width: 25%;}
}
</style>

