/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Card; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Card.js
var Card = /*#__PURE__*/function () {
  // Nueva propiedad

  function Card(name, link, templateSelector, cardArea, handleCardClick) {
    _classCallCheck(this, Card);
    _defineProperty(this, "_name", void 0);
    _defineProperty(this, "_link", void 0);
    _defineProperty(this, "_templateSelector", void 0);
    _defineProperty(this, "_cardArea", void 0);
    _defineProperty(this, "_handleCardClick", void 0);
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._cardArea = cardArea;
    this._handleCardClick = handleCardClick; // Almacena el callback
  }
  return _createClass(Card, [{
    key: "_createCards",
    value: function _createCards() {
      var _this = this;
      var template = document.querySelector(this._templateSelector);
      var cardElement = template.content.querySelector(".cards__card").cloneNode(true);
      var cardImage = cardElement.querySelector(".cards__image");
      var cardTitle = cardElement.querySelector(".cards__title");
      var likeHeart = cardElement.querySelector(".cards__like-icon");
      var buttonDelete = cardElement.querySelector(".cards__delete-icon");

      // Configurar el comportamiento del botón de like
      likeHeart.addEventListener("click", function () {
        likeHeart.classList.toggle("cards__like-color");
      });

      // Configurar el comportamiento del botón de eliminar
      buttonDelete.addEventListener("click", function () {
        cardElement.remove();
      });

      // Configurar el comportamiento de la imagen de la tarjeta
      cardImage.addEventListener("click", function () {
        _this._handleCardClick(_this._link, _this._name); // Llama al callback
      });

      // Configurar los valores de la tarjeta
      cardImage.src = this._link;
      cardImage.alt = this._name;
      cardTitle.textContent = this._name;
      return cardElement;
    }
  }, {
    key: "render",
    value: function render() {
      var cardElement = this._createCards();
      this._cardArea.append(cardElement);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidator; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);
    this._settings = settings;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._submitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
  }
  return _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.add(this._settings.inputErrorClass);
      errorElement.textContent = errorMessage;
      this._toggleSubmitButtonState();
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._settings.inputErrorClass);
      errorElement.textContent = "";
      this._toggleSubmitButtonState();
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }
    }
  }, {
    key: "_toggleSubmitButtonState",
    value: function _toggleSubmitButtonState() {
      var hasInvalidInput = this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
      if (hasInvalidInput) {
        this._submitButton.classList.add(this._settings.inactiveButtonClass);
        this._submitButton.setAttribute("disabled", true);
      } else {
        this._submitButton.classList.remove(this._settings.inactiveButtonClass);
        this._submitButton.removeAttribute("disabled");
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkInputValidity(inputElement);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._formElement.addEventListener("submit", function (evt) {
        evt.preventDefault();
      });
      this._setEventListeners();
      this._toggleSubmitButtonState();
    }
  }]);
}();


/***/ }),

