<template>
  <div class="container">
    <h1>{{ titulo }}</h1>

    <hr>

    <Form></Form>

  </div>
</template>

<script>
import Form from '@/components/movies/Form.vue'

export default {
  name: 'Content',
  components: {
    Form
  },
  data() {
    return {
      titulo: 'Filmes'
    }
  }
};
</script>
