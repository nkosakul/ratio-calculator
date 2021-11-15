<template>
  <form class="form" @submit.prevent="calculateRatio">
    <legend class="form__legend">Calculate ratio</legend>

    <div class="form__wrapper">

      <div class="form__item">
        <label class="form__label" for="calc-ratio-width">Width</label>
        <input
          class="form__input"
          id="calc-ratio-width"
          v-model="width"
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
          tabindex="-1"
        >
      </div>

      <div class="form__item form__item--submit">
        <button class="button" @click="calculateRatio">Calculate ratio</button>
        <button class="button--round" @click="resetForm">
          <span class="button__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768" aria-hidden="true">
              <path fill="#fff" d="M384 0c-103.241 0-199.79 42.624-270.611 113.389l-113.389-113.389v329.143h329.143l-138.404-138.404c50.578-50.579 119.534-81.024 193.262-81.024 151.241 0 274.285 123.044 274.285 274.285s-123.044 274.285-274.286 274.285c-73.234 0-142.080-28.58-193.92-80.365l-77.568 77.568c72.521 72.521 168.96 112.512 271.488 112.512 211.693 0 384-172.306 384-384 0-211.748-172.306-384-384-384z"/>
            </svg>
          </span>
          <span class="sr-only">Reset Form</span>
        </button>
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
