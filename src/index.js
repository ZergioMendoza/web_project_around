
import { updateUserAvatar } from "./components/api.js";
import Api from "./components/api.js";
import "./components/index.css";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopUpWithForms.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import { updateUserProfile, addCardToServer, loadCards } from './components/api.js'; 
import {
  template,
  cardArea,
  popupAddCard,
  inputCardLink,
  inputCardName,
  closeButton,
  editButton,
  submitButton,
  profileName,
  profileAbout,
  inputName,
  inputDescription,
  openCards,
  closeEscape,
  dblclickClose,
  dblclickClosed,
  popupToggle,
  addCardPopupToggle,
} from "./utils.js";

const changeAvatarPopup = new PopupWithForm('#popup-change-avatar', handleAvatarSubmit);

// Manejar el evento de clic en el ícono de edición del avatar
const avatarEditIcon = document.querySelector('.profile__avatar-edit-icon');

avatarEditIcon.addEventListener('click', () => {
  changeAvatarPopup.open(); // Abre el popup
});

// Función que se llama al enviar el formulario
function handleAvatarSubmit(formData) {
  const avatarUrl = formData['avatar-url']; // Obtiene la URL de la nueva imagen
  
  updateUserAvatar(avatarUrl)
    .then(() => {
      document.querySelector('.profile__avatar').src = avatarUrl; // Actualiza la imagen de perfil
      changeAvatarPopup.close(); // Cierra el popup después de actualizar
    })
    .catch((error) => {
      console.error('Error al cambiar la imagen de perfil:', error);
    });
}














// Instancia de la API
const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/groupId',
  headers: {
    authorization: 'tu-token',
    'Content-Type': 'application/json'
  }
});

// Cargar tarjetas desde el servidor al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const cards = await loadCards(); // Cargar las tarjetas desde el servidor

    renderCards(cards); // Renderizamos todas las tarjetas
  } catch (error) {
    console.error('Error al cargar las tarjetas:', error);
  }
});

// --------------------------------------------

// Seleccionar el formulario de añadir tarjeta
const formAddCard = document.querySelector('#add-card-form');
const inputTitle = document.querySelector('#input-title');
const inputUrl = document.querySelector('#input-url');

// Lógica para manejar el envío del formulario de añadir tarjeta
formAddCard.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar comportamiento predeterminado

  const title = inputTitle.value; // Obtener título de la tarjeta
  const imageUrl = inputUrl.value; // Obtener URL de la imagen

  // Llamamos a la función para enviar la tarjeta al servidor
  addCardToServer(title, imageUrl)
    .then((newCard) => {
      // Crear la nueva tarjeta y renderizarla en el DOM
      const card = new Card(newCard.name, newCard.link, newCard.likes, '#mi-template', cardArea, handleCardClick);
      card.render(); // Renderizar la nueva tarjeta

      // Limpiar los campos del formulario
      formAddCard.reset();

      // Cerrar el popup de añadir tarjeta
      closePopup(document.getElementById('popup-card-form'));
    })
    .catch((err) => {
      console.error(`Error al añadir la tarjeta: ${err}`);
    });
});

// --------------------------------------------

// Selecciona el formulario de perfil
const profileForm = document.querySelector("#popup-edit-profile form");

// Función para actualizar la UI del perfil
const updateProfileUI = (name, about) => {
  profileName.textContent = name;
  profileAbout.textContent = about;
};

// Manejar el evento de envío del formulario de edición de perfil
profileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#input-name").value;
  const aboutInput = document.querySelector("#input-about").value;

  // Llamar a la función para actualizar el perfil en el servidor
  updateUserProfile(nameInput, aboutInput)
    .then((data) => {
      updateProfileUI(data.name, data.about); // Actualizar la UI con los datos nuevos
      closePopup(document.querySelector("#popup-edit-profile")); // Cerrar popup
    })
    .catch((err) => {
      console.error("Error actualizando el perfil:", err);
    });
});

// Función para manejar clic en la imagen de la tarjeta (abrir popup de imagen)
function handleCardClick(link, name) {
  const imagePopup = new PopupWithImage('.popup-image');
  imagePopup.open(link, name); // Abre el popup con la imagen
}

// Renderizar las tarjetas en el contenedor
function renderCards(cardsArray) {
  cardsArray.forEach(cardData => {
    const card = new Card(
      cardData.name, 
      cardData.link, 
      cardData.likes, 
      '#mi-template', 
      cardArea, 
      handleCardClick
    );
    card.render(); // Renderizamos cada tarjeta
  });
}

// --------------------------------------------

// Configurar los event listeners para los popups y otras acciones
openCards();
closeEscape();
dblclickClose();
dblclickClosed();

// Habilitar la validación de formularios
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    const formValidator = new FormValidator(settings, formElement);
    formValidator.enableValidation();
  });
};

popupAddCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardName = inputCardName.value;
  const cardLink = inputCardLink.value;
  const card = new Card(cardName, cardLink, [], "#mi-template", cardArea);
  card.render();
  addCardPopupToggle();
});

// Llamada para habilitar la validación con los selectores y clases específicas
enableValidation({
  formSelector: ".popup__container", // Selector del formulario
  inputSelector: ".popup__input", // Selector de los campos de entrada
  submitButtonSelector: ".popup__submit", // Selector del botón de envío
  inactiveButtonClass: "popup__submit_inactive", // Clase para desactivar el botón de envío
  inputErrorClass: "popup__input_type_error", // Clase para resaltar el campo de entrada con error
  errorClass: "popup__input-error", // Clase para mostrar el mensaje de error
});

// Listeners para abrir y cerrar popups
closeButton.addEventListener("click", popupToggle);
editButton.addEventListener("click", popupToggle);
submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputDescription.value;
  popupToggle();
});
