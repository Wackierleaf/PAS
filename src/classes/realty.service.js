export class RealtyService {
  #getRealtyUrl = 'https://localhost:5001/api/Realty';

  async getRealty() {
    return await (await fetch(this.#getRealtyUrl)).json();
  }
}
