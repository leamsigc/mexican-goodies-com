<script setup lang="ts">
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
          <span> {{ title }} </span>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu horizontal">
            <li v-for="link in props.links" :key="link.id">
              <router-link :to="link.path" class="rounded-btn">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <slot></slot>
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
  <!-- <div class="fixed left-0 right-0 top-0 h-16 shadow-md border-b-2 border-gray-100 bg-gray-900">
    <nav class="flex items-center container mx-auto h-full justify-between">
      <h1 class="font-semibold uppercase text-lg text-gray-200">
        {{ title }}
      </h1>
      <div>
        <ul class="flex items-center space-x-10 text-sm">
          <li v-for="link in props.links" :key="link.id">
            <router-link :to="link.path" class="text-gray-400 hover:text-gray-100">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <Button text="Login" />
      </div>
    </nav>
  </div> -->
</template>
