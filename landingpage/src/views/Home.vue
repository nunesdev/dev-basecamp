<template>
  <div class="wrapper">   
    <div class="container">
      <Header></Header>
      <WhatToExpect />
      <ForWho />
      <WhatWillYouLearning />
      <WhoAmi />
      <SignUp />
      <footer>
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-12">
            <p>2021 TERRA2.in - Todos os direitos reservados.</p>
            <p>contatoterra2in@gmail.com</p>
          </div>
        </div>
      </footer>
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
