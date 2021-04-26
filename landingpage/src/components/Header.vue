<template>
  <header class="pt-2 row justify-content-center align-items-center">
    <div class="col text-center">
      <h1 class="basecamp">_init(DEV) <small>BASECAMP</small></h1>
    </div>
    <div class="col">
      <h3 class="date">14 a 21 <small>JUNHO</small></h3>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
