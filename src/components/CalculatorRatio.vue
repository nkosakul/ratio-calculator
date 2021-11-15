<template>
  <form class="form" @submit.prevent="">
    <legend class="form__legend form__legend--blue">Calculate ratio</legend>

    <div class="form__wrapper">

      <div class="form__item">
        <label class="form__label" for="calc-ratio-width">Width</label>
        <input
          class="form__input"
          id="calc-ratio-width"
          v-model="width"
          @blur="calculateRatio"
          :aria-invalid="widthHasError"
          aria-describedby="width-ratio-error"
          autocomplete="off"
        >
        <span id="width-ratio-error" class="form__error" v-show="widthHasError">Only numbers are allowed!</span>
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-ratio-ratioeight">Height</label>
        <input
          class="form__input"
          id="calc-ratio-ratioeight"
          v-model="height"
          @blur="calculateRatio"
          :aria-invalid="heightHasError"
          aria-describedby="height-ratio-error"
          autocomplete="off"
        >
        <span id="height-ratio-error" class="form__error" v-show="heightHasError">Only numbers are allowed!</span>
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-ratio-ratio">Ratio</label>
        <input
          class="form__input"
          id="calc-ratio-ratio"
          :value="ratio"
          readonly
          aria-live="polite"
        >
      </div>

      <div class="form__item form__item--submit">
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
      widthHasError: false,
      heightHasError: false,
    };
  },
  methods: {
    calculateRatio() {
      // check if inputfields are valid and throw error if not
      if (this.isInvalid()) return;

      // calculate and set ratio
      if (this.height && this.width) this.setRatio();
    },
    isInvalid(): boolean {
      // regex test, only allow numbers
      const regex = /^\d*\.?\d*$/;
      const testWidth = regex.test(this.width);
      const testHeight = regex.test(this.height);
      const failedValidation = !testWidth || !testHeight;

      this.widthHasError = !testWidth;
      this.heightHasError = !testHeight;

      return failedValidation;
    },
    setRatio() {
      const width = parseInt(this.width, 10);
      const height = parseInt(this.height, 10);
      const ratio = this.gcd(width / height, 50);
      this.ratio = ratio;
    },
    gcd(val: number, lim: number): string {
      // return (b === 0) ? a : this.gcd(b, a % b);
      let lower = [0, 1];
      let upper = [1, 0];

      while (true) {
        const mediant = [lower[0] + upper[0], lower[1] + upper[1]];

        if (val * mediant[1] > mediant[0]) {
          if (lim < mediant[1]) {
            return `${upper[0]}:${upper[1]}`;
          }
          lower = mediant;
        } else if (val * mediant[1] === mediant[0]) {
          if (lim >= mediant[1]) {
            return `${mediant[0]}:${mediant[1]}`;
          }
          if (lower[1] < upper[1]) {
            return `${lower[0]}:${lower[1]}`;
          }
          return `${upper[0]}:${upper[1]}`;
        } else {
          if (lim < mediant[1]) {
            return `${lower[0]}:${lower[1]}`;
          }
          upper = mediant;
        }
      }
    },
    resetForm() {
      this.width = '';
      this.height = '';
      this.ratio = '';
      this.widthHasError = false;
      this.heightHasError = false;
    },
  },
});
</script>

<style scoped lang="scss">
</style>
