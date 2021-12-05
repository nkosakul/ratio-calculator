<template>
  <div class="layout">
    <Header :lightModeActive="lightModeActive" @toggle-light-mode="toggleLightmode" />
    <main>
      <section class="container--small" aria-labelledby="intro-heading">
        <header>
          <h1 id="intro-heading">Aspect Ratio Calculator</h1>
        </header>
        <FormBox />
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import FormBox from './components/FormBox.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    FormBox,
    Footer,
  },
  data() {
    return {
      lightModeActive: false,
    };
  },
  watch: {
    // whenever question changes, this function will run
    lightModeActive() {
      if (this.lightModeActive) {
        document.body.classList.add('light-mode');
        localStorage.setItem('aspect-ratio-calculator-theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('aspect-ratio-calculator-theme', 'dark');
      }
    },
  },
  created() {
    const themeStorage = localStorage.getItem('aspect-ratio-calculator-theme');
    const metaThemeColor: HTMLElement | null = document.querySelector('meta[name=theme-color]');
    const lightThemeColor = '#faf6ef';
    const darkThemeColor = '#22292e';

    if (themeStorage) {
      this.lightModeActive = themeStorage === 'light';
      if (metaThemeColor) metaThemeColor.setAttribute('content', lightThemeColor);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.lightModeActive = false;
      if (metaThemeColor) metaThemeColor.setAttribute('content', darkThemeColor);
    } else {
      this.lightModeActive = true;
      if (metaThemeColor) metaThemeColor.setAttribute('content', lightThemeColor);
    }
  },
  methods: {
    toggleLightmode() {
      this.lightModeActive = !this.lightModeActive;
    },
  },
});
</script>

<style lang="scss">
@use "./styles";

.layout {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0px 18px;
  grid-auto-flow: row;
  grid-template-areas:
    'header'
    'main'
    'footer';
}

main {
  grid-area: main;
  display: flex;
  align-items: center;
}

section {
  margin-bottom: 5rem;
}

h1 {
  text-align: center;
}
</style>
