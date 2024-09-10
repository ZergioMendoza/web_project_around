

export default class Card {
  _name;
  _link;
  _likes; // Nueva propiedad para almacenar los likes
  _templateSelector;
  _cardArea;
  _handleCardClick; // Nueva propiedad

  constructor(name, link, likes, templateSelector, cardArea, handleCardClick) {
    this._name = name;
    this._link = link;
    this._likes = likes; // Almacena los likes
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
    const likeCount = cardElement.querySelector(".cards__like-count"); // Agregar elemento para mostrar likes

    // Configurar el comportamiento del botón de like
    likeHeart.addEventListener("click", () => {
      likeHeart.classList.toggle("cards__like-color");
      // Aquí puedes añadir lógica para enviar el like al servidor si es necesario
      // Ejemplo: this._toggleLike();
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

    // Mostrar la cantidad de "me gusta"
    likeCount.textContent = this._likes.length > 0 ? this._likes.length : 0;

    return cardElement;
  }

  render() {
    const cardElement = this._createCards();
    this._cardArea.append(cardElement);
  }
}
