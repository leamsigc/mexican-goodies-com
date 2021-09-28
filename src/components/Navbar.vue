<script setup lang="ts">
import TheFooter from '../components/TheFooter.vue'
import { useI18n } from 'vue-i18n'
import Button from './forms/Button.vue'
interface link {
  id: number
  path: string
  name: string
}

interface Props {
  title: string
  links: link[]
}
const props = defineProps<Props>()
function HandleChangeLocale(value: string) {
  locale.value = value
}
const { t, locale } = useI18n({
  useScope: 'global'
})
</script>

<template>
  <div class="rounded-lg shadow bg-base-200 drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <div class="w-full navbar bg-base-300">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <h2 class="md:text-2xl font-bold">
            <strong> <span class="text-green-500">MEXI</span><span class="text-gray-100">CANGOO</span><span class="text-red-500">DIES</span></strong>
          </h2>
          <div class="btn-group md:p-4 ml-2 md:ml-0">
            <button class="btn btn-xs" :class="{ 'btn-active': lang === locale }" v-for="lang in ['en', 'de', 'es']" @click="HandleChangeLocale(lang)">{{ lang }}</button>
          </div>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu horizontal">
            <li v-for="link in props.links" :key="link.id">
              <router-link :to="link.path" class="rounded-btn">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
          <router-link to="/countdown" class="btn btn-primary">Add my Bussines</router-link>
        </div>
      </div>
      <div class="overflow-y-scroll">
        <slot></slot>
        <TheFooter />
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="p-4 overflow-y-auto menu w-80 bg-base-100">
        <li v-for="link in props.links" :key="link.id">
          <router-link :to="link.path">
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
