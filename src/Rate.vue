<template>
  <div v-if="length > 0" class="Rate">
    <svg
      v-if="!slots.default && iconref === 'icon-star-full'"
      style="position: absolute; width: 0; height: 0;"
      width="0"
      height="0"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <symbol id="icon-star-full" viewBox="0 0 32 32">
          <path
            d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z" />
        </symbol>
      </defs>
    </svg>
    <input type="hidden" :name="name" v-model="rate" :required="required">
    <template v-for="n in length" :key="n">
      <button
        type="button"
        :class="{'Rate__star': true, 'hover': n <= over, 'filled': (n <= rate || isFilled(n))}"
        :disabled="disabled"
        @mouseover="onOver(n)"
        @mouseout="onOut(n)"
        @click="setRate(n)"
        @keyup="onOver(n)"
        @keyup.enter="setRate(n)">
        <slot v-if="slots.default" _class="hello"></slot>
        <svg
          v-else
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <use :xlink:href="`#${iconref}`"></use>
        </svg>
      </button>
    </template>
    <div class="Rate__view" :class="{disabled: disabled}">
      <span v-if="showcount" class="count">{{over}}</span>
      <span v-if="ratedesc.length > 0" class="desc">{{ratedesc[over - 1]}}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onBeforeMount, useSlots } from 'vue'

const slots = useSlots();
const emit = defineEmits(["before-rate", "update:modelValue", "after-rate"]);
const props = defineProps({
  modelValue: {type: [Number, String], default: 0},
  value: {type: [Number, String], default: 0},
  name: {type: String, default: 'rate'},
  length: {type: Number},
  showcount: {type: Boolean},
  required: {type: Boolean},
  ratedesc: {type: Array, default () { return [] }},
  disabled: {type: Boolean, default: false},
  readonly: {type: Boolean, default: false},
  iconref: { type: String, default: 'icon-star-full' }
});

const over = ref(0)
const rate = ref(0)

function convertValue(value) {
  if (value >= props.length) {
    value = props.length
  } else if (value < 0) {
    value = 0
  }
  return value
}
function onOver (index) { if (!props.readonly) over.value = index }
function onOut () { if (!props.readonly) over.value = rate.value }
function setRate (index) {
  if (props.readonly) return false
  emit('before-rate', rate.value)
  rate.value = index
  emit('update:modelValue', rate.value)
  emit('after-rate', rate.value)
}
function isFilled (index) { return index <= over.value }

watch(
  () => props.modelValue,
  (newVal) => {
    rate.value = convertValue(newVal)
    over.value = convertValue(newVal)
  }
)

onBeforeMount(() => {
  let val = props.value || props.modelValue
  if (props.modelValue >= props.length) {
    val = props.length
  } else if (props.modelValue < 0) {
    val = 0
  }
  rate.value = convertValue(val)
  over.value = convertValue(val)
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Rate{cursor: default;}

.Rate .icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
  vertical-align: middle;
  top: -2px;
  position: relative;
  margin: 0 5px;
}

.Rate__star{
  color: #dedbdb;
  display: inline-block;
  padding: 7px;
  text-decoration: none;
  cursor: pointer;
  background: transparent none;
  border: 0;
}

.Rate__star .icon {
  top: 0;
  vertical-align: middle;
}

.Rate__star.hover {
  color: #efc20f;
}

.Rate__star.filled {
  color: #efc20f;
}

.Rate__star:hover,
.Rate__star:focus {
  text-decoration: none;
}

.Rate__view .count,
.Rate__view .desc {
  display: inline-block;
  vertical-align: middle;
  padding: 7px
}

.Rate.has-error .Rate__star {
  color: #f37a77;
}

.Rate.has-error .Rate__star.hover {
  color: #efc20f;
}

.Rate.has-error .Rate__star.filled {
  color: #efc20f;
}

.Rate__star[disabled] {
  opacity: 0.8;
}

.Rate__star.hover[disabled],
.Rate__star.filled[disabled] {
  color: #efc20f;
  opacity: 0.6;
}

.Rate__view.disabled .count,
.Rate__view.disabled .desc {
  color: #CCC;
}
</style>
