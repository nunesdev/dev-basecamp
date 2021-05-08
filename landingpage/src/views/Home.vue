<template>
  <div class="container">
    <Header></Header>
    <WhatToExpect />
    <ForWho />
    <WhatWillYouLearning />
    <WhoAmi />
    <Timeline />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

import WhatToExpect from '@/views/Home/WhatToExpect.vue'
import ForWho from '@/views/Home/ForWho.vue'
import WhatWillYouLearning from '@/views/Home/WhatWillYouLearning.vue'
import WhoAmi from '@/views/Home/WhoAmi.vue'
import Timeline from '@/views/Home/Timeline.vue'

export default {
  name: 'Home',
  components: {
    Header,
    WhatToExpect,
    ForWho,
    WhatWillYouLearning,
    WhoAmi,
    Timeline
  }
}
</script>
