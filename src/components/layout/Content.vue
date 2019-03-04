<template>
  <div class="container">
    <h1>{{ titulo }}</h1>
    <MovieList></MovieList>
  </div>
</template>

<script>
import MovieList from '@/components/movies/MovieList.vue'

export default {
  name: 'Content',
  components: {
    MovieList
  },
  data() {
    return {
      titulo: 'Filmes'
    }
  }
};
</script>
