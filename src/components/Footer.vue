<template>
  <footer class="footer">
    <div class="footer__inner container--large">
      <small class="footer__copyright">
        Made with <span class="text--ci" aria-hidden="true">♥</span><span class="sr-only">love</span> by <a href="https://github.com/nkosakul" target="_blank" rel="noopener noreferrer">Nattaphong Kosakul</a>
      </small>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer',
});
</script>

<style scoped lang="scss">
@use '~styles/1-tools/mixins/tools.media-query' as *;

.footer {
  padding-top: 2rem;
  padding-bottom: 2rem;
  grid-area: footer;

  @include mq(small) {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

.footer__inner {
  display: flex;
  justify-content: flex-end;
}
.footer__copyright {
  font-size: 1.5rem;
}
</style>
