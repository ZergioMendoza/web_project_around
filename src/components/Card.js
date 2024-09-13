import { addLike, removeLike } from './api.js';

export default class Card {
  constructor(name, link, likes, templateSelector, cardArea, handleCardClick) {
    this._name = name;
    this._link = link;
    this._likes = likes; // Almacena los likes
    this._templateSelector = templateSelector;
    this._cardArea = cardArea;
    this._handleCardClick = handleCardClick; // Almacena el callback
    this._isLiked = this._likes.some(user => user._id === 'yourUserId'); // Cambia 'yourUserId' por el ID del usuario actual
  }

  _getTemplate() {
    const template = document.querySelector(this._templateSelector);
    return template.content.querySelector('.cards__card').cloneNode(true);
  }

  _updateLikes() {
    const likeCount = this._element.querySelector('.cards__like-count');
    likeCount.textContent = this._likes.length; // Actualiza el contador de likes

    const likeHeart = this._element.querySelector('.cards__like-icon');
    if (this._isLiked) {
      likeHeart.classList.add('cards__like-color'); // Cambia el color si ya le gusta
    } else {
      likeHeart.classList.remove('cards__like-color'); // Si no le gusta, quita el color
    }
  }

  _createCard() {
    this._element = this._getTemplate(); // Obtiene el template

    const cardImage = this._element.querySelector('.cards__image');
    const cardTitle = this._element.querySelector('.cards__title');
    const likeHeart = this._element.querySelector('.cards__like-icon');
    const buttonDelete = this._element.querySelector('.cards__delete-icon');

    // Configura el comportamiento del botón de like
    likeHeart.addEventListener('click', () => {
      this._toggleLike(likeHeart);
    });

    // Configura el comportamiento del botón de eliminar
    buttonDelete.addEventListener('click', () => {
      this._element.remove(); // Elimina la tarjeta del DOM
      // Aquí podrías llamar a una función para eliminar la tarjeta del servidor
    });

    // Configura el comportamiento de la imagen de la tarjeta
    cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name); // Llama al callback
    });

    // Configura los valores de la tarjeta
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    // Actualiza el contador de likes
    this._updateLikes();

    return this._element;
  }

  _toggleLike(likeHeart) {
    if (this._isLiked) {
      removeLike(this._link) // Cambia esto por el ID de la tarjeta si es necesario
        .then(updatedCard => {
          this._likes = updatedCard.likes; // Actualiza los likes con la respuesta del servidor
          this._isLiked = false; // Actualiza el estado de "me gusta"
          this._updateLikes(); // Actualiza la UI
        })
        .catch(err => console.error('Error al quitar el like:', err));
    } else {
      addLike(this._link) // Cambia esto por el ID de la tarjeta si es necesario
        .then(updatedCard => {
          this._likes = updatedCard.likes; // Actualiza los likes con la respuesta del servidor
          this._isLiked = true; // Actualiza el estado de "me gusta"
          this._updateLikes(); // Actualiza la UI
        })
        .catch(err => console.error('Error al añadir el like:', err));
    }
  }

  render() {
    const cardElement = this._createCard();
    this._cardArea.append(cardElement); // Agrega la tarjeta al contenedor
  }
}
