<template>
  <header class="pt-2 row align-items-center">
      <h3 class="basecamp"> <span>_init(DEV) </span> <small>BASECAMP 1.0.0</small></h3>
      <Hero />
  </header>
</template>

<script>
import Hero from '@/views/Home/Hero.vue'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components:{
    Hero
  }
}
</script>
