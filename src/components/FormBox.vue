<template>
  <div class="frame">
    <div class="frame__inner">
      <div class="grid-container">
        <div class="grid-col">
          <CalculatorSize />
        </div>
        <div class="grid-col">
          <CalculatorRatio />
        </div>
      </div>
    </div>
  </div>
  <ImageUploader />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalculatorSize from './CalculatorSize.vue';
import CalculatorRatio from './CalculatorRatio.vue';
import ImageUploader from './ImageUploader.vue';

export default defineComponent({
  name: 'FormBox',
  components: {
    CalculatorSize,
    CalculatorRatio,
    ImageUploader,
  },
});
</script>

<style scoped lang="scss">
@use '~styles/1-tools/mixins/tools.media-query' as *;

.grid-container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;

  @include mq(small) {
    grid-template-columns: 1fr 1fr;
  }

  @include mq(large) {
    gap: 10rem;
  }
}
</style>
