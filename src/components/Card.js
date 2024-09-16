// Card.js
export default class Card {
  constructor({ name, link, likes, _id }, templateSelector, cardArea, handleCardClick, userId, openDeletePopup, api) {
    this._name = name;
    this._link = link;
    this._likes = likes;
    this._id = _id;
    this._templateSelector = templateSelector;
    this._cardArea = cardArea;
    this._handleCardClick = handleCardClick;
    this._userId = userId;  // Almacenar el ID del usuario
    this._openDeletePopup = openDeletePopup; // Guardar referencia a la función de apertura del popup
    this.api = api; // Guardar referencia a la API
  }

  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector('.cards__card')
      .cloneNode(true);
    return template;
  }

  _updateLikes() {
    const likeCount = this._element.querySelector('.cards__like-count');
    likeCount.textContent = this._likes.length;

    const likeHeart = this._element.querySelector('.cards__like-icon');
    if (this._likes.some(user => user._id === this._userId)) {
      likeHeart.classList.add('cards__like-color');
    } else {
      likeHeart.classList.remove('cards__like-color');
    }
  }

  getDeleteButton() {
    return this._element.querySelector('.cards__delete-icon');
  }

  createCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.cards__title').textContent = this._name;
    const cardImage = this._element.querySelector('.cards__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;

    // Mostrar el icono de la papelera solo si el usuario es el propietario
    if (this._likes.some(user => user._id === this._userId)) {
      this.getDeleteButton().style.display = 'block'; // Mostrar papelera
      this.getDeleteButton().addEventListener('click', () => {
        this._openDeletePopup(this._id); // Abrir el popup de confirmación
      });
    } else {
      this.getDeleteButton().style.display = 'none'; // Ocultar papelera
    }

    this._setEventListeners();
    this._updateLikes();

    return this._element; // Asegúrate de retornar el elemento
  }

  _setEventListeners() {
    this._element.querySelector('.cards__like-icon').addEventListener('click', () => this._toggleLike());
    this._element.querySelector('.cards__image').addEventListener('click', () => this._handleCardClick(this._link, this._name));
  }

  _toggleLike() {
    if (this._likes.some(user => user._id === this._userId)) {
      this.api.removeLike(this._id) // Usar la API pasada
        .then(updatedCard => {
          this._likes = updatedCard.likes;
          this._updateLikes();
        })
        .catch(err => console.error('Error al quitar like:', err));
    } else {
      this.api.addLike(this._id) // Usar la API pasada
        .then(updatedCard => {
          this._likes = updatedCard.likes;
          this._updateLikes();
        })
        .catch(err => console.error('Error al añadir like:', err));
    }
  }
}
