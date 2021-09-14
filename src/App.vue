<script lang="ts" setup>
import Navbar from './components/Navbar.vue'
interface link {
  id: number
  path: string
  name: string
}
const links: link[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About Us', path: '/about' },
  { id: 3, name: 'Docs', path: '/docs' }
]
</script>

<template>
  <h2>hello</h2>
  <Navbar title="DemoApp" :links="links" />
  <div class="pt-20">
    <router-view />
  </div>
</template>

<style></style>
