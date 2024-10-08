

import PopupWithConfirmation from './components/PopupWithConfirmation.js'; // Ajusta la ruta según tu estructura de carpetas
import "./components/index.css";
import Api from "./components/api.js";
import Card from "./components/Card.js";
import PopupWithForm from "./components/PopUpWithForms.js";
import FormValidator from "./components/FormValidator.js";
import PopupWithImage from './components/PopUpWithImage.js'; 
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

// Instancia de la API
const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/web_es_11',
  headers: {
    authorization: '973de3af-50d3-4d36-a3b6-c4529a18880b', // Coloca tu token real aquí
    'Content-Type': 'application/json'
  }
});

// Popup para cambiar avatar
const changeAvatarPopup = new PopupWithForm('#popup-change-avatar', handleAvatarSubmit);
const avatarEditIcon = document.querySelector('.profile__avatar-edit-icon');

avatarEditIcon.addEventListener('click', () => {
  changeAvatarPopup.open(); // Abre el popup
});

// Cargar el perfil del usuario y las tarjetas al cargar la página
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const userData = await api.getUserProfile(); // Cargar el perfil del usuario
    profileName.textContent = userData.name; // Actualiza el nombre del perfil
    profileAbout.textContent = userData.about; // Actualiza la descripción del perfil
    document.querySelector('.profile__avatar').src = userData.avatar; // Actualiza la imagen de perfil

    const cards = await api.getInitialCards(); // Cargar las tarjetas desde el servidor
    renderizarCards(cards, userData._id); // Renderizamos todas las tarjetas

    // Habilitar la validación de formularios
    const settings = {
      formSelector: '.popup__container', // Selector del formulario
      inputSelector: '.popup__input', // Selector de los campos de entrada
      submitButtonSelector: '.popup__submit', // Selector del botón de envío
      inactiveButtonClass: 'popup__submit_inactive', // Clase para desactivar el botón de envío
      inputErrorClass: 'popup__input_type_error', // Clase para resaltar el campo de entrada con error
      errorClass: 'popup__input-error', // Clase para mostrar el mensaje de error
    };

    enableValidation(settings); // Llama a la función para habilitar la validación

  } catch (error) {
    console.error('Error al cargar el perfil o las tarjetas:', error);
  }
});

// --------------------------------------------

// Lógica para manejar el envío del formulario de añadir tarjeta
popupAddCard.addEventListener('submit', async function (event) {
  event.preventDefault(); // Evitar comportamiento predeterminado

  const title = inputCardName.value.trim(); // Obtener título de la tarjeta
  const imageUrl = inputCardLink.value.trim(); // Obtener URL de la imagen

  if (!title || !imageUrl) {
    console.error('El título y la URL de la imagen son obligatorios.');
    return;
  }

  try {
    const newCard = await api.addCard(title, imageUrl); // Llamamos a la función para enviar la tarjeta al servidor
    const card = new Card(newCard, '#mi-template', cardArea, handleCardClick, userData._id, someEventToOpenPopup, api);
    cardArea.append(card.createCard()); // Añadir la tarjeta al contenedor

    // Limpiar los campos del formulario
    popupAddCard.reset();

    // Cerrar el popup de añadir tarjeta
    addCardPopupToggle();
  } catch (err) {
    console.error(`Error al añadir la tarjeta: ${err}`);
  }
});

// --------------------------------------------
function renderizarCards(cardsArray, userId) {
  cardsArray.forEach(cardData => {
    const card = new Card(cardData, '#mi-template', cardArea, handleCardClick, userId, someEventToOpenPopup, api);
    cardArea.append(card.createCard()); // Añadir la tarjeta al contenedor
  });
}

// Selecciona el formulario de perfil
const profileForm = document.querySelector('#popup-edit-profile form');

// Función para actualizar la UI del perfil
const updateProfileUI = (name, about) => {
  profileName.textContent = name;
  profileAbout.textContent = about;
};

// Manejar el evento de envío del formulario de edición de perfil
profileForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameInput = inputName.value; // Obtener el nombre del input
  const aboutInput = inputDescription.value; // Obtener la descripción del input
  
  const submitButton = event.target.querySelector('.popup__submit');
  submitButton.textContent = 'Guardando...';
  submitButton.disabled = true;

  try {
    const data = await api.updateUserProfile(nameInput, aboutInput); // Llamar a la función para actualizar el perfil en el servidor
    updateProfileUI(data.name, data.about); // Actualizar la UI con los datos nuevos
    popupToggle(); // Cerrar popup
  } catch (err) {
    console.error('Error actualizando el perfil:', err);
  } finally {
    // Restaurar el texto del botón y habilitarlo de nuevo
    submitButton.textContent = 'Guardar'; 
    submitButton.disabled = false;
  }
});

// Función para manejar clic en la imagen de la tarjeta (abrir popup de imagen)
const imagePopup = new PopupWithImage('.popup__image');
function handleCardClick(link, name) {
  // const imagePopup = new PopupWithImage('.popup__image');
  imagePopup.open(link, name); // Abre el popup con la imagen
}

// Inicializar el popup de confirmación
const confirmationPopup = new PopupWithConfirmation('#popup-confirmation', handleCardDelete);

// Manejar la eliminación de la tarjeta
function handleCardDelete(cardId, removeCardCallback = null) {
  api.deleteCard(cardId)
    .then(() => {
      if (removeCardCallback) {
        removeCardCallback(); // Si existe un callback, remueve la tarjeta con la callback
      } else {
        const cardElement = document.querySelector(`.cards__card[data-id='${cardId}']`);
        if (cardElement) {
          cardElement.remove(); // Remueve la tarjeta si no hay callback
        }
      }
      confirmationPopup.close(); // Cerrar popup
    })
    .catch(err => console.error('Error al eliminar la tarjeta:', err));
}


// Función para abrir el popup de confirmación
function someEventToOpenPopup(cardId) {
  confirmationPopup.setCardId(cardId); // Establecer el ID de la tarjeta que se desea eliminar
  confirmationPopup.open(); // Abrir el popup de confirmación
}

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

// Llamada para habilitar la validación con los selectores y clases específicas
enableValidation({
  formSelector: '.popup__container', // Selector del formulario
  inputSelector: '.popup__input', // Selector de los campos de entrada
  submitButtonSelector: '.popup__submit', // Selector del botón de envío
  inactiveButtonClass: 'popup__submit_inactive', // Clase para desactivar el botón de envío
  inputErrorClass: 'popup__input_type_error', // Clase para resaltar el campo de entrada con error
  errorClass: 'popup__input-error', // Clase para mostrar el mensaje de error
});

// Listeners para abrir y cerrar popups
closeButton.addEventListener('click', popupToggle);
editButton.addEventListener('click', popupToggle);
submitButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputDescription.value;
  popupToggle();
});

// Función que se llama al enviar el formulario para cambiar el avatar
async function handleAvatarSubmit(formData) {
  const avatarUrl = formData['avatar-url']; // Obt
}