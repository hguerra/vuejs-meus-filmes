import HTTP from '@/services/http-common.js';

export default class FilmesService {

  constructor() {
    this.request = HTTP;
  }

  get filmes() {
    return this.request.get('filmes.json');
  }
}
