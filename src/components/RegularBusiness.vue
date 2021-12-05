<script lang="ts" setup>
/**
 *
 * Component Description:Regular business view
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

import { defineProps, toRefs } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n({
  useScope: 'global'
})

const props = defineProps<{
  business: {
    name: string
    desc: string
    contact: string
    link: string
    bgImage: string
    address: string
  }
}>()

const { business } = toRefs(props)
</script>

<template>
  <div class="lg:w-1/3 sm:w-1/2 p-4">
    <div class="flex relative rounded">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded opacity-70" :src="business.bgImage" />
      <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-800 opacity-0 hover:opacity-100 rounded transition-opacity ease-in-out">
        <h2 class="card-title text-blue-500">{{ business.name }}</h2>
        <p class="tfont-light text-xs font-medium mb-3">{{ business.address }}</p>
        <p class="font-light text-2xs leading-relaxed">{{ business.desc }}</p>
        <p class="font-light text-2xs leading-relaxed">{{ business.contact }}</p>
        <a :href="business.link" target="_blank" class="btn btn-accent btn-sm mt-5 btn-block">{{ t('sponsor.gold.btn') }}</a>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