/***/ "./src/components/PopUp.js":
/*!*********************************!*\
  !*** ./src/components/PopUp.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this); // Asegura el contexto correcto
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  // Abre el popup
  return _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add('popup__opened');
      this.setEventListeners();
    }

    // Cierra el popup
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('popup__opened');
      this.removeEventListeners();
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "_handleOverlayClose",
    value: function _handleOverlayClose(evt) {
      if (evt.target === this._popupElement) {
        this.close();
      }
    }

    // Añade los event listeners necesarios
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      // Añade el event listener para el botón de cierre
      this._popupElement.querySelector('.popup__close').addEventListener('click', function () {
        return _this.close();
      });
      // Añade el event listener para el clic en el área sombreada
      this._popupElement.addEventListener('click', this._handleOverlayClose);
      // Añade el event listener para la tecla Escape
      document.addEventListener('keydown', this._handleEscClose);
    }

    // Elimina los event listeners para evitar fugas de memoria
  }, {
    key: "removeEventListeners",
    value: function removeEventListeners() {
      var _this2 = this;
      this._popupElement.querySelector('.popup__close').removeEventListener('click', function () {
        return _this2.close();
      });
      this._popupElement.removeEventListener('click', this._handleOverlayClose);
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/PopUpWithForms.js":
/*!******************************************!*\
  !*** ./src/components/PopUpWithForms.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithForm; }
/* harmony export */ });
/* harmony import */ var _PopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopUp.js */ "./src/components/PopUp.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _callSuper(this, PopupWithForm, [popupSelector]);
    _this._handleFormSubmit = handleFormSubmit;
    _this._form = _this._popupElement.querySelector("form");
    _this._inputList = _this._form.querySelectorAll("input");
    return _this;
  }
  _inherits(PopupWithForm, _Popup);
  return _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var formValues = {};
      this._inputList.forEach(function (input) {
        formValues[input.name] = input.value;
      });
      return formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _superPropGet(PopupWithForm, "setEventListeners", this, 3)([]);
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this2._handleFormSubmit(_this2._getInputValues());
        _this2.close();
      });
    }
  }, {
    key: "close",
    value: function close() {
      _superPropGet(PopupWithForm, "close", this, 3)([]);
      this._form.reset();
    }
  }]);
}(_PopUp_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopupWithImage; }
/* harmony export */ });
/* harmony import */ var _PopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PopUp.js */ "./src/components/PopUp.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _callSuper(this, PopupWithImage, [popupSelector]);
    _this._image = _this._popup.querySelector(".popup__image");
    _this._caption = _this._popup.querySelector(".popup__caption");
    return _this;
  }
  _inherits(PopupWithImage, _Popup);
  return _createClass(PopupWithImage, [{
    key: "open",
    value: function open(imageSrc, imageAlt) {
      this._image.src = imageSrc;
      this._image.alt = imageAlt;
      this._caption.textContent = imageAlt; // O cualquier otra lógica para la leyenda
      _superPropGet(PopupWithImage, "open", this, 3)([]); // Llama al método open de Popup para mostrar el popup
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _superPropGet(PopupWithImage, "setEventListeners", this, 3)([]); // Configura los event listeners del Popup
      this._popup.querySelector(".popup__close").addEventListener("click", function () {
        return _this2.close();
      });
    }
  }]);
}(_PopUp_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Section; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var items = _ref.items,
      renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._items = items; // Array de datos
    this._renderer = renderer; // Función para renderizar los datos
    this._container = document.querySelector(containerSelector); // Contenedor de los elementos
  }

  // Método para renderizar todos los elementos en el contenedor
  return _createClass(Section, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;
      this._items.forEach(function (item) {
        _this._renderer(item); // Llama a la función renderer para cada elemento
      });
    }

    // Método para agregar un elemento al contenedor
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.append(element); // Agrega el nuevo elemento al contenedor
    }
  }]);
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ UserInfo; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// UserInfo.js
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      aboutSelector = _ref.aboutSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  // Devuelve un objeto con la información del usuario
  return _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._nameElement.textContent,
        about: this._aboutElement.textContent
      };
    }

    // Establece la información del usuario en la página
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about;
      this._nameElement.textContent = name;
      this._aboutElement.textContent = about;
    }
  }]);
}();


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addCardPopupToggle: function() { return /* binding */ addCardPopupToggle; },
/* harmony export */   cardArea: function() { return /* binding */ cardArea; },
/* harmony export */   closeAddCardButton: function() { return /* binding */ closeAddCardButton; },
/* harmony export */   closeButton: function() { return /* binding */ closeButton; },
/* harmony export */   closeEscape: function() { return /* binding */ closeEscape; },
/* harmony export */   dblclickClose: function() { return /* binding */ dblclickClose; },
/* harmony export */   dblclickClosed: function() { return /* binding */ dblclickClosed; },
/* harmony export */   editButton: function() { return /* binding */ editButton; },
/* harmony export */   editProfile: function() { return /* binding */ editProfile; },
/* harmony export */   initialCards: function() { return /* binding */ initialCards; },
/* harmony export */   inputCardLink: function() { return /* binding */ inputCardLink; },
/* harmony export */   inputCardName: function() { return /* binding */ inputCardName; },
/* harmony export */   inputDescription: function() { return /* binding */ inputDescription; },
/* harmony export */   inputName: function() { return /* binding */ inputName; },
/* harmony export */   main: function() { return /* binding */ main; },
/* harmony export */   openCardForm: function() { return /* binding */ openCardForm; },
/* harmony export */   openCards: function() { return /* binding */ openCards; },
/* harmony export */   popupAddCard: function() { return /* binding */ popupAddCard; },
/* harmony export */   popupImageTag: function() { return /* binding */ popupImageTag; },
/* harmony export */   popupToggle: function() { return /* binding */ popupToggle; },
/* harmony export */   profileAbout: function() { return /* binding */ profileAbout; },
/* harmony export */   profileName: function() { return /* binding */ profileName; },
/* harmony export */   submitButton: function() { return /* binding */ submitButton; },
/* harmony export */   template: function() { return /* binding */ template; }
/* harmony export */ });
var initialCards = [{
  name: "Valle de Yosemite",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg"
}, {
  name: "Lago Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg"
}, {
  name: "Montañas Calvas",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg"
}, {
  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg"
}, {
  name: "Parque Nacional de la Vanoise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg"
}, {
  name: "Lago di Braies",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg"
}];
var main = document.querySelector("#main");
var editButton = main.querySelector(".profile__edit-button");
var editProfile = main.querySelector(".popup");
var popupAddCard = document.querySelector("#popup-card-form");
var closeButton = editProfile.querySelector(".popup__close");
var profileName = main.querySelector(".profile__name");
var openCardForm = document.querySelector(".profile__add-button");
var profileAbout = main.querySelector(".profile__about");
var inputName = editProfile.querySelector(".popup__input-name");
var inputDescription = editProfile.querySelector(".popup__input-about");
var submitButton = editProfile.querySelector(".popup__submit");
var template = document.getElementById("mi-template");
var cardArea = document.querySelector(".cards");
var popupImageTag = document.querySelector(".popup__image");
var inputCardName = popupAddCard.querySelector(".popup__newplaces-input-name");
var inputCardLink = popupAddCard.querySelector(".popup__newplaces-input-about");
var closeAddCardButton = popupAddCard.querySelector(".popup__close");
function popupToggle() {
  editProfile.classList.toggle("popup__opened");
}
function addCardPopupToggle() {
  popupAddCard.classList.toggle("popup__opened");
}
function openCards() {
  openCardForm.addEventListener("click", addCardPopupToggle);
  closeAddCardButton.addEventListener("click", addCardPopupToggle);
}
function closeEscape() {
  document.addEventListener("keydown", function (evt) {
    if (evt.key === "Escape") {
      if (editProfile.classList.contains("popup__opened")) {
        popupToggle();
      } else if (popupAddCard.classList.contains("popup__opened")) {
        addCardPopupToggle();
      } else if (document.querySelector(".popup__image").parentElement.classList.contains("popup__opened")) {
        document.querySelector(".popup__image").parentElement.classList.remove("popup__opened"); // Cierra el popup de imagen
      }
    }
  });
}
function dblclickClose() {
  editProfile.addEventListener("click", function (evt) {
    if (evt.target.className === "popup popup__opened") {
      editProfile.classList.remove("popup__opened");
    }
  });
}
function dblclickClosed() {
  popupAddCard.addEventListener("click", function (evt) {
    if (evt.target.className === "popup popup__opened") {
      popupAddCard.classList.remove("popup__opened");
    }
  });
}

