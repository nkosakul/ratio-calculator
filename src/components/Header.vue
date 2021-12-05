<template>
  <header class="navigation">
    <div class="navigation__inner container--large">
      <a href="#" class="logo">
        <span class="sr-only">aspect ratio calculator</span>
        <svg aria-hidden="true" width="1100" height="663" viewBox="0 0 1100 663" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M859.389 0H50H0V50V613V663H50H126.389L181.668 613H100H50V563V100V50H100H804.11L859.389 0ZM296.179 613H1000H1050V563V100V50H1000H918.62L973.899 0H1050H1100V50V613V663H1050H240.9L296.179 613Z" fill="#CEA64C"/>
          <path d="M350.909 226.864H298.545L247 258.364V306.636L292.818 279.227H294.045V436.318H350.909V226.864Z" fill="currentColor"/>
          <path d="M481.46 439.182C530.96 439.182 565.528 409.42 565.324 364.318C565.528 325.966 539.858 298.045 501.915 298.045C477.983 298.045 456.301 309.5 448.324 328.727H447.097C447.301 294.875 457.937 272.273 481.869 272.273C493.835 272.273 504.267 277.591 506.824 289.455H562.869C559.29 253.659 528.097 224 481.869 224C426.949 224 390.847 266.136 390.642 334.045C390.437 410.136 432.574 439.182 481.46 439.182ZM481.051 396.227C464.483 396.227 452.21 383.648 452.006 366.364C452.21 349.08 464.483 336.5 481.051 336.5C498.028 336.5 510.301 349.08 510.097 366.364C510.301 383.648 498.028 396.227 481.051 396.227Z" fill="currentColor"/>
          <path d="M622.162 413.614C637.196 413.614 650.594 400.932 650.798 384.977C650.594 369.432 637.196 356.75 622.162 356.75C606.31 356.75 593.321 369.432 593.526 384.977C593.321 400.932 606.31 413.614 622.162 413.614ZM622.162 312.977C637.196 312.977 650.594 300.295 650.798 284.341C650.594 268.795 637.196 256.114 622.162 256.114C606.31 256.114 593.321 268.795 593.526 284.341C593.321 300.295 606.31 312.977 622.162 312.977Z" fill="currentColor"/>
          <path d="M762.889 224C713.185 224 678.821 253.864 679.026 298.455C679.23 336.5 704.594 364.318 742.435 364.318C766.366 364.318 788.048 352.864 796.026 333.636H797.253C797.048 368.409 786.412 390.909 762.48 390.909C750.412 390.909 740.185 385.591 737.526 372.909H681.48C684.957 409.727 716.048 439.182 762.48 439.182C817.503 439.182 853.912 397.045 853.707 328.318C853.503 253.045 811.776 224 762.889 224ZM763.298 266.955C779.866 266.955 792.139 279.636 792.344 296.409C792.548 313.182 779.866 325.864 763.298 325.864C746.321 325.864 734.457 313.182 734.253 296.409C734.048 279.636 746.321 266.955 763.298 266.955Z" fill="currentColor"/>
        </svg>
      </a>

      <button class="theme-button" :class="{ 'is-active': lightModeActive }" :aria-pressed="lightModeActive" @click="handleClick">
        <span class="sr-only">active lightmode</span>
        <svg class="theme-button__sun" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" aria-hidden="true">
          <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z"/>
        </svg>
        <svg class="theme-button__moon" fill="currentColor" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.167 47.167" style="enable-background:new 0 0 47.167 47.167;" xml:space="preserve">
          <path d="M46.369,28.793c-11.852,5.935-26.271,1.138-32.206-10.714c-2.748-5.488-3.191-11.524-1.702-17.016  C1.197,7.236-3.255,21.263,2.544,32.844C8.479,44.696,22.898,49.493,34.75,43.558c6.364-3.187,10.69-8.821,12.417-15.19  C46.903,28.513,46.64,28.658,46.369,28.793z"/>
        </svg>
      </button>
    </div>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  props: {
    lightModeActive: Boolean,
  },
  methods: {
    handleClick() {
      this.$emit('toggle-light-mode');
    },
  },
});
</script>

<style scoped lang="scss">
@use '~styles/1-tools/mixins/tools.media-query' as *;

.navigation {
  grid-area: header;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.navigation__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo svg {
  width: 100px;
  height: auto;
  fill: var(--color-theme-light);

  @include mq(small) {
    width: 120px;
  }
}

.theme-button {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-theme-light);
}

.theme-button svg {
  width: 30px;
  height: 30px;
}

.theme-button__moon {
  display: none;
}

.theme-button.is-active .theme-button__moon {
  display: block;
}

.theme-button.is-active .theme-button__sun {
  display: none;
}
</style>
