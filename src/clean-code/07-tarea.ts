(()=>{

  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = 'input'|'select'|'textarea'|'radio';

  class HtmlElement {
      constructor(
          public id: string,
          public type: HtmlType,
      ) {}
  }

  class InputAttributes {
      constructor(
          public placeholder: string,
          public value: string,
      ) {}
  }

  class InputEvents {
      constructor() {}
      getValue() {};
      isActive() {};
      removeValue() {};
      setFocus() {};
  }

  class InputElement {
    public attributes: InputAttributes;
    public element: HtmlElement;
    public events: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
        this.attributes = new InputAttributes(placeholder, value);
        this.element = new HtmlElement(id, 'input');
        this.events = new InputEvents();
    }
  }

  const nameField = new InputElement('Jesus', 'Enter your name', 'txtName');

  console.log({ nameField });

})()