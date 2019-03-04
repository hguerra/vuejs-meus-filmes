<template>
  <div class="container">
    <h1>{{ titulo }}</h1>

    <MovieList></MovieList>
    <hr>
    <Form></Form>

  </div>
</template>

<script>
import MovieList from '@/components/movies/MovieList.vue'
import Form from '@/components/movies/Form.vue'

export default {
  name: 'Content',
  components: {
    MovieList,
    Form
  },
  data() {
    return {
      titulo: 'Filmes'
    }
  }
};
</script>
