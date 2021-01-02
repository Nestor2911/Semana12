
  function Modal(options) {
    this.element = document.querySelector(options.element);
    this.elementClose = this.element.querySelector('.js_close');
    this.elementAccept = this.element.querySelector('.js_accept');
    this.elementCancel = this.element.querySelector('.js_cancel');

    this.registerEvens(options)
  }

  Modal.prototype.open = function () {
    this.element.classList.add('is-active')
  }
  Modal.prototype.close = function () {
    this.element.classList.remove('is-active')
  }

  Modal.prototype.registerEvens = function (options) {
    this.elementClose.onclick = () => {
      this.close()
    }
    this.elementAccept.onclick = () => {
      this.close()
     // alert("Mensaje Aceptado");

    }
    this.elementCancel.onclick = () => {
      this.close()
    }
  }
  const modal1 = new Modal({
    element: '.js_modal',
    cbAccept: function () {
      console.log('ACEPTAR')
    },
    cbCancel: function () {
      console.log('CANCELAR')
    }

  })

  const button = document.querySelector('button');

  button.onclick = function () {
    modal1.open()
  }