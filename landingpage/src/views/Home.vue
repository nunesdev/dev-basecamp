<template>
  <div class="container">
    <Header></Header>
    <ContentStart />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ContentStart from '@/views/Home/ContentStart.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ContentStart
  }
}
</script>
