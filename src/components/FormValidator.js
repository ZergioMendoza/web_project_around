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
  