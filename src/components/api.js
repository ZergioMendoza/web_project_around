import { Result } from "postcss";
import { cardArea, profileAbout, profileName } from "../utils";
import Card from "./Card.js"; 

export default class Api {} fetch ("https://around.nomoreparties.co/v1/web_es_11/cards", {
method: "GET",  
headers: {
    authorization: "973de3af-50d3-4d36-a3b6-c4529a18880b"
  }
})
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`); // Si hay error, lo rechazamos
    }
    return res.json(); // Convertimos la respuesta a JSON si es exitosa
  })
  .then((cards) => {
    // Iteramos sobre las tarjetas que devuelve la API
    cards.forEach((cardData) => {
      // Crear una nueva tarjeta usando la clase Card
      const card = new Card(cardData.name, cardData.link, "#mi-template", cardArea, () => {
        console.log("Tarjeta clickeada"); // Acción al hacer clic en la tarjeta
      });
      card.render(); // Renderizar la tarjeta
    });
  })
  .catch((err) => {
    // console.error(`Error al obtener las tarjetas: ${err}`); // Manejo de errores
  });
// -------------------------------
  
  // Función para obtener la información del usuario desde el servidor
export const fetchUserProfile = () => {
  return fetch("https://around.nomoreparties.co/v1/web_es_11/users/me", {
    headers: {
      authorization: "973de3af-50d3-4d36-a3b6-c4529a18880b", // tu token
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json(); // Convertimos la respuesta a JSON si es exitosa
    })
    .then((userData) => {
      // Usar la información del usuario para actualizar el perfil en la página
      document.querySelector('.profile__name').textContent = userData.name;
      document.querySelector('.profile__about').textContent = userData.about;
      document.querySelector('.profile__avatar').src = userData.avatar;
    })
    .catch((err) => {
      console.error(`Error al obtener la información del usuario: ${err}`);
    });
};

// Llamamos a la función para cargar los datos del usuario cuando cargue la página
fetchUserProfile();
// -------------------------------------

// Función para actualizar el perfil del usuario
export const updateUserProfile = (name, about) => {
  return fetch("https://around.nomoreparties.co/v1/web_es_11/users/me", {
    method: "PATCH",
    headers: {
      authorization: "973de3af-50d3-4d36-a3b6-c4529a18880b", // Token de autorización
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
};
// -----------------------------
// api.js

// Función para añadir una nueva tarjeta
export function addCardToServer(name, link) {
  return fetch('https://around.nomoreparties.co/v1/web_es_11/cards', {
    method: 'POST',
    headers: {
      authorization: '973de3af-50d3-4d36-a3b6-c4529a18880b', 
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,  // El nombre de la tarjeta
      link: link   // El enlace de la imagen
    })
  })
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json(); // Retorna la tarjeta recién creada en formato JSON
  });
}

// -----------------------------

// Asegúrate de que el token esté definido
const token = '973de3af-50d3-4d36-a3b6-c4529a18880b'; // Reemplaza esto con tu token real
const groupId = 'web_es_11'; // Asegúrate de reemplazar con tu ID de grupo

// Función para cargar las tarjetas desde el servidor
export const loadCards = () => {
  return fetch('https://around.nomoreparties.co/v1/web_es_11/cards', {
    headers: {
      authorization: '973de3af-50d3-4d36-a3b6-c4529a18880b' // Asegúrate de usar el token correcto
    }
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Error al cargar las tarjetas');
    }
    return res.json();
  })
  .then(data => {
    console.log(data); // Verificar si los datos están correctos
    return data;
  })
  .catch(err => {
    console.error('Error en la carga de tarjetas:', err);
  });
};

// Llama a la función para cargar las tarjetas cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  loadCards();
});


// -----------------------------
// punto 8 anadir y eliminar me gusta
export const addLike = (cardId) => {
  return fetch(`https://around.nomoreparties.co/v1/${groupId}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json(); // Retornamos el JSON actualizado
  });
};

// Función para quitar "me gusta" de una tarjeta
export const removeLike = (cardId) => {
  return fetch(`https://around.nomoreparties.co/v1/${groupId}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    }
  })
  .then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json(); // Retornamos el JSON actualizado
  });
};

// ___________________________
// editar imagen de perfil
// api.js

const BASE_URL = 'https://around.nomoreparties.co/v1/web_es_11'; // Asegúrate de que la URL base sea correcta

// Función para actualizar la imagen de perfil
export function updateUserAvatar(url) {
  return fetch(`${BASE_URL}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: '973de3af-50d3-4d36-a3b6-c4529a18880b', // Tu token
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ avatar: url }),
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.json();
  });
}
