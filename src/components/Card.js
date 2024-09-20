// Card.js
export default class Card 

{
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
  }  _getTemplate() {
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
  }_removeCard() {
    this._element.remove(); // Remueve el elemento del DOM
    this._element = null; // Limpia la referencia al elemento
  }




  _setEventListeners() {

  this._element.querySelector('.cards__like-icon').addEventListener('click', () => this._toggleLike());
  this._element.querySelector('.cards__image').addEventListener('click', () => this._handleCardClick(this._link, this._name));
    // Escuchar el clic en el botón de eliminar
    this._element.querySelector('.card__delete-icon').addEventListener('click', () => {
      // Abre el popup de confirmación (si lo tienes)
      this._handleCardDelete();
    });
  }
  
  // Método para manejar la eliminación de la tarjeta
  _handleCardDelete() {
    // Aquí es donde llamamos a la API para eliminar la tarjeta
    api.deleteCard(this._id)
      .then(() => {
        // Elimina la tarjeta del DOM solo si la eliminación fue exitosa
        this._element.remove();
      })
      .catch(err => {
        console.log('Error al intentar eliminar la tarjeta:', err);
      });
  }

  _handleCardDelete() {
    // Abre un popup de confirmación
    confirmationPopup.open(() => {
      api.deleteCard(this._id)
        .then(() => {
          this._element.remove();
        })
        .catch(err => {
          console.log('Error al intentar eliminar la tarjeta:', err);
        });
    });
  }
    

  //   const deleteButton = this.getDeleteButton();
  //   // Solo permitir eliminar si el usuario es propietario de la tarjeta
  //   if (this._ownerId === this._userId) {
  //     deleteButton.style.display = 'block';
  //     deleteButton.addEventListener('click', () => this._openDeletePopup(this._id, this._removeCard.bind(this))); // Pasar callback para eliminar del DOM
  //   } else {
  //     deleteButton.style.display = 'none';
  //   }
  // }
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
    this._element.querySelector(".cards__delete-icon").addEventListener('click',() => console.log("ejecutar evento borrar"));
  }

  // llamar la api y un a vez haya borrado la  remover la card y usar this.elementthis._element.querySelector(".cards__delete-icon").addEventListener

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


  _name;
  _link;
  _templateSelector;
  _cardArea;
  _handleCardClick; // Nueva propiedad

  // constructor(name, link, templateSelector, cardArea, handleCardClick) {
  //   this._name = name;
  //   this._link = link;
  //   this._templateSelector = templateSelector;
  //   this._cardArea = cardArea;
  //   this._handleCardClick = handleCardClick; // Almacena el callback
  // }

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

