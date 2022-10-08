(() => {


  // Resolver sin la triple condicional dentro del if
  // includes? arrays?
  function isRedFruit( fruit: string ): boolean {
    const redFruits = ['manzana', 'cereza', 'ciruela', 'fresa', 'frambuesa', 'guayaba', 'sandía'];
    return redFruits.includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores
  type FruitColor = 'red' | 'yellow' | 'purple';
  function getFruitsByColor( color: FruitColor ): string[] {

    const fruitsByColor = {
      red: ['manzana', 'cereza', 'ciruela', 'fresa', 'frambuesa', 'guayaba', 'sandía'],
      yellow: ['banana', 'limón', 'mango', 'naranja', 'piña', 'platano'],
      purple: ['arándano', 'uva']
    }

    if ( !Object.keys(fruitsByColor).includes(color) ) 
      throw Error('the color must be: red, yellow, purple');
    
    return fruitsByColor[color];

    // if ( color === 'red' ) return ['manzana','fresa'];
    // if ( color === 'yellow') return ['piña','banana'];
    // if ( color === 'purple' ) return ['moras','uvas'];

    // throw Error('the color must be: red, yellow, purple');
  }

  // Simplificar esta función
  let isFirstStepWorking  = true;
  let isSecondStepWorking = true;
  let isThirdStepWorking  = true;
  let isFourthStepWorking = true;

  function workingSteps() {
    if ( !isFirstStepWorking ) return 'First step broken.';
    if ( !isSecondStepWorking ) return 'Second step broken.';
    if ( !isThirdStepWorking ) return 'Third step broken.';
    if ( !isFourthStepWorking ) return 'Fourth step broken.';

    return 'All steps working.';
  }


  // isRedFruit
  console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
  console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
  //console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();
