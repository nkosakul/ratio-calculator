<template>
  <div class="layout">
    <Header />
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
}

h1 {
  text-align: center;
}
</style>
