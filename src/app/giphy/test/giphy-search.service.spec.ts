import { GiphySearchService } from '../giphy-search.service';

describe('giphy-search.service.spec.ts', () => {

  const httpMock = jasmine.createSpyObj('Http', ['get']); // Dublê
  let service: GiphySearchService;

  // Entradas
  const limit = '10';
  const term = 'happy';
  const apiKey = 'mdYTsHMSGbIyGff5ZP4xrKEdXWb1P9V1';

  // Esperado
  const expected = 'http://api.giphy.com/v1/gifs/search?q=' + term + '&api_key=' + apiKey + '&limit=' + limit;

  beforeEach(() => {
    service = new GiphySearchService(httpMock);
  });

  it('pesquisarGiphy', () => {
    // Processamento
    service.pesquisarGiphy(limit, term);
    // Saída
    expect(httpMock.get).toHaveBeenCalled();
    expect(httpMock.get).toHaveBeenCalledWith(expected);
  });

  it('getUrl', () => {
    // Processamento
    const url = service.getUrl(apiKey, limit, term);
    // Saída
    expect(url).toBe(expected);
  });

});
