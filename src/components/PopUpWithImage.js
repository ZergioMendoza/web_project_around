import Popup from "./PopUp.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popupElement.querySelector(".popup__image");
    this._caption = this._popupElement.querySelector(".popup__caption");
  }

  open(imageSrc, imageAlt) {
    this._image.src = imageSrc;
    this._image.alt = imageAlt;
    this._caption.textContent = imageAlt; // O cualquier otra lógica para la leyenda
    super.open(); // Llama al método open de Popup para mostrar el popup
  }

  setEventListeners() {
    super.setEventListeners(); // Configura los event listeners del Popup
    
  }
}
