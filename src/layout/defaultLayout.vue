<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
interface link {
  id: number
  path: string
  name: string
}
const links: link[] = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About Us', path: '/about' }
]
</script>
<template>
  <Navbar title="MexicanGoodies" :links="links">
    <router-view />
  </Navbar>
</template>
