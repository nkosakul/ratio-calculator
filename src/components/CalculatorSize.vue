<template>
  <form class="form" @submit.prevent="calculateSize">
    <legend class="form__legend">Calculate image size</legend>

    <div class="form__wrapper">
      <div class="form__item">
        <label class="form__label" for="calc-size-ratio">
          Ratio<span class="mandatory">*</span>
        </label>
        <input
          class="form__input"
          id="calc-size-ratio"
          v-model="ratio"
          placeholder="16:9"
          :aria-invalid="ratioHasError"
          aria-describedby="ratio-size-error"
          autocomplete="off"
          @keyup="updateLastInputUsed('ratio')"
        >
        <span id="ratio-size-error" class="form__error" v-show="ratioHasError">Only numbers and ":" are allowed!</span>
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-size-width">Width</label>
        <input
          class="form__input"
          id="calc-size-width"
          v-model="width"
          :aria-invalid="heightHasError"
          aria-describedby="width-size-error"
          autocomplete="off"
          @keyup="updateLastInputUsed('width')"
        >
        <span id="width-size-error" class="form__error" v-show="widthHasError">Only numbers are allowed!</span>
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-size-sizeeight">Height</label>
        <input
          class="form__input"
          id="calc-size-sizeeight"
          v-model="height"
          :aria-invalid="heightHasError"
          aria-describedby="height-size-error"
          autocomplete="off"
          @keyup="updateLastInputUsed('height')"
        >
        <span id="height-size-error" class="form__error" v-show="heightHasError">Only numbers are allowed!</span>
      </div>

      <div class="form__item form__item--submit">
        <button class="button" @click="calculateSize">Calculate size</button>
        <button class="button--round" @click="resetForm">
          <span class="button__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 768 768" aria-hidden="true">
              <path fill="currentColor" d="M384 0c-103.241 0-199.79 42.624-270.611 113.389l-113.389-113.389v329.143h329.143l-138.404-138.404c50.578-50.579 119.534-81.024 193.262-81.024 151.241 0 274.285 123.044 274.285 274.285s-123.044 274.285-274.286 274.285c-73.234 0-142.080-28.58-193.92-80.365l-77.568 77.568c72.521 72.521 168.96 112.512 271.488 112.512 211.693 0 384-172.306 384-384 0-211.748-172.306-384-384-384z"/>
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
import { inputTypes } from '../types';

export default defineComponent({
  name: 'CalculatorSize',
  data() {
    return {
      width: '',
      height: '',
      ratio: '',
      widthHasError: false,
      heightHasError: false,
      ratioHasError: false,
      lastInputUsed: '' as inputTypes,
    };
  },
  computed: {
    convertedRatio(): { rat1: number; rat2: number; } {
      const [aspectRatioDenominator, aspectRatioNumerator] = this.ratio.split(':');
      const rat1 = parseInt(aspectRatioDenominator, 10);
      const rat2 = parseInt(aspectRatioNumerator, 10);

      return {
        rat1,
        rat2,
      };
    },
  },
  methods: {
    updateLastInputUsed(type: inputTypes) {
      this.lastInputUsed = type;
    },
    calculateSize() {
      // check if inputfield is valid and throw error if not
      if (this.inputIsInvalid('ratio', this.ratio)) return;

      // if ratio field or width & height are empty, return
      if (!this.ratio || (!this.height && !this.width)) return;

      // if width and height are set
      if (this.width && this.height) {
        // if width or ratio input was last used, calculate height
        if (this.lastInputUsed === 'width' || this.lastInputUsed === 'ratio') {
          this.calculateHeight();
        }
        // if height input was last used, calculate width
        if (this.lastInputUsed === 'height') {
          this.calculateWidth();
        }
      }

      // if height is missing or width & height are already set => calculate height
      // calculate height, if width input is set
      if ((this.width && !this.height)) {
        this.calculateHeight();
      }

      // calculate width, if height input is set
      if (this.height && !this.width) {
        this.calculateWidth();
      }
    },
    calculateHeight() {
      // check if inputfield is valid and throw error if not
      if (this.inputIsInvalid('width', this.width)) return;

      // ratio and width must be set to start calculation
      if (!this.ratio || !this.width) return;

      const { rat1, rat2 } = this.convertedRatio;
      const ratio = parseInt(this.width, 10) / rat1;
      const calculatedHeight = Math.round(ratio * rat2);
      this.height = `${calculatedHeight}`;
    },
    calculateWidth() {
      // check if inputfield is valid and throw error if not
      if (this.inputIsInvalid('height', this.height)) return;

      // ratio and height must be set to start calculation
      if (!this.ratio || !this.height) return;

      const { rat1, rat2 } = this.convertedRatio;
      const calculatedWidth = Math.round(parseInt(this.height, 10) * (rat1 / rat2));
      this.width = `${calculatedWidth}`;
    },
    inputIsInvalid(type: inputTypes, value: string): boolean {
      // regex test, only allow numbers
      const regex = type === 'ratio' ? /^\d*:?\d*$/ : /^\d*\.?\d*$/;
      const testInput = regex.test(value);
      const failedValidation = !testInput;

      if (type === 'width') {
        this.widthHasError = failedValidation;
      }

      if (type === 'height') {
        this.heightHasError = failedValidation;
      }

      if (type === 'ratio') {
        this.ratioHasError = failedValidation;
      }

      return failedValidation;
    },
    resetForm() {
      this.width = '';
      this.height = '';
      this.ratio = '';
      this.widthHasError = false;
      this.heightHasError = false;
      this.ratioHasError = false;
    },
  },
});
</script>

<style scoped lang="scss">
</style>
