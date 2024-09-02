// Card.js
export default class Card {
  _name;
  _link;
  _templateSelector;
  _cardArea;
  _handleCardClick; // Nueva propiedad

  constructor(name, link, templateSelector, cardArea, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._cardArea = cardArea;
    this._handleCardClick = handleCardClick; // Almacena el callback
  }

  _createCards() {
    const template = document.querySelector(this._templateSelector);
    const cardElement = template.content.querySelector(".cards__card").cloneNode(true);
    const cardImage = cardElement.querySelector(".cards__image");
    const cardTitle = cardElement.querySelector(".cards__title");
    const likeHeart = cardElement.querySelector(".cards__like-icon");
    const buttonDelete = cardElement.querySelector(".cards__delete-icon");

    // Configurar el comportamiento del botón de like
    likeHeart.addEventListener("click", () => {
      likeHeart.classList.toggle("cards__like-color");
    });

    // Configurar el comportamiento del botón de eliminar
    buttonDelete.addEventListener("click", () => {
      cardElement.remove();
    });

    // Configurar el comportamiento de la imagen de la tarjeta
    cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name); // Llama al callback
    });

    // Configurar los valores de la tarjeta
    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return cardElement;
  }

  render() {
    const cardElement = this._createCards();
    this._cardArea.append(cardElement);
  }
}
