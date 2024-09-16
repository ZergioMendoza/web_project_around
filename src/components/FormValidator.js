// FormValidator.js
export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
  }

  // Método para habilitar la validación
  enableValidation() {
    this._setEventListeners();
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _checkInputValidity(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.classList[1]}-error`);

    if (errorElement) { // Solo establece textContent si errorElement no es null
        if (!inputElement.validity.valid) {
            errorElement.textContent = inputElement.validationMessage; // Establece el mensaje de error
            errorElement.classList.add(this._settings.errorClass); // Añade clase de error
        } else {
            errorElement.textContent = ''; // Limpia el mensaje de error
            errorElement.classList.remove(this._settings.errorClass); // Quita la clase de error
        }
    } else {
        console.error('Error element not found for:', inputElement);
    }
}
  

  _toggleButtonState() {
    const hasInvalidInput = this._inputList.some((inputElement) => !inputElement.validity.valid);
    if (hasInvalidInput) {
      this._submitButton.classList.add(this._settings.inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._settings.inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
}


