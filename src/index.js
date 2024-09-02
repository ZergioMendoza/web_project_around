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

// Instancia de PopupWithImage
const popupWithImage = new PopupWithImage("#popup-image");

// Función para manejar el clic en la tarjeta
const handleCardClick = (imageSrc, imageAlt) => {
  popupWithImage.open(imageSrc, imageAlt);
};

// Crear una instancia de Section con las tarjetas iniciales
const section = new Section(
  {
    items: initialCards,
    renderer: createCard,
  },
  ".cards"
);

// Renderizar todas las tarjetas iniciales
section.renderItems();

// Configurar los event listeners para los popups
popupAddCardInstance.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();

// Configurar eventos para los botones
closeButton.addEventListener("click", () => popupEditProfile.close());
editButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  inputName.value = userData.name;
  inputDescription.value = userData.about;
  popupEditProfile.open();
});
submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  userInfo.setUserInfo({
    name: inputName.value,
    about: inputDescription.value,
  });
  popupEditProfile.close();
});

// Función para manejar el envío del formulario de añadir tarjeta
const handleAddCardSubmit = (data) => {
  const card = new Card(
    data["title"],
    data["image-url"],
    "#mi-template",
    cardArea,
    handleCardClick
  );
  card.render();
};

// Función para manejar el envío del formulario de edición de perfil
const handleProfileEditSubmit = (data) => {
  userInfo.setUserInfo(data);
};

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
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error",
});
