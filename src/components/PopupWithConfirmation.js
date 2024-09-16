// PopupWithConfirmation.js
class PopupWithConfirmation {
    constructor(popupSelector, handleConfirm) {
      this._popupElement = document.querySelector(popupSelector);
      this._handleConfirm = handleConfirm; // Cambiamos a handleConfirm
      this._submitButton = this._popupElement.querySelector('.popup__submit');
      this._cancelButton = this._popupElement.querySelector('.popup__cancel');
      this._closeButton = this._popupElement.querySelector('.popup__close');
      this._cardId = null;
  
      // Configuramos los listeners al inicializar la clase
      this._setEventListeners();
    }
  
    setCardId(cardId) {
      this._cardId = cardId; // Método para establecer el ID de la tarjeta
    }
    setSubmitAction(action) {
        this._handleConfirm = action; // Permitir que la acción se actualice dinámicamente
      }
  
    open() {
      this._popupElement.classList.add('popup_opened'); // Mostrar el popup
    }
  
    close() {
      this._popupElement.classList.remove('popup_opened'); // Cerrar el popup
    }
  
    _setEventListeners() {
      // Listener para el botón de confirmar
      this._submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evitamos el comportamiento por defecto del submit
        if (this._cardId) {
          this._handleConfirm(this._cardId); // Llamamos a la acción de confirmación con el cardId
        }
      });
  
      // Listener para el botón de cancelar
      this._cancelButton.addEventListener('click', () => {
        this.close(); // Cerrar popup si se presiona "No"
      });
  
      // Listener para cerrar el popup al presionar el botón de cerrar
      this._closeButton.addEventListener('click', () => {
        this.close();
      });
  
      // Cerrar el popup al hacer clic fuera de la caja
      this._popupElement.addEventListener('click', (event) => {
        if (event.target === this._popupElement) {
          this.close();
        }
      });
    }
  }
  
  export default PopupWithConfirmation;
  