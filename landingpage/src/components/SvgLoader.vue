<template>
  <div></div>
</template>
<script>

let cache = new Map();
export default {
  name: 'SvgLoader',
  props: {
    src: { type: String, required: true },
  },
  async mounted() {

    if (!cache.has(this.src)) {
      try {
        cache.set(this.src, fetch(this.src).then(r => r.text()));
      } catch (e) {
        cache.delete(this.src);
      }
    }
    if (cache.has(this.src)) {
      this.$el.innerHTML = await cache.get(this.src);
    }
  }
};
</script>
