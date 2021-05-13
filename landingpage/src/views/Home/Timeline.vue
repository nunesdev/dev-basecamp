<template>
  <div class="timeline-wrapper"> 
    <ul class="step">
            <li class="step-item">
                <div class="bold date">17/05</div> 
                <div class="bold">Vamos começar!</div>
                <p><a target="_blank" href="https://instagram.com/brx.tech">Acompanhe @brx.tech</a></p>
            </li>
            <li class="step-item">
                <div class="bold date">18/05</div> 
                <div class="bold">Setup localhost</div>
                <p class="highlight">Posts, Stories, Reels, IGTV</p>
                <p>Tudo para você começar<br/> a preparar seu ambiente<br/> de desenvolvimento</p>
            </li>
            <li class="step-item">
                <div class="bold date">25/05</div> 
                <div class="bold"><div class="live"></div>Live</div>
                <p>Mercado de TI</p>
            </li>
            <li class="step-item">
                <div class="bold date">09/06</div> 
                <div class="bold"><div class="live"></div>Live</div>
                <p>Como ser <span class="highlight">contratado</span></p>
            </li>
            <li class="step-item">
                <div class="bold date">14/06</div> 
                <div class="bold"><img src="/img/rocket.png" width="34" alt=""> Let's Code!</div>
                <p>mão na massa (ao vivo) <div v-html="addGoogleCalendar('20210614T200000Z/20210614T211500Z','Início dos estudos - Basecamp')"></div> </p>
            </li>
            <li class="step-item">
                <div class="bold date">20/06</div> 
                <div class="bold">Deploy em <span class="highlight">Produção</span></div>
            </li>
            <li class="step-item">
                <div class="bold date">21/06</div> 
                <div class="bold">Encerramento</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  mounted() {
      
  },
  methods: {
    addGoogleCalendar(date,text) {
      let details = `Youtube - https://www.youtube.com/channel/UCSt8qzm-O16EGSPiPMBsoiA<br/>Telegram - https://t.me/joinchat/hdYP3Opo4m5iM2Yx`
      
      return `<a target="_blank" href="http://www.google.com/calendar/event?action=TEMPLATE&text=${text}&dates=${date}&details=${details}&location=123%20Main%20St%2C%20Example%2C%20NY">Add Google Calendário</a>`
    }
  }
}
</script>
