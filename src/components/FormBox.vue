<template>
  <div class="grid-container">
    <div class="grid-col">
      <CalculatorSize />
    </div>
    <div class="grid-col">
      <CalculatorRatio />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CalculatorSize from './CalculatorSize.vue';
import CalculatorRatio from './CalculatorRatio.vue';

export default defineComponent({
  name: 'FormBox',
  components: {
    CalculatorSize,
    CalculatorRatio,
  },
});
</script>

<style scoped lang="scss">
@use '~styles/1-tools/mixins/tools.media-query' as *;

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 5rem;
  margin-bottom: 5rem;
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
