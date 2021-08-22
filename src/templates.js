function realty(block) {
  const html = block.value.map(item => `
     <div class="col">
     <div class="card">
       <div class="card-body">
        <h5 class="card-title">${item.address}</h5>
        <p class="card-text">Цена: ${item.price}</p>
       </div>
     </div>
   </div>
`)
  return html.join('');
}

export const templates = {
  realty,
}
