<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  useScope: 'global'
})
</script>
<template>
  <div class="min-h-screen bg-base-300 container text-center py-10">
    <div class="max-w-5xl mx-auto">
      <h1 class="mb-3 text-5xl font-bold">Mexicano viviendo en alemania ?</h1>
      <p class="mb-5 max-w-lg mx-auto">Te as preguntado donde puedes encontrar tu producto favorito or cual es el mejor restaurante mexicano en el Alemania?</p>
      <p class="mt-10 text-xs max-w-4xl mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quis. Odit ea quasi fugiat dolorem. Nesciunt tempore doloribus suscipit porro it amet consectetur adipisicing elit.
        Corporis, quis. Odit ea quasi fugiat dolorem. Nesciunt tempore doloribus suscipit porro.
      </p>
    </div>
    <h2 class="mt-20 text-4xl font-bold">Negocio especial del mes</h2>
    <div class="card bg-black max-w-xl mx-auto mt-5">
      <div class="card-title">Hello</div>
      <div class="card-side">Side</div>
    </div>
  </div>
</template>
<i18n global>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "de": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>
