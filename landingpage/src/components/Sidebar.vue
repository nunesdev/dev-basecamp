<template>
  <div class="sidebar">
    
      <Timeline />
      <button class="btn btn-primary call-to-action"
        data-aos="fade-up"
              data-aos-offset="15"
              data-aos-delay="350">INSCREVA-SE AGORA</button>
  </div>
</template>
<script>
import Timeline from '@/views/Home/Timeline.vue'

export default {
  components: {
    Timeline
  }
}
</script>
