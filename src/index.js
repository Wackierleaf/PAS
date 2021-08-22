import {App} from './classes/app';
import {RealtyService} from './classes/realty.service';
import './styles/styles.css';
import {Ymaps} from "./classes/ymaps";

new App(
  new RealtyService(),
);

//  fetch('https://localhost:5001/api/Realty').then( response => {
//    if(response.ok) {
//      response.json().then( json => {
//        const model = [
//          {type: 'realty', value: json}
//        ];
//        initialize(model);
//      });
//    }
//  });
//
//
// function initialize(model) {
//   console.log(model)
//   const $el = document.querySelector('#realty');
//   model.forEach(block => {
//     const toHTML = templates[block.type];
//     if (toHTML) {
//       $el.insertAdjacentHTML('beforeend', toHTML(block));
//     }
//   });
//
//   ymaps.ready(init);
//
//   function init() {
//     const map = new ymaps.Map("map", {
//       center: [55.76, 37.64],
//       zoom: 7
//     })
//   }
// }


