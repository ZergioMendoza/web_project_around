// import Popup from './Popup.js';

// class PopupWithConfirmation extends Popup {
//   constructor(popupSelector) {
//     super(popupSelector);
//     this._confirmationButton = this._popup.querySelector('.popup__confirm');
//     this._cancelButton = this._popup.querySelector('.popup__cancel');
//     this._cardId = null;
//   }

//   open(cardId) {
//     super.open();
//     this._cardId = cardId;
//   }

//   setEventListeners() {
//     super.setEventListeners();
//     this._confirmationButton.addEventListener('click', () => {
//       this.deleteCard(this._cardId);
//     });
//     this._cancelButton.addEventListener('click', () => this.close());
//   }

//   deleteCard(cardId) {
//     fetch(`https://tu-api/cards/${cardId}`, {
//       method: 'DELETE',
//       // ... otros headers
//     })
//       .then(response => {
//         if (response.ok) {
//           // Eliminar la tarjeta de la interfaz de usuario
//           // ... (aquí encontrarías el elemento de la tarjeta y lo eliminarías)
//           this.close();
//         } else {
//           console.error('Error al eliminar la tarjeta:', response.statusText);
//           // Mostrar un mensaje de error al usuario
//         }
//       })
//       .catch(error => {
//         console.error('Error de red:', error);
//         // Mostrar un mensaje de error al usuario
//       });
//   }
// }