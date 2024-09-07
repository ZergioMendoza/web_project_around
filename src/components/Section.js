
export default class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items; // Array de datos
      this._renderer = renderer; // Función para renderizar los datos
      this._container = document.querySelector(containerSelector); // Contenedor de los elementos
    }
  
    // Método para renderizar todos los elementos en el contenedor
    renderItems() {
      this._items.forEach(item => {
        this._renderer(item); // Llama a la función renderer para cada elemento
      });
    }
  
    // Método para agregar un elemento al contenedor
    addItem(element) {
      this._container.append(element); // Agrega el nuevo elemento al contenedor
    }
  }
  