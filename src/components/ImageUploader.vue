<template>
  <form class="form" @submit.prevent="">
    <p class="text--big">or</p>
    <legend class="sr-only">Drop your Image</legend>

    <div class="frame">
      <div class="frame__inner">
        <div class="form__wrapper">
          <div class="form__item">
            <input
              class="form__file-upload"
              id="file-upload"
              type="file"
              accept="image/*"
              @change="getImageInfos"
            />
            <label
              class="form__label form__label--upload"
              :class="{ 'form__label--has-file': hasFile }"
              for="file-upload"
            >
              Upload your image to get size and ratio
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="data-list-wrapper" aria-live="polite">
      <div v-show="hasFile">
        <p class="data-list__title">Success!</p>
        <ul class="data-list">
          <li>
            <strong>width:</strong> <span>{{ width }}</span>
          </li>
          <li>
            <strong>height:</strong> <span>{{ height }}</span>
          </li>
          <li>
            <strong>ratio:</strong> <span>{{ ratio }}</span>
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import gcd from '../helpers/gcd';

export default defineComponent({
  name: 'ImageUploader',
  data() {
    return {
      width: '',
      height: '',
      ratio: '',
      hasFile: false,
    };
  },
  methods: {
    getImageInfos(event: Event) {
      const target = event.target as HTMLInputElement;
      const { files } = target;
      const file = files && files[0];
      const image = new Image();
      const url = window.URL || window.webkitURL;
      const objectUrl = url.createObjectURL(file);

      image.onload = () => {
        url.revokeObjectURL(objectUrl);

        this.width = `${image.width}px`;
        this.height = `${image.height}px`;
        this.setRatio(image.width, image.height);
        this.hasFile = true;
      };
      image.src = objectUrl;
    },
    setRatio(width: number, height: number) {
      const ratio = gcd(width / height, 50);
      this.ratio = ratio;
    },
  },
});
</script>

<style scoped lang="scss">
@use '~styles/0-settings/settings.fonts' as *;
@use '~styles/1-tools/mixins/tools.media-query' as *;
@use '~styles/1-tools/mixins/tools.lists' as *;

.form {
  margin-top: 5rem;
}

.form__label--upload {
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0;
  border: none;
  background: none;
  position: relative;
  z-index: 1;

  @include mq(small) {
    font-size: 2.5rem;
    aspect-ratio: 16 / 1;
  }
}

.form__file-upload {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.form__file-upload:focus-visible + label {
  text-decoration: underline;
  outline: 4px dotted var(--color-theme-light);
}

.text--big {
  text-align: center;
  font-size: 4rem;
  font-weight: $font-weight-bold;
}

.data-list-wrapper > div {
  position: relative;
  z-index: 1;
  margin-top: 5rem;
}

.data-list {
  @include reset-list;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @include mq(small) {
    flex-direction: row;
    margin-top: 2rem;
    column-gap: 20px;
  }
}

.data-list__title {
  text-align: center;
}

.data-list li {
  margin-top: 1rem;

  @include mq(small) {
    margin-top: 0;
  }
}
.data-list strong {
  font-weight: $font-weight-bold;
}
</style>
