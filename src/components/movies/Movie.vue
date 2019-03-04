<template>
  <div class="filme com-cartaz">
    <h1>{{ filme.titulo }}</h1>
    <button class="del" title="Excluir" @click="excluir(filme)"></button>
    <img v-if="filme.cartaz" :src="filme.cartaz" :alt="filme.titulo">
    <ul>
      <li>
        <strong>Ano:</strong>
        {{ filme.ano }}
      </li>
      <li>
        <strong>Produtora:</strong>
        {{ filme.produtora }}
      </li>
    </ul>
    <p>{{ filme.sinopse }}</p>
  </div>
</template>

<script>

export default {
  name: 'Movie',
  props: {
    filme: {
      type: Object,
      required: true
    }
  },
  methods: {
    excluir(filme) {
      this.$emit('onExcluir', filme);
    }
  }
};
</script>
