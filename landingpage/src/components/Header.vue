<template>
  <header class="pt-md-2 pt-sm-0 row align-items-center">
      
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
    Hero,
  }
}
</script>
