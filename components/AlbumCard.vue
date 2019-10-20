<template>
  <div class="column is-one-quarter">
    <div class="box">
      <h3>{{album.title}}</h3>
      <nuxt-link :to="`/albums/${album.id}`" class="button is-primary">ver más</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlbumCard',
  props: {
    album: Object
  }
}
</script>

<style lang="css">
.box {
  padding: 2em;
}
h3{
  min-height: 5em;
}
</style>
