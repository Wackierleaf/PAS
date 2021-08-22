import {templates} from "../templates";
import {Ymaps} from "./ymaps";

export class App {
  constructor(realtyService) {
    this.realtyService = realtyService;
    this.init();
    this._ymaps = new Ymaps();
  }

  init() {
   this.realtyService.getRealty().then(realty => {
       const model = [
         {type: 'realty', value: realty}
       ];
       this.render(model);
   });
  }

  render(model) {
    const $el = document.querySelector('#realty');
    model.forEach(block => {
      const toHTML = templates[block.type];
      if (toHTML) {
        $el.insertAdjacentHTML('beforeend', toHTML(block));
      }
    });
  }
}
