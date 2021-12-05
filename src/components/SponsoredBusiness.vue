<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
/**
 *
 * Component Description:Sponsored business card
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const { t } = useI18n({
  useScope: 'global'
})
</script>

<template>
  <div class="card-body">
    <h2 class="card-title text-blue-500">
      {{ t('sponsor.gold.name') }}
      <div class="badge badge-warning mx-2">GOLD</div>
    </h2>
    <p class="font-light text-xs">{{ t('sponsor.gold.type') }}</p>
    <p class="font-light text-xs">{{ t('sponsor.gold.contact') }}</p>
    <p class="font-light text-2xs my-2 mb-5 opacity-60">{{ t('sponsor.gold.desc') }}</p>

    <a target="_blank" :href="t('sponsor.gold.btnLink')" class="btn btn-primary btn-sm">{{ t('sponsor.gold.btn') }}</a>
  </div>
</template>
<style scoped></style>
