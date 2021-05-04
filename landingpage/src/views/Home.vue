<template>
  <div class="container">
    <Header></Header>
    <ContentStart />
    <WhatToExpect />
    <Timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import ContentStart from '@/views/Home/ContentStart.vue'
import WhatToExpect from '@/views/Home/WhatToExpect.vue'
import Timeline from '@/views/Home/Timeline.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ContentStart,
    WhatToExpect,
    Timeline
  }
}
</script>
