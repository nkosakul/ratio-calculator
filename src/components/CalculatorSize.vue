<template>
  <form class="form" @submit.prevent="">
    <legend class="form__legend form__legend--yellow">Calculate image size</legend>

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
        >
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-size-width">Width</label>
        <input class="form__input" id="calc-size-width" v-model="width" @blur="calculateHeight">
      </div>

      <div class="form__item">
        <label class="form__label" for="calc-size-sizeeight">Height</label>
        <input class="form__input" id="calc-size-sizeeight" v-model="height" @blur="calculateWidth">
      </div>

      <div class="form__item">
        <button class="button button--yellow" @click="resetForm">Reset Form</button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CalculatorSize',
  data() {
    return {
      width: '',
      height: '',
      ratio: '',
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
      // TODO: validate input ratio
      if (!this.ratio || (!this.height && !this.width)) return;

      // TODO: what should i do if width and height is set?
      if ((this.width && !this.height) || (this.width && this.height)) {
        this.calculateHeight();
      }

      if (this.height && !this.width) {
        this.calculateWidth();
      }
    },
    calculateHeight() {
      // TODO: validate input width
      if (!this.ratio || !this.width) return;

      const { rat1, rat2 } = this.convertedRatio;
      const ratio = parseInt(this.width, 10) / rat1;
      const calculatedHeight = Math.round(ratio * rat2);
      this.height = `${calculatedHeight}`;
    },
    calculateWidth() {
      // TODO: validate input height
      if (!this.ratio || !this.height) return;

      const { rat1, rat2 } = this.convertedRatio;
      const calculatedWidth = Math.round(parseInt(this.height, 10) * (rat1 / rat2));
      this.width = `${calculatedWidth}`;
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
