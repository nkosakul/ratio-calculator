<template>
  <form class="form" @submit.prevent="">
    <legend class="form__legend form__legend--blue">Calculate ratio</legend>

    <div class="form__wrapper">

      <div class="form__item">
        <label class="form__label" for="calc-ratio-width">Width</label>
        <input class="form__input" id="calc-ratio-width" v-model="width" @blur="calculateRatio">
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-ratio-ratioeight">Height</label>
        <input
          class="form__input"
          id="calc-ratio-ratioeight"
          v-model="height"
          @blur="calculateRatio"
        >
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-ratio-ratio">Ratio</label>
        <input
          class="form__input"
          id="calc-ratio-ratio"
          :value="ratio"
          readonly
        >
      </div>

      <div class="form__item">
        <button class="button button--blue" @click="resetForm">Reset Form</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalculatorRatio',
  data() {
    return {
      width: '',
      height: '',
      ratio: '',
    };
  },
  methods: {
    calculateRatio() {
      // TODO: validate inputs
      if (!this.height || !this.width) return;

      const width = parseInt(this.width, 10);
      const height = parseInt(this.height, 10);
      const ratio = this.gcd(width, height);
      this.ratio = `${width / ratio}:${height / ratio}`;
    },
    gcd(a: number, b: number): number {
      return (b === 0) ? a : this.gcd(b, a % b);
    },
    resetForm() {
      this.width = '';
      this.height = '';
      this.ratio = '';
    },
  },
});
</script>

<style scoped lang="scss">
</style>
