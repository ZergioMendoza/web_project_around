export default class Popup {
    constructor(popupSelector) {
      this._popupElement = document.querySelector(popupSelector);
      this._handleEscClose = this._handleEscClose.bind(this); // Asegura el contexto correcto
      this._handleOverlayClose = this._handleOverlayClose.bind(this);
    }
  
    // Abre el popup
    open() {
      this._popupElement.classList.add('popup__opened');
      this.setEventListeners(); 
    }
  
    // Cierra el popup
    close() {
      this._popupElement.classList.remove('popup__opened');
      this.removeEventListeners(); 
    }
  
   
    _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  
   
    _handleOverlayClose(evt) {
      if (evt.target === this._popupElement) {
        this.close();
      }
    }
  
    // Añade los event listeners necesarios
    setEventListeners() {
      // Añade el event listener para el botón de cierre
      this._popupElement.querySelector('.popup__close').addEventListener('click', () => this.close());
      // Añade el event listener para el clic en el área sombreada
      this._popupElement.addEventListener('click', this._handleOverlayClose);
      // Añade el event listener para la tecla Escape
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    // Elimina los event listeners para evitar fugas de memoria
    removeEventListeners() {
      this._popupElement.querySelector('.popup__close').removeEventListener('click', () => this.close());
      this._popupElement.removeEventListener('click', this._handleOverlayClose);
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }
  
// ____________________________________
  // Crear una instancia de Popup para el popup de cambiar la imagen de perfil
