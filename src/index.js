import "./components/index.css";
import Section from "./components/Section.js";
import Card from "./components/Card.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithForm from "./components/PopUpWithForms.js";
import UserInfo from "./components/UserInfo.js";
import FormValidator from "./components/FormValidator.js";
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
} from "./utils.js";

// // Instancia de PopupWithImage
// const popupWithImage = new PopupWithImage("#popup-image");

// // Función para manejar el clic en la tarjeta
// const handleCardClick = (imageSrc, imageAlt) => {
//   popupWithImage.open(imageSrc, imageAlt);
// };

// // Crear una instancia de Section con las tarjetas iniciales
// const section = new Section(
//   {
//     items: initialCards,
//     renderer: createCard,
//   },
//   ".cards"
// );

// // Renderizar todas las tarjetas iniciales
// section.renderItems();

// // Configurar los event listeners para los popups
// popupAddCardInstance.setEventListeners();
// popupEditProfile.setEventListeners();
// popupWithImage.setEventListeners();

// // Configurar eventos para los botones
// closeButton.addEventListener("click", () => popupEditProfile.close());
// editButton.addEventListener("click", () => {
//   const userData = userInfo.getUserInfo();
//   inputName.value = userData.name;
//   inputDescription.value = userData.about;
//   popupEditProfile.open();
// });
// submitButton.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   userInfo.setUserInfo({
//     name: inputName.value,
//     about: inputDescription.value,
//   });
//   popupEditProfile.close();
// });

// // Función para manejar el envío del formulario de añadir tarjeta
// const handleAddCardSubmit = (data) => {
//   const card = new Card(
//     data["title"],
//     data["image-url"],
//     "#mi-template",
//     cardArea,
//     handleCardClick
//   );
//   card.render();
// };

// // Función para manejar el envío del formulario de edición de perfil
// const handleProfileEditSubmit = (data) => {
//   userInfo.setUserInfo(data);
// };

// // Habilitar la validación de formularios
// const enableValidation = (settings) => {
//   const formList = Array.from(document.querySelectorAll(settings.formSelector));
//   formList.forEach((formElement) => {
//     const formValidator = new FormValidator(settings, formElement);
//     formValidator.enableValidation();
//   });
// };

// // Llamada para habilitar la validación con los selectores y clases específicas
// enableValidation({
//   formSelector: ".popup__container",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__submit",
//   inactiveButtonClass: "popup__submit_inactive",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__input-error",
// });


// fetch("https://around.nomoreparties.co/v1/web_es_11/cards", {
//   headers: {
//     authorization: "973de3af-50d3-4d36-a3b6-c4529a18880b"
//     // https://around.nomoreparties.co/v1/groupId/users/me
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
//   });


// import Card from "./Card.js";
// import {
//   initialCards,
//   template,
//   cardArea,
//   openCards,
//   closeEscape,
//   dblclickClose,
//   dblclickClosed,
//   popupAddCard,
//   inputCardLink,
//   inputCardName,
//   addCardPopupToggle,
//   popupToggle,
//   closeButton,
//   editButton,
//   submitButton,
//   profileName,
//   profileAbout,
//   inputName,
//   inputDescription,
// } from "./utils.js";
// import FormValidator from "./FormValidator.js";

// Inicializar las tarjetas
initialCards.forEach((cardData) => {
  const card = new Card(cardData.name, cardData.link, "#mi-template", cardArea);
  card.render();
});

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
