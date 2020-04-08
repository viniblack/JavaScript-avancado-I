class MensagemView {

 constructor(elemento) {
  this._elemento = elemento;
 }

 _templeate(model) {
  return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
 }

 update(model) {
  this._elemento.innerHTML = this._templeate(model);
 }
}