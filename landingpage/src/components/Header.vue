<template>
  <header class="pt-2 row align-items-center">
      <ContentStart />
  </header>
</template>

<script>
import ContentStart from '@/views/Home/ContentStart.vue'

export default {
  name: 'Header',
  props: {
    msg: String
  },
  components:{ContentStart}
}
</script>
