import Popup from "./PopUp.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
   

    this._image = this._popupElement.querySelector(".popup__image");
    this._caption = this._popupElement.querySelector(".popup__caption");

    // this._image = this._popupElement.querySelector(".popup__image");
    // this._caption = this._popup.querySelector(".popup__caption");
    if (!this._image || !this._caption) {
      console.error('No se pudo encontrar la imagen o la leyenda en el popup');
    }
  }

  open(imageSrc, imageAlt) {
    if (this._image && this._caption) {
      this._image.src = imageSrc;
      this._image.alt = imageAlt;
      this._caption.textContent = imageAlt; // O cualquier otra lógica para la leyenda
      super.open(); // Llama al método open de Popup para mostrar el popup
    } else {
      console.error('No se pueden configurar las propiedades porque los elementos no existen');
    }
  }

  setEventListeners() {
    super.setEventListeners(); // Configura los event listeners del Popup

    

    this._popup
      .querySelector(".popup__close")
      .addEventListener("click", () => this.close());

  }
}
