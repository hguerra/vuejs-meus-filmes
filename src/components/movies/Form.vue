<template>
  <form name="formulario" class="form-filmes" @submit="onSubmit($event)">
    <h1>Adicionar Filme</h1>
    <div class="form-campo">
      <label for="titulo">Título</label>
      <input type="text" id="titulo" name="titulo" v-model="titulo">
    </div>
    <div class="form-campo pequeno">
      <label for="ano">Ano de Lançamento</label>
      <input type="number" id="ano" name="ano" v-model="ano">
    </div>
    <div class="form-campo medio">
      <label for="produtora">Produtora</label>
      <input type="text" id="produtora" name="produtora" v-model="produtora">
    </div>
    <div class="form-campo">
      <label for="cartaz">Url do Cartaz</label>
      <input type="text" id="cartaz" name="cartaz" v-model="cartaz">
    </div>
    <div class="form-campo">
      <label for="sinopse">Sinópse</label>
      <textarea id="sinopse" name="sinopse" rows="5" v-model="sinopse"></textarea>
    </div>

    <footer>
      <button type="reset" @click="limpar()">Limpar</button>
      <button type="submit">Salvar</button>
    </footer>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      titulo: '',
      ano: '',
      produtora: '',
      cartaz: '',
      sinopse: ''
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const filme = {
        id: Date.now().toString(),
        titulo: this.titulo,
        ano: this.ano,
        produtora: this.produtora,
        cartaz: this.cartaz,
        sinopse: this.sinopse
      };

      this.$emit('onCriarFilme', filme);
      this.limpar();
    },
    limpar() {
      this.titulo = '';
      this.ano = '';
      this.produtora = '';
      this.cartaz = '';
      this.sinopse = '';
    }
  }
};
</script>