/***/ }),

/***/ "./src/components/index.css":
/*!**********************************!*\
  !*** ./src/components/index.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.css */ "./src/components/index.css");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopUpWithForms_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/PopUpWithForms.js */ "./src/components/PopUpWithForms.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");









// Instancia de PopupWithImage
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_3__["default"]("#popup-image");

// Función para manejar el clic en la tarjeta
var handleCardClick = function handleCardClick(imageSrc, imageAlt) {
  popupWithImage.open(imageSrc, imageAlt);
};

// Crear una instancia de Section con las tarjetas iniciales
var section = new _components_Section_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
  items: _utils_js__WEBPACK_IMPORTED_MODULE_7__.initialCards,
  renderer: createCard
}, ".cards");

// Renderizar todas las tarjetas iniciales
section.renderItems();

// Configurar los event listeners para los popups
popupAddCardInstance.setEventListeners();
popupEditProfile.setEventListeners();
popupWithImage.setEventListeners();

// Configurar eventos para los botones
_utils_js__WEBPACK_IMPORTED_MODULE_7__.closeButton.addEventListener("click", function () {
  return popupEditProfile.close();
});
_utils_js__WEBPACK_IMPORTED_MODULE_7__.editButton.addEventListener("click", function () {
  var userData = userInfo.getUserInfo();
  _utils_js__WEBPACK_IMPORTED_MODULE_7__.inputName.value = userData.name;
  _utils_js__WEBPACK_IMPORTED_MODULE_7__.inputDescription.value = userData.about;
  popupEditProfile.open();
});
_utils_js__WEBPACK_IMPORTED_MODULE_7__.submitButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  userInfo.setUserInfo({
    name: _utils_js__WEBPACK_IMPORTED_MODULE_7__.inputName.value,
    about: _utils_js__WEBPACK_IMPORTED_MODULE_7__.inputDescription.value
  });
  popupEditProfile.close();
});

// Función para manejar el envío del formulario de añadir tarjeta
var handleAddCardSubmit = function handleAddCardSubmit(data) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"](data["title"], data["image-url"], "#mi-template", _utils_js__WEBPACK_IMPORTED_MODULE_7__.cardArea, handleCardClick);
  card.render();
};

// Función para manejar el envío del formulario de edición de perfil
var handleProfileEditSubmit = function handleProfileEditSubmit(data) {
  userInfo.setUserInfo(data);
};

