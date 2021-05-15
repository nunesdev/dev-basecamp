<template>
  <section id="SignUp" class="content pt-5 signup text-center d-flex align-items-center justify-content-center">
    
    <div v-if="!lead" class="col">
      <div class="title">
        Inscreva-se agora
      </div>
    
      <div class="row align-items-center justify-content-center pt-5"> 
        <div class="col-sm-12 col-md-8 col-lg-5">
          <form action="" class="form-horizontal" @submit="onSubmit">
            <div class="form-group">
              <input type="text" name="name" v-model="name" placeholder="Digite seu nome" class="form-control" required>
            </div>
            <div class="form-group">
              <input type="email" name="email" v-model="email" placeholder="Digite seu melhor e-mail" class="form-control" required>
            </div>
            <div class="form-group">
            <button  class="btn btn-block btn-primary submit">Liberar Acesso</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div v-if="lead" class="col">
      <div class="title">
        Você já está cadastrado! <br/>Obrigado!
      </div>
      <div class="subtitle">
        Agora é só seguir <a target="_blank" class="link" href="https://instagram.com/brx.tech">@brx.tech</a> para acompanhar os conteúdos
      </div>

      <div class="row align-items-center justify-content-center pt-5"> 
        <div class="col-6">
          
        </div>
        <div class="col-sm-12 col-md-6">
          <Timeline />
        </div>
      </div>
    </div>


  </section>
</template>
<script>
import { usersCollection } from '@/firebase'
import Timeline from '@/views/Home/Timeline'

export default {
  name: 'signup',
  components: {
    Timeline
  },
  data() {
    return {
      name:  null,
      email: null,
      lead: false
    }
  },
  mounted() {
    if(this.$ls.get('basecamp-lead')) this.lead = true
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()

      if (this.name && this.email) {
 
        await usersCollection.doc().set({
          username: this.name,
          email: this.email,
          date: new Date(),
          approved: false
        })  
        .then(() => {
            this.lead = true
            console.log("Document successfully written!")
            this.$ls.set('basecamp-lead', "true")
        })
        .catch((error) => {
            console.error("Error writing document: ", error)
        })
      }
    } 
  }
}
</script>
<style lang="sass" scoped>
.error
  border-color: red 
</style>