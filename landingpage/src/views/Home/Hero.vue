<template>
  <section class="content pt-md-5 pt-sm-0">
    <div class="row align-items-center">
      <div class="col-sm-12 col-md-3">
        <h3 class="basecamp"> <span>_init(DEV) </span> <small>BASECAMP 1.0.0</small></h3>
      </div>
      <div class="col-md-9 col-lg-9 col-xl-8">
        <nav data-aos="fade-left"
              data-aos-offset="15"
              data-aos-delay="450">
      
      <a v-scroll-to="'#WhatToExpect'" class="navigation">O que esperar</a>
      <a v-scroll-to="'#ForWho'" class="navigation">Pra quem é</a>
      <a v-scroll-to="'#WhatWillYouLearning'" class="navigation">Você vai aprender</a>
      <a v-scroll-to="'#WhoAmi'" class="navigation">Quem sou eu</a>
      <a v-scroll-to="'#SignUp'" class="sigin active">Inscreva-se agora</a>
    </nav>
      </div>
    </div>
    
    <div class="hero">
      <section>
        <h1 data-aos="fade-left"
              data-aos-offset="15"
              data-aos-delay="250">
          Participe de um basecamp de programação!  <br/><span class="text-green b">100% gratuito</span> e <span class="text-green b">imersivo!</span>
        </h1>
        <button v-scroll-to="'#SignUp'" class="btn btn-primary call-to-action"
        data-aos="fade-up"
              data-aos-offset="15"
              data-aos-delay="350">INSCREVA-SE AGORA</button>
      </section>
      
    </div>
    <!-- <div class="subtitle">
      Até 2024, mais de <span class="text-green b bg-highlight">400 mil vagas</span> devem surgir no<br/> mercado de tecnologia.<br/> Contudo, 150 mil podem não ser preenchidas<br/> por <span class="text-red">falta de profissional.</span>
    </div> -->
    
  </section>
</template>
<script>

export default {
  mounted() {
    
  },
  methods: {

  }
}
</script>
