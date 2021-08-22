import {voronezh} from "../constants";

export class Ymaps {
  constructor() {
    this.myMap = ymaps.ready(this.init);
  }

  init() {
    const map = new ymaps.Map("map", {
      center: voronezh,
      zoom: 12
    })
    map.events.add('click', function (event) {
      const coords = event.get('coords');
      console.log(coords);
    })
  }

  findByCoords(coords) {
    return ymaps.geocode(coords, {
      results: 1
    });
  }
}
