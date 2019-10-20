<template>
  <div class="container">
    <header>
        <nuxt-link to="/">volver</nuxt-link>
        <h1 class="title">{{album.title}}</h1>
    </header>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="photo in photos" :key="photo.id">
        <img :src="photo.url" :alt="photo.title" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import env from '../../config/env'

export default {
  name: 'AlbumID',
  mounted () {
    axios.get(`${env.endpoint}/albums/${this.$route.params.id}`).then((response) => {
      this.album = response.data
    })
    axios.get(`${env.endpoint}/albums/${this.$route.params.id}/photos`).then((response) => {
      this.photos = response.data
    })
  },
  data () {
    return {
      album: '',
      photos: []
    }
  }
}
</script>

<style scoped>
  .title{
      padding-top: 120px;
  }
</style>
