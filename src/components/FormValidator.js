<<<<<<< HEAD
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


=======
export default class FormValidator {
    constructor(settings, formElement) {
      this._settings = settings;
      this._formElement = formElement;
      this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
      this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
    }
  
    _showInputError(inputElement, errorMessage) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      this._toggleSubmitButtonState();
    }
  
    _hideInputError(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.textContent = "";
      this._toggleSubmitButtonState();
    }
  
    _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  
    _toggleSubmitButtonState() {
      const hasInvalidInput = this._inputList.some(inputElement => !inputElement.validity.valid);
      if (hasInvalidInput) {
        this._submitButton.classList.add(this._settings.inactiveButtonClass);
        this._submitButton.setAttribute("disabled", true);
      } else {
        this._submitButton.classList.remove(this._settings.inactiveButtonClass);
        this._submitButton.removeAttribute("disabled");
      }
    }
  
    _setEventListeners() {
      this._inputList.forEach(inputElement => {
        inputElement.addEventListener("input", () => {
          this._checkInputValidity(inputElement);
        });
      });
    }
  
    enableValidation() {
      this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
  
      this._setEventListeners();
      this._toggleSubmitButtonState();
    }
  }
  
>>>>>>> 913926f9301b5ebc663ec0e2a261d70e89cc096c
