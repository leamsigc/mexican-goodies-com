<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({
  useScope: 'global'
})
</script>
<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="text-center hero-content">
      <form>
        <label>{{ t('language') }}</label>
        <select v-model="locale">
          <option value="en">en</option>
          <option value="ja">ja</option>
        </select>
      </form>
      <p>{{ t('hello') }}</p>
      <div class="max-w-md">
        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
        <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</template>
<i18n global>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>
