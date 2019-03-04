import HTTP from '@/services/http-common.js';

export default class FilmesService {

  constructor() {
    this.request = HTTP;
  }

  get buscar() {
    return this.request.get('filmes.json');
  }

  inserir(filme) {
    const id = filme.id;
    delete filme.id;

    return this.request.put(`filmes/${id}.json`, filme);
  }

  excluir(id) {
    return this.request.delete(`filmes/${id}.json`);
  }
}
