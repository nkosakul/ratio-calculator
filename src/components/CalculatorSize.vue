<template>
  <form class="form" @submit.prevent="">
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
          @blur="calculateSize"
          :aria-invalid="ratioHasError"
          aria-describedby="ratio-size-error"
          autocomplete="off"
        >
        <span id="ratio-size-error" class="form__error" v-show="ratioHasError">Only numbers and ":" are allowed!</span>
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-size-width">Width</label>
        <input
          class="form__input"
          id="calc-size-width"
          v-model="width"
          @blur="calculateHeight"
          :aria-invalid="heightHasError"
          aria-describedby="width-size-error"
          autocomplete="off"
        >
        <span id="width-size-error" class="form__error" v-show="widthHasError">Only numbers are allowed!</span>
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-size-sizeeight">Height</label>
        <input
          class="form__input"
          id="calc-size-sizeeight"
          v-model="height"
          @blur="calculateWidth"
          :aria-invalid="heightHasError"
          aria-describedby="height-size-error"
          autocomplete="off"
        >
        <span id="height-size-error" class="form__error" v-show="heightHasError">Only numbers are allowed!</span>
      </div>

      <div class="form__item form__item--submit">
        <button class="button" @click="resetForm">Reset Form</button>
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
    calculateSize() {
      // check if inputfield is valid and throw error if not
      if (this.inputIsInvalid('ratio', this.ratio)) return;

      // if ratio field or width & height are empty, return
      if (!this.ratio || (!this.height && !this.width)) return;

      // if height is missing or width & height are already set => calculate height
      if ((this.width && !this.height) || (this.width && this.height)) {
        this.calculateHeight();
      }

      // calculate width, of height input is set
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
