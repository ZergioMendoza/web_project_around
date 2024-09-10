import Api from "./components/api.js"
import "./components/index.css";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopUpWithForms.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
import { updateUserProfile } from "./components/api.js";
import { addCardToServer } from './components/api.js';
import { loadCards } from './components/api.js'; 
import {
  initialCards,
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



document.addEventListener('DOMContentLoaded', async () => {
  try {
    const cards = await loadCards(); // Cargar las tarjetas desde el servidor

    cards.forEach(cardData => {
      const card = new Card(
        cardData.name,      // Nombre de la tarjeta
        cardData.link,      // Link de la imagen
        cardData.likes,     // Array de "me gusta"
        '#mi-template',     // Template selector
        document.getElementById('card'), // Contenedor de las tarjetas
        handleCardClick     // Callback para cuando se haga clic en la imagen
      );

      card.render(); // Renderizamos cada tarjeta
    });
  } catch (error) {
    console.error('Error al cargar las tarjetas:', error);
  }
});

// --------------------------------------------

// Seleccionar el formulario de añadir tarjeta
const formAddCard = document.querySelector('#add-card-form');
const inputTitle = document.querySelector('#input-title');
const inputUrl = document.querySelector('#input-url');

// Lógica para manejar el envío del formulario
formAddCard.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar comportamiento predeterminado

  const title = inputTitle.value; // Obtener título de la tarjeta
  const imageUrl = inputUrl.value; // Obtener URL de la imagen

  // Llamamos a la función para enviar la tarjeta al servidor
  addCardToServer(title, imageUrl)
    .then((newCard) => {
      // Crear la nueva tarjeta y renderizarla en el DOM
      const card = new Card(newCard.name, newCard.link, '#mi-template', cardArea, () => {
        console.log('Tarjeta clickeada');
      });
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









// Selecciona el formulario de perfil
const profileForm = document.querySelector("#popup-edit-profile form");

// Función para actualizar la UI del perfil
const updateProfileUI = (name, about) => {
  const profileName = document.querySelector(".profile__name");
  const profileAbout = document.querySelector(".profile__about");

  // Actualizar los elementos del DOM con los nuevos valores
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
      closePopup(); // Si tienes una función para cerrar el popup, úsala aquí
    })
    .catch((err) => {
      console.error("Error actualizando el perfil:", err);
    });
});

function handleCardClick(link, name) {
  // imagePopup.open(link, name); // Abre el popup con la imagen
  const imagePopup = new PopupWithImage('.popup-image'); // Asegúrate de que esto esté definido antes de usarlo

}

function renderCards(cardData) {
  const card = new Card(cardData.name, cardData.link, "#mi-template", cardArea, handleCardClick);
  card.render();
}
// Configurar los event listeners
openCards();
closeEscape();
dblclickClose();
dblclickClosed();

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
  const card = new Card(cardName, cardLink, "#mi-template", cardArea);
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

closeButton.addEventListener("click", popupToggle);
editButton.addEventListener("click", popupToggle);
submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputDescription.value;
  popupToggle();
});

