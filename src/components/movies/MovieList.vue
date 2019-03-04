<template>
  <div>
    <div class="lista-filmes">
      <Movie @onExcluir="excluirFilme" v-for="(filme, index) in filmes" :key="index" :filme="filme"></Movie>
    </div>

    <hr>
    <Form @onCriarFilme="criarFilme"></Form>
  </div>
</template>

<script>
import Movie from '@/components/movies/Movie.vue';
import Form from '@/components/movies/Form.vue';

import FilmesService from '@/services/filmes.service.js';

export default {
  name: 'MovieList',
  components: {
    Movie,
    Form
  },
  data() {
    return {
      filmes: []
    }
  },
  computed: {
    service() {
      return new FilmesService();
    }
  },
  mounted() {
    this.service.buscar.then((result) => {
      const jsonFilmes = result.data;

      for(let chave in jsonFilmes) {
        const valor = jsonFilmes[chave];
        valor.id = chave;

        this.filmes.push(valor);
      }
    }).catch((err) => {
      console.error(err);
    });
  },
  methods: {
    criarFilme(filme) {
      this.service.inserir(filme).then((result) => {
        if (result.status === 200) {
          this.filmes.push(filme);
        }
      }).catch((err) => {
        console.error(err);
      });
    },
    excluirFilme(filme) {
      const indice = this.filmes.findIndex((item) => item.id === filme.id);
      if (indice > -1) {
        this.filmes.splice(indice, 1);
      }
    }
  }
};
</script>
