// UserInfo.js
export default class UserInfo {
    constructor({ nameSelector, aboutSelector }) {
      this._nameElement = document.querySelector(nameSelector);
      this._aboutElement = document.querySelector(aboutSelector);
    }
  
    // Devuelve un objeto con la información del usuario
    getUserInfo() {
      return {
        name: this._nameElement.textContent,
        about: this._aboutElement.textContent
      };
    }
  
    // Establece la información del usuario en la página
    setUserInfo({ name, about }) {
      this._nameElement.textContent = name;
      this._aboutElement.textContent = about;
    }
  }
  