<template>
  <div class="wrapper">   
    <div class="container">
      <Header></Header>
      <WhatToExpect />
      <ForWho />
      <WhatWillYouLearning />
      <WhoAmi />
      <SignUp />
      
    </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

import WhatToExpect from '@/views/Home/WhatToExpect.vue'
import ForWho from '@/views/Home/ForWho.vue'
import WhatWillYouLearning from '@/views/Home/WhatWillYouLearning.vue'
import WhoAmi from '@/views/Home/WhoAmi.vue'
import SignUp from '@/views/Home/SignUp.vue'

export default {
  name: 'Home',
  components: {
    Sidebar,
    Header,
    WhatToExpect,
    ForWho,
    WhatWillYouLearning,
    WhoAmi,
    SignUp
  }
}
</script>
