<template>
  <header class="navigation">
    <div class="navigation__inner container--large">
      Header
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped lang="scss">
.navigation {
  grid-area: header;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

</style>