// Habilitar la validación de formularios
var enableValidation = function enableValidation(settings) {
  var formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach(function (formElement) {
    var formValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_6__["default"](settings, formElement);
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
  errorClass: "popup__input-error"
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsU0FBMUJBLHVCQUF1QkEsQ0FBSUYsSUFBSSxFQUFLO0VBQ3hDRixRQUFRLENBQUNsQyxXQUFXLENBQUNvQyxJQUFJLENBQUM7QUFDNUIsQ0FBQzs7QUFFRDtBQUNBLElBQU16RixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFJaEMsUUFBUSxFQUFLO0VBQ3JDLElBQU00SCxRQUFRLEdBQUd2SCxLQUFLLENBQUNDLElBQUksQ0FBQzFCLFFBQVEsQ0FBQzJCLGdCQUFnQixDQUFDUCxRQUFRLENBQUM2SCxZQUFZLENBQUMsQ0FBQztFQUM3RUQsUUFBUSxDQUFDN0YsT0FBTyxDQUFDLFVBQUM5QixXQUFXLEVBQUs7SUFDaEMsSUFBTTZILGFBQWEsR0FBRyxJQUFJL0gsb0VBQWEsQ0FBQ0MsUUFBUSxFQUFFQyxXQUFXLENBQUM7SUFDOUQ2SCxhQUFhLENBQUM5RixnQkFBZ0IsQ0FBQyxDQUFDO0VBQ2xDLENBQUMsQ0FBQztBQUNKLENBQUM7O0FBRUQ7QUFDQUEsZ0JBQWdCLENBQUM7RUFDZjZGLFlBQVksRUFBRSxtQkFBbUI7RUFDakNySCxhQUFhLEVBQUUsZUFBZTtFQUM5QkUsb0JBQW9CLEVBQUUsZ0JBQWdCO0VBQ3RDaUIsbUJBQW1CLEVBQUUsd0JBQXdCO0VBQzdDVCxlQUFlLEVBQUUseUJBQXlCO0VBQzFDNkcsVUFBVSxFQUFFO0FBQ2QsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9DYXJkLmpzIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wVXAuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wVXBXaXRoRm9ybXMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly93ZWJfcHJvamVjdF9hcm91bmQvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguY3NzPzU1NTQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYl9wcm9qZWN0X2Fyb3VuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ViX3Byb2plY3RfYXJvdW5kLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIENhcmQuanNcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgX25hbWU7XHJcbiAgX2xpbms7XHJcbiAgX3RlbXBsYXRlU2VsZWN0b3I7XHJcbiAgX2NhcmRBcmVhO1xyXG4gIF9oYW5kbGVDYXJkQ2xpY2s7IC8vIE51ZXZhIHByb3BpZWRhZFxyXG5cclxuICBjb25zdHJ1Y3RvcihuYW1lLCBsaW5rLCB0ZW1wbGF0ZVNlbGVjdG9yLCBjYXJkQXJlYSwgaGFuZGxlQ2FyZENsaWNrKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBsaW5rO1xyXG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRlbXBsYXRlU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9jYXJkQXJlYSA9IGNhcmRBcmVhO1xyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrOyAvLyBBbG1hY2VuYSBlbCBjYWxsYmFja1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZUNhcmRzKCkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IpO1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2NhcmRcIikuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgY29uc3QgY2FyZEltYWdlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19faW1hZ2VcIik7XHJcbiAgICBjb25zdCBjYXJkVGl0bGUgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX190aXRsZVwiKTtcclxuICAgIGNvbnN0IGxpa2VIZWFydCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpa2UtaWNvblwiKTtcclxuICAgIGNvbnN0IGJ1dHRvbkRlbGV0ZSA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2RlbGV0ZS1pY29uXCIpO1xyXG5cclxuICAgIC8vIENvbmZpZ3VyYXIgZWwgY29tcG9ydGFtaWVudG8gZGVsIGJvdMOzbiBkZSBsaWtlXHJcbiAgICBsaWtlSGVhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgbGlrZUhlYXJ0LmNsYXNzTGlzdC50b2dnbGUoXCJjYXJkc19fbGlrZS1jb2xvclwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENvbmZpZ3VyYXIgZWwgY29tcG9ydGFtaWVudG8gZGVsIGJvdMOzbiBkZSBlbGltaW5hclxyXG4gICAgYnV0dG9uRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGNhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29uZmlndXJhciBlbCBjb21wb3J0YW1pZW50byBkZSBsYSBpbWFnZW4gZGUgbGEgdGFyamV0YVxyXG4gICAgY2FyZEltYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl9saW5rLCB0aGlzLl9uYW1lKTsgLy8gTGxhbWEgYWwgY2FsbGJhY2tcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENvbmZpZ3VyYXIgbG9zIHZhbG9yZXMgZGUgbGEgdGFyamV0YVxyXG4gICAgY2FyZEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XHJcbiAgICBjYXJkSW1hZ2UuYWx0ID0gdGhpcy5fbmFtZTtcclxuICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuX25hbWU7XHJcblxyXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSB0aGlzLl9jcmVhdGVDYXJkcygpO1xyXG4gICAgdGhpcy5fY2FyZEFyZWEuYXBwZW5kKGNhcmRFbGVtZW50KTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcclxuICAgICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX3NldHRpbmdzLmlucHV0U2VsZWN0b3IpKTtcclxuICAgICAgdGhpcy5fc3VibWl0QnV0dG9uID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9zZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuX3RvZ2dsZVN1Ym1pdEJ1dHRvblN0YXRlKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fc2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzKTtcclxuICAgICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgdGhpcy5fdG9nZ2xlU3VibWl0QnV0dG9uU3RhdGUoKTtcclxuICAgIH1cclxuICBcclxuICAgIF9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIF90b2dnbGVTdWJtaXRCdXR0b25TdGF0ZSgpIHtcclxuICAgICAgY29uc3QgaGFzSW52YWxpZElucHV0ID0gdGhpcy5faW5wdXRMaXN0LnNvbWUoaW5wdXRFbGVtZW50ID0+ICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpO1xyXG4gICAgICBpZiAoaGFzSW52YWxpZElucHV0KSB7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5fc2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX3NldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dEVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gIFxyXG4gICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgICB0aGlzLl90b2dnbGVTdWJtaXRCdXR0b25TdGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTsgLy8gQXNlZ3VyYSBlbCBjb250ZXh0byBjb3JyZWN0b1xyXG4gICAgICB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UgPSB0aGlzLl9oYW5kbGVPdmVybGF5Q2xvc2UuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIEFicmUgZWwgcG9wdXBcclxuICAgIG9wZW4oKSB7XHJcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwb3B1cF9fb3BlbmVkJyk7XHJcbiAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTsgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBDaWVycmEgZWwgcG9wdXBcclxuICAgIGNsb3NlKCkge1xyXG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfX29wZW5lZCcpO1xyXG4gICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXJzKCk7IFxyXG4gICAgfVxyXG4gIFxyXG4gICBcclxuICAgIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgIFxyXG4gICAgX2hhbmRsZU92ZXJsYXlDbG9zZShldnQpIHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IHRoaXMuX3BvcHVwRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gQcOxYWRlIGxvcyBldmVudCBsaXN0ZW5lcnMgbmVjZXNhcmlvc1xyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgIC8vIEHDsWFkZSBlbCBldmVudCBsaXN0ZW5lciBwYXJhIGVsIGJvdMOzbiBkZSBjaWVycmVcclxuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuY2xvc2UoKSk7XHJcbiAgICAgIC8vIEHDsWFkZSBlbCBldmVudCBsaXN0ZW5lciBwYXJhIGVsIGNsaWMgZW4gZWwgw6FyZWEgc29tYnJlYWRhXHJcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2hhbmRsZU92ZXJsYXlDbG9zZSk7XHJcbiAgICAgIC8vIEHDsWFkZSBlbCBldmVudCBsaXN0ZW5lciBwYXJhIGxhIHRlY2xhIEVzY2FwZVxyXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRWxpbWluYSBsb3MgZXZlbnQgbGlzdGVuZXJzIHBhcmEgZXZpdGFyIGZ1Z2FzIGRlIG1lbW9yaWFcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZScpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICAgICAgdGhpcy5fcG9wdXBFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5faGFuZGxlT3ZlcmxheUNsb3NlKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiXHJcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3BVcC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IHRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbChcImlucHV0XCIpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgY29uc3QgZm9ybVZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGZvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGZvcm1WYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3BVcC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fY2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2NhcHRpb25cIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKGltYWdlU3JjLCBpbWFnZUFsdCkge1xyXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gaW1hZ2VTcmM7XHJcbiAgICB0aGlzLl9pbWFnZS5hbHQgPSBpbWFnZUFsdDtcclxuICAgIHRoaXMuX2NhcHRpb24udGV4dENvbnRlbnQgPSBpbWFnZUFsdDsgLy8gTyBjdWFscXVpZXIgb3RyYSBsw7NnaWNhIHBhcmEgbGEgbGV5ZW5kYVxyXG4gICAgc3VwZXIub3BlbigpOyAvLyBMbGFtYSBhbCBtw6l0b2RvIG9wZW4gZGUgUG9wdXAgcGFyYSBtb3N0cmFyIGVsIHBvcHVwXHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7IC8vIENvbmZpZ3VyYSBsb3MgZXZlbnQgbGlzdGVuZXJzIGRlbCBQb3B1cFxyXG4gICAgdGhpcy5fcG9wdXBcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpXHJcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZSgpKTtcclxuICB9XHJcbn1cclxuIiwiXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xyXG4gICAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgICAgdGhpcy5faXRlbXMgPSBpdGVtczsgLy8gQXJyYXkgZGUgZGF0b3NcclxuICAgICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjsgLy8gRnVuY2nDs24gcGFyYSByZW5kZXJpemFyIGxvcyBkYXRvc1xyXG4gICAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTsgLy8gQ29udGVuZWRvciBkZSBsb3MgZWxlbWVudG9zXHJcbiAgICB9XHJcbiAgXHJcbiAgICAvLyBNw6l0b2RvIHBhcmEgcmVuZGVyaXphciB0b2RvcyBsb3MgZWxlbWVudG9zIGVuIGVsIGNvbnRlbmVkb3JcclxuICAgIHJlbmRlckl0ZW1zKCkge1xyXG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyKGl0ZW0pOyAvLyBMbGFtYSBhIGxhIGZ1bmNpw7NuIHJlbmRlcmVyIHBhcmEgY2FkYSBlbGVtZW50b1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIE3DqXRvZG8gcGFyYSBhZ3JlZ2FyIHVuIGVsZW1lbnRvIGFsIGNvbnRlbmVkb3JcclxuICAgIGFkZEl0ZW0oZWxlbWVudCkge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIuYXBwZW5kKGVsZW1lbnQpOyAvLyBBZ3JlZ2EgZWwgbnVldm8gZWxlbWVudG8gYWwgY29udGVuZWRvclxyXG4gICAgfVxyXG4gIH1cclxuICAiLCIvLyBVc2VySW5mby5qc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7IG5hbWVTZWxlY3RvciwgYWJvdXRTZWxlY3RvciB9KSB7XHJcbiAgICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xyXG4gICAgICB0aGlzLl9hYm91dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFib3V0U2VsZWN0b3IpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLy8gRGV2dWVsdmUgdW4gb2JqZXRvIGNvbiBsYSBpbmZvcm1hY2nDs24gZGVsIHVzdWFyaW9cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWU6IHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50LFxyXG4gICAgICAgIGFib3V0OiB0aGlzLl9hYm91dEVsZW1lbnQudGV4dENvbnRlbnRcclxuICAgICAgfTtcclxuICAgIH1cclxuICBcclxuICAgIC8vIEVzdGFibGVjZSBsYSBpbmZvcm1hY2nDs24gZGVsIHVzdWFyaW8gZW4gbGEgcMOhZ2luYVxyXG4gICAgc2V0VXNlckluZm8oeyBuYW1lLCBhYm91dCB9KSB7XHJcbiAgICAgIHRoaXMuX25hbWVFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgICAgdGhpcy5fYWJvdXRFbGVtZW50LnRleHRDb250ZW50ID0gYWJvdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICIsImV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJWYWxsZSBkZSBZb3NlbWl0ZVwiLFxyXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL25ldy1tYXJrZXRzL1dFQl9zcHJpbnRfNS9FUy95b3NlbWl0ZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBMb3Vpc2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFrZS1sb3Vpc2UuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk1vbnRhw7FhcyBDYWx2YXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvYmFsZC1tb3VudGFpbnMuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhdGVtYXJcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGF0ZW1hci5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUGFycXVlIE5hY2lvbmFsIGRlIGxhIFZhbm9pc2VcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvdmFub2lzZS5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiTGFnbyBkaSBCcmFpZXNcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9uZXctbWFya2V0cy9XRUJfc3ByaW50XzUvRVMvbGFnby5qcGdcIixcclxuICB9LFxyXG5dO1xyXG5leHBvcnQgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcclxuZXhwb3J0IGNvbnN0IGVkaXRCdXR0b24gPSBtYWluLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBlZGl0UHJvZmlsZSA9IG1haW4ucXVlcnlTZWxlY3RvcihcIi5wb3B1cFwiKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwQWRkQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcG9wdXAtY2FyZC1mb3JtXCIpO1xyXG5leHBvcnQgY29uc3QgY2xvc2VCdXR0b24gPSBlZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19jbG9zZVwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVOYW1lID0gbWFpbi5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX25hbWVcIik7XHJcbmV4cG9ydCBjb25zdCBvcGVuQ2FyZEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlQWJvdXQgPSBtYWluLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWJvdXRcIik7XHJcbmV4cG9ydCBjb25zdCBpbnB1dE5hbWUgPSBlZGl0UHJvZmlsZS5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbnB1dC1uYW1lXCIpO1xyXG5leHBvcnQgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIucG9wdXBfX2lucHV0LWFib3V0XCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGVkaXRQcm9maWxlLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3N1Ym1pdFwiKTtcclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaS10ZW1wbGF0ZVwiKTtcclxuZXhwb3J0IGNvbnN0IGNhcmRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKTtcclxuZXhwb3J0IGNvbnN0IHBvcHVwSW1hZ2VUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0Q2FyZE5hbWUgPSBwb3B1cEFkZENhcmQucXVlcnlTZWxlY3RvcihcclxuICBcIi5wb3B1cF9fbmV3cGxhY2VzLWlucHV0LW5hbWVcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgaW5wdXRDYXJkTGluayA9IHBvcHVwQWRkQ2FyZC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLnBvcHVwX19uZXdwbGFjZXMtaW5wdXQtYWJvdXRcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgY2xvc2VBZGRDYXJkQnV0dG9uID0gcG9wdXBBZGRDYXJkLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2Nsb3NlXCIpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVwVG9nZ2xlKCkge1xyXG4gIGVkaXRQcm9maWxlLmNsYXNzTGlzdC50b2dnbGUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJkUG9wdXBUb2dnbGUoKSB7XHJcbiAgcG9wdXBBZGRDYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkNhcmRzKCkge1xyXG4gIG9wZW5DYXJkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkQ2FyZFBvcHVwVG9nZ2xlKTtcclxuICBjbG9zZUFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZENhcmRQb3B1cFRvZ2dsZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUVzY2FwZSgpIHtcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZ0KSA9PiB7XHJcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICBpZiAoZWRpdFByb2ZpbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicG9wdXBfX29wZW5lZFwiKSkge1xyXG4gICAgICAgIHBvcHVwVG9nZ2xlKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9wdXBBZGRDYXJkLmNsYXNzTGlzdC5jb250YWlucyhcInBvcHVwX19vcGVuZWRcIikpIHtcclxuICAgICAgICBhZGRDYXJkUG9wdXBUb2dnbGUoKTtcclxuICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpXHJcbiAgICAgICAgICAucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwb3B1cF9fb3BlbmVkXCIpXHJcbiAgICAgICkge1xyXG4gICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2VcIilcclxuICAgICAgICAgIC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fb3BlbmVkXCIpOyAvLyBDaWVycmEgZWwgcG9wdXAgZGUgaW1hZ2VuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRibGNsaWNrQ2xvc2UoKSB7XHJcbiAgZWRpdFByb2ZpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwb3B1cCBwb3B1cF9fb3BlbmVkXCIpIHtcclxuICAgICAgZWRpdFByb2ZpbGUuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX19vcGVuZWRcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYmxjbGlja0Nsb3NlZCgpIHtcclxuICBwb3B1cEFkZENhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcclxuICAgIGlmIChldnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwb3B1cCBwb3B1cF9fb3BlbmVkXCIpIHtcclxuICAgICAgcG9wdXBBZGRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoXCJwb3B1cF9fb3BlbmVkXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9pbmRleC5jc3NcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL2NvbXBvbmVudHMvQ2FyZC5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi9jb21wb25lbnRzL1BvcFVwV2l0aEZvcm1zLmpzXCI7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tIFwiLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XHJcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qc1wiO1xyXG5pbXBvcnQge1xyXG4gIGluaXRpYWxDYXJkcyxcclxuICB0ZW1wbGF0ZSxcclxuICBjYXJkQXJlYSxcclxuICBwb3B1cEFkZENhcmQsXHJcbiAgaW5wdXRDYXJkTGluayxcclxuICBpbnB1dENhcmROYW1lLFxyXG4gIGNsb3NlQnV0dG9uLFxyXG4gIGVkaXRCdXR0b24sXHJcbiAgc3VibWl0QnV0dG9uLFxyXG4gIHByb2ZpbGVOYW1lLFxyXG4gIHByb2ZpbGVBYm91dCxcclxuICBpbnB1dE5hbWUsXHJcbiAgaW5wdXREZXNjcmlwdGlvbixcclxufSBmcm9tIFwiLi91dGlscy5qc1wiO1xyXG5cclxuLy8gSW5zdGFuY2lhIGRlIFBvcHVwV2l0aEltYWdlXHJcbmNvbnN0IHBvcHVwV2l0aEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKFwiI3BvcHVwLWltYWdlXCIpO1xyXG5cclxuLy8gRnVuY2nDs24gcGFyYSBtYW5lamFyIGVsIGNsaWMgZW4gbGEgdGFyamV0YVxyXG5jb25zdCBoYW5kbGVDYXJkQ2xpY2sgPSAoaW1hZ2VTcmMsIGltYWdlQWx0KSA9PiB7XHJcbiAgcG9wdXBXaXRoSW1hZ2Uub3BlbihpbWFnZVNyYywgaW1hZ2VBbHQpO1xyXG59O1xyXG5cclxuLy8gQ3JlYXIgdW5hIGluc3RhbmNpYSBkZSBTZWN0aW9uIGNvbiBsYXMgdGFyamV0YXMgaW5pY2lhbGVzXHJcbmNvbnN0IHNlY3Rpb24gPSBuZXcgU2VjdGlvbihcclxuICB7XHJcbiAgICBpdGVtczogaW5pdGlhbENhcmRzLFxyXG4gICAgcmVuZGVyZXI6IGNyZWF0ZUNhcmQsXHJcbiAgfSxcclxuICBcIi5jYXJkc1wiXHJcbik7XHJcblxyXG4vLyBSZW5kZXJpemFyIHRvZGFzIGxhcyB0YXJqZXRhcyBpbmljaWFsZXNcclxuc2VjdGlvbi5yZW5kZXJJdGVtcygpO1xyXG5cclxuLy8gQ29uZmlndXJhciBsb3MgZXZlbnQgbGlzdGVuZXJzIHBhcmEgbG9zIHBvcHVwc1xyXG5wb3B1cEFkZENhcmRJbnN0YW5jZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5wb3B1cEVkaXRQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcbnBvcHVwV2l0aEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyBDb25maWd1cmFyIGV2ZW50b3MgcGFyYSBsb3MgYm90b25lc1xyXG5jbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gcG9wdXBFZGl0UHJvZmlsZS5jbG9zZSgpKTtcclxuZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dE5hbWUudmFsdWUgPSB1c2VyRGF0YS5uYW1lO1xyXG4gIGlucHV0RGVzY3JpcHRpb24udmFsdWUgPSB1c2VyRGF0YS5hYm91dDtcclxuICBwb3B1cEVkaXRQcm9maWxlLm9wZW4oKTtcclxufSk7XHJcbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2dCkge1xyXG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKHtcclxuICAgIG5hbWU6IGlucHV0TmFtZS52YWx1ZSxcclxuICAgIGFib3V0OiBpbnB1dERlc2NyaXB0aW9uLnZhbHVlLFxyXG4gIH0pO1xyXG4gIHBvcHVwRWRpdFByb2ZpbGUuY2xvc2UoKTtcclxufSk7XHJcblxyXG4vLyBGdW5jacOzbiBwYXJhIG1hbmVqYXIgZWwgZW52w61vIGRlbCBmb3JtdWxhcmlvIGRlIGHDsWFkaXIgdGFyamV0YVxyXG5jb25zdCBoYW5kbGVBZGRDYXJkU3VibWl0ID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICBkYXRhW1widGl0bGVcIl0sXHJcbiAgICBkYXRhW1wiaW1hZ2UtdXJsXCJdLFxyXG4gICAgXCIjbWktdGVtcGxhdGVcIixcclxuICAgIGNhcmRBcmVhLFxyXG4gICAgaGFuZGxlQ2FyZENsaWNrXHJcbiAgKTtcclxuICBjYXJkLnJlbmRlcigpO1xyXG59O1xyXG5cclxuLy8gRnVuY2nDs24gcGFyYSBtYW5lamFyIGVsIGVudsOtbyBkZWwgZm9ybXVsYXJpbyBkZSBlZGljacOzbiBkZSBwZXJmaWxcclxuY29uc3QgaGFuZGxlUHJvZmlsZUVkaXRTdWJtaXQgPSAoZGF0YSkgPT4ge1xyXG4gIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xyXG59O1xyXG5cclxuLy8gSGFiaWxpdGFyIGxhIHZhbGlkYWNpw7NuIGRlIGZvcm11bGFyaW9zXHJcbmNvbnN0IGVuYWJsZVZhbGlkYXRpb24gPSAoc2V0dGluZ3MpID0+IHtcclxuICBjb25zdCBmb3JtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZXR0aW5ncy5mb3JtU2VsZWN0b3IpKTtcclxuICBmb3JtTGlzdC5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCk7XHJcbiAgICBmb3JtVmFsaWRhdG9yLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuICB9KTtcclxufTtcclxuXHJcbi8vIExsYW1hZGEgcGFyYSBoYWJpbGl0YXIgbGEgdmFsaWRhY2nDs24gY29uIGxvcyBzZWxlY3RvcmVzIHkgY2xhc2VzIGVzcGVjw61maWNhc1xyXG5lbmFibGVWYWxpZGF0aW9uKHtcclxuICBmb3JtU2VsZWN0b3I6IFwiLnBvcHVwX19jb250YWluZXJcIixcclxuICBpbnB1dFNlbGVjdG9yOiBcIi5wb3B1cF9faW5wdXRcIixcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogXCIucG9wdXBfX3N1Ym1pdFwiLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6IFwicG9wdXBfX3N1Ym1pdF9pbmFjdGl2ZVwiLFxyXG4gIGlucHV0RXJyb3JDbGFzczogXCJwb3B1cF9faW5wdXRfdHlwZV9lcnJvclwiLFxyXG4gIGVycm9yQ2xhc3M6IFwicG9wdXBfX2lucHV0LWVycm9yXCIsXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQ2FyZCIsIm5hbWUiLCJsaW5rIiwidGVtcGxhdGVTZWxlY3RvciIsImNhcmRBcmVhIiwiaGFuZGxlQ2FyZENsaWNrIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnR5IiwiX25hbWUiLCJfbGluayIsIl90ZW1wbGF0ZVNlbGVjdG9yIiwiX2NhcmRBcmVhIiwiX2hhbmRsZUNhcmRDbGljayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX2NyZWF0ZUNhcmRzIiwiX3RoaXMiLCJ0ZW1wbGF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmRJbWFnZSIsImNhcmRUaXRsZSIsImxpa2VIZWFydCIsImJ1dHRvbkRlbGV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsInJlbmRlciIsImFwcGVuZCIsImRlZmF1bHQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9zZXR0aW5ncyIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dExpc3QiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b24iLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9zaG93SW5wdXRFcnJvciIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImNvbmNhdCIsImlkIiwiYWRkIiwiaW5wdXRFcnJvckNsYXNzIiwiX3RvZ2dsZVN1Ym1pdEJ1dHRvblN0YXRlIiwiX2hpZGVJbnB1dEVycm9yIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImhhc0ludmFsaWRJbnB1dCIsInNvbWUiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImVuYWJsZVZhbGlkYXRpb24iLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwiX2hhbmRsZU92ZXJsYXlDbG9zZSIsIm9wZW4iLCJzZXRFdmVudExpc3RlbmVycyIsImNsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJ0YXJnZXQiLCJfdGhpczIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiUG9wdXBXaXRoRm9ybSIsIl9Qb3B1cCIsImhhbmRsZUZvcm1TdWJtaXQiLCJfY2FsbFN1cGVyIiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfZm9ybSIsIl9pbmhlcml0cyIsIl9nZXRJbnB1dFZhbHVlcyIsImZvcm1WYWx1ZXMiLCJpbnB1dCIsIl9zdXBlclByb3BHZXQiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiX3BvcHVwIiwiX2NhcHRpb24iLCJpbWFnZVNyYyIsImltYWdlQWx0IiwiU2VjdGlvbiIsIl9yZWYiLCJjb250YWluZXJTZWxlY3RvciIsIml0ZW1zIiwicmVuZGVyZXIiLCJfaXRlbXMiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwicmVuZGVySXRlbXMiLCJpdGVtIiwiYWRkSXRlbSIsImVsZW1lbnQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImFib3V0U2VsZWN0b3IiLCJfbmFtZUVsZW1lbnQiLCJfYWJvdXRFbGVtZW50IiwiZ2V0VXNlckluZm8iLCJhYm91dCIsInNldFVzZXJJbmZvIiwiX3JlZjIiLCJpbml0aWFsQ2FyZHMiLCJtYWluIiwiZWRpdEJ1dHRvbiIsImVkaXRQcm9maWxlIiwicG9wdXBBZGRDYXJkIiwiY2xvc2VCdXR0b24iLCJwcm9maWxlTmFtZSIsIm9wZW5DYXJkRm9ybSIsInByb2ZpbGVBYm91dCIsImlucHV0TmFtZSIsImlucHV0RGVzY3JpcHRpb24iLCJzdWJtaXRCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInBvcHVwSW1hZ2VUYWciLCJpbnB1dENhcmROYW1lIiwiaW5wdXRDYXJkTGluayIsImNsb3NlQWRkQ2FyZEJ1dHRvbiIsInBvcHVwVG9nZ2xlIiwiYWRkQ2FyZFBvcHVwVG9nZ2xlIiwib3BlbkNhcmRzIiwiY2xvc2VFc2NhcGUiLCJjb250YWlucyIsInBhcmVudEVsZW1lbnQiLCJkYmxjbGlja0Nsb3NlIiwiY2xhc3NOYW1lIiwiZGJsY2xpY2tDbG9zZWQiLCJwb3B1cFdpdGhJbWFnZSIsInNlY3Rpb24iLCJjcmVhdGVDYXJkIiwicG9wdXBBZGRDYXJkSW5zdGFuY2UiLCJwb3B1cEVkaXRQcm9maWxlIiwidXNlckRhdGEiLCJ1c2VySW5mbyIsImhhbmRsZUFkZENhcmRTdWJtaXQiLCJkYXRhIiwiY2FyZCIsImhhbmRsZVByb2ZpbGVFZGl0U3VibWl0IiwiZm9ybUxpc3QiLCJmb3JtU2VsZWN0b3IiLCJmb3JtVmFsaWRhdG9yIiwiZXJyb3JDbGFzcyJdLCJzb3VyY2VSb290IjoiIn0=