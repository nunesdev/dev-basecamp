<template>
  <section id="ForWho" class="content pt-5 forwho" data-aos="fade-right"
              data-aos-offset="15"
              data-aos-delay="450">
    <div class="title">
      Pra quem é?
    </div>
    <div class="subtitle">
      O Basecamp _init(DEV) é aplicado para pessoas que:
    </div>
    <div class="row align-items-center"> 
      <div class="col">
        <p>
          <br>
          <ul>
            <li> <SvgLoader class="icon-arrow" src="/svg/right-arrow.svg"/> Querem iniciar sua carreira em tecnologia.</li>
            <li><SvgLoader class="icon-arrow" src="/svg/right-arrow.svg" /> Que já trabalham com TI, mas querem migrar.</li>
            <li> <SvgLoader class="icon-arrow" src="/svg/right-arrow.svg" />Querem expandir seus conhecimentos.</li>
          </ul>
        </p>
        <p><h3>Requisitos:</h3></p>
        <p>
          <ul>
            <li><SvgLoader class="icon-arrow" src="/svg/right-arrow.svg"/> Vontade de aprender</li>
            <li><SvgLoader class="icon-arrow" src="/svg/right-arrow.svg"/> Um computador</li>
          </ul>
        </p>
      </div>
      <div class="col">
        <div class="mask"></div>
      </div>
    </div>
  </section>
</template>
<script>
import SvgLoader from '@/components/SvgLoader'

export default {
  components: {SvgLoader}
}
</script>
