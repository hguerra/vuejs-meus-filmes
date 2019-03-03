<template>
  <form name="formulario" class="form-filmes">
    <h1>Adicionar Filme</h1>
    <div class="form-campo">
      <label for="titulo">Título</label>
      <input type="text" id="titulo" name="titulo">
    </div>
    <div class="form-campo pequeno">
      <label for="ano">Ano de Lançamento</label>
      <input type="number" id="ano" name="ano">
    </div>
    <div class="form-campo medio">
      <label for="produtora">Produtora</label>
      <input type="text" id="produtora" name="produtora">
    </div>
    <div class="form-campo">
      <label for="cartaz">Url do Cartaz</label>
      <input type="text" id="cartaz" name="cartaz">
    </div>
    <div class="form-campo">
      <label for="sinopse">Sinópse</label>
      <textarea id="sinopse" name="sinopse" rows="5"></textarea>
    </div>

    <footer>
      <button type="reset">Limpar</button>
      <button type="submit">Salvar</button>
    </footer>
  </form>
</template>

<script>
export default {
  name: 'Form'
};
</script>
