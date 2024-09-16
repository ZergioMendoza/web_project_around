class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  // Obtener tarjetas
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch(err => console.log('Error al obtener tarjetas:', err));
  }

  // Obtener perfil del usuario
  getUserProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch(err => console.log('Error al obtener perfil:', err));
  }

  // Actualizar perfil del usuario
  updateUserProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    })
      .then(this._checkResponse)
      .catch(err => console.log('Error al actualizar perfil:', err));
  }

  // Añadir una nueva tarjeta
  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    })
      .then(this._checkResponse)
      .catch(err => console.log('Error al añadir tarjeta:', err));
  }

  // Añadir like
  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch(err => console.log('Error al añadir like:', err));
  }

  // Quitar like
  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(this._checkResponse)
      .catch(err => console.log('Error al quitar like:', err));
  }

  // Actualizar avatar del usuario
  updateUserAvatar(avatarUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    })
      .then(this._checkResponse)
      .catch(err => console.log('Error al actualizar avatar:', err));
  }
}

export default Api;
