<template>
  <div class="grid-container">
    <div class="grid-col">
      <CalculatorSize />
    </div>
    <div class="grid-col">
      <CalculatorRatio />
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
  display: grid;
  margin-top: 5rem;
  grid-template-columns: 1fr;
  gap: 3rem;

  @include mq(small) {
    grid-template-columns: 1fr 1fr;
  }
}

.grid-col {
  border-radius: 2rem;
  background-color: var(--color-white);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.05) 0px 2.65546px 95px 0px;
}
</style>
