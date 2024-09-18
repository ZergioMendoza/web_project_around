
export const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export const main = document.querySelector("#main");
export const editButton = main.querySelector(".profile__edit-button");
export const editProfile = main.querySelector(".popup");
export const popupAddCard = document.querySelector("#popup-card-form");
export const closeButton = editProfile.querySelector(".popup__close");
export const profileName = main.querySelector(".profile__name");
export const openCardForm = document.querySelector(".profile__add-button");
export const profileAbout = main.querySelector(".profile__about");
export const inputName = editProfile.querySelector(".popup__input-name");
export const inputDescription = editProfile.querySelector(
  ".popup__input-about"
);
export const submitButton = editProfile.querySelector(".popup__submit");
export const template = document.getElementById("mi-template");
export const cardArea = document.querySelector(".cards");
export const popupImageTag = document.querySelector(".popup__image");
export const inputCardName = popupAddCard.querySelector(
  ".popup__newplaces-input-name"
);
export const inputCardLink = popupAddCard.querySelector(
  ".popup__newplaces-input-about"
);
export const closeAddCardButton = popupAddCard.querySelector(".popup__close");

export function popupToggle() {
  editProfile.classList.toggle("popup__opened");
}
export function addCardPopupToggle() {
  popupAddCard.classList.toggle("popup__opened");
}

export function openCards() {
  openCardForm.addEventListener("click", addCardPopupToggle);
  closeAddCardButton.addEventListener("click", addCardPopupToggle);
}

export function closeEscape() {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape") {
      if (editProfile.classList.contains("popup__opened")) {
        popupToggle();
      } else if (popupAddCard.classList.contains("popup__opened")) {
        addCardPopupToggle();
      } else if (
        document
          .querySelector(".popup__image")
          .parentElement.classList.contains("popup__opened")
      ) {
        document
          .querySelector(".popup__image")
          .parentElement.classList.remove("popup__opened"); // Cierra el popup de imagen
      }
    }
  });
}

export function dblclickClose() {
  editProfile.addEventListener("click", (evt) => {
    if (evt.target.className === "popup popup__opened") {
      editProfile.classList.remove("popup__opened");
    }
  });
}

export function dblclickClosed() {
  popupAddCard.addEventListener("click", (evt) => {
    if (evt.target.className === "popup popup__opened") {
      popupAddCard.classList.remove("popup__opened");
    }
  });
}
