<template>
  <footer class="footer">
    <div class="footer__inner container--large">
      <small class="footer__copyright">
        Made with <span class="text--red" aria-hidden="true">♥</span><span class="sr-only">love</span> by Nattaphong Kosakul
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
.footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: var(--color-white);
  grid-area: footer;
}

.footer__inner {
  display: flex;
  justify-content: flex-end;
}
.footer__copyright {
  font-size: 1.5rem;
}
</style>
