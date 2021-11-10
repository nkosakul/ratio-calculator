<template>
  <div class="tabs">
    <span id="tabs-heading" class="sr-only">Ratio Calculator</span>
    <ol class="tabs__list" role="tablist" aria-labelledby="tabs-heading">
      <li class="tabs__item" v-for="panel in panels" :key="panel.id">
        <button
          :id="panel.id"
          class="tabs__button"
          role="tab"
          :aria-selected="panel.active"
          :aria-controls="panel.panelId"
        >
          {{panel.label}}
        </button>
      </li>
    </ol>

    <div
      v-for="panel in panels"
      :key="panel.panelId"
      :id="panel.panelId"
      class="tabs__panel"
      role="tabpanel"
      :aria-labelledby="panel.id"
      tabindex="0"
      :hidden="!panel.active"
    >
      1
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormBox',
  data() {
    return {
      panels: [
        {
          id: 'height-button',
          panelId: 'height-tab',
          label: 'Calculate Height',
          active: true,
        },
        {
          id: 'width-button',
          panelId: 'width-tab',
          label: 'Calculate Width',
          active: false,
        },
        {
          id: 'ratio-button',
          panelId: 'ratio-tab',
          label: 'Calculate Ratio',
          active: false,
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.tabs {
  border-radius: 2rem;
  background-color: var(--color-white);
  margin-top: 5rem;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0) 0px 0px 0px 0px,
  rgba(0, 0, 0, 0.05) 0px 2.65546px 95px 0px;
}

.tabs__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0;
  padding: 0;
  list-style: none;
}

.tabs__item:not(:first-child) {
  border-left: 2px solid rgba(var(--color-gray-dark-rgb), 0.05);
}

.tabs__button {
  width: 100%;
  padding: 2rem 1rem;
  color: var(--color-gray-dark);
  border-bottom: 2px solid rgba(var(--color-gray-dark-rgb), 0.05);
  transition: 300ms border-color ease-in-out;
}

.tabs__button:hover,
.tabs__button.focus-visible,
.tabs__button[aria-selected='true'] {
  border-color: var(--ci-color);
}

.tabs__panel {
  padding: 2rem;
}
</style>
