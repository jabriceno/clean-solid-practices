type Size = '' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      //console.log(`${key} ${this[key]}`, typeof this[key] );
      switch (typeof this[key]) {
        case 'string':
          if ( (<string>this[key]).length === 0 ) throw Error(`${ key } is empty`);
          break;
        case 'number':
          if ( (<number>this[key]) <= 0 ) throw Error(`${ key } is zero`);
          break;
        default:
          throw Error(`${ key } is not supooorted`);
          break;
      }
      // if (this.hasOwnProperty(key)) {
      //   console.log(`${key}: ${this[key]}`);
      // }
    }
    return true;
  }

  toString() {
    if (!this.isProductReady()) return;

    return `${ this.name } (${ this.price }$), ${ this.size }`;
  }
}

(() => {
  const bluePants = new Product('Blue Pants', 10, '');
  console.log(bluePants.toString());
})();
