// Cria interface:
interface MyInterface {
  // Atributo myNumber do tipo number;
  myNumber: number,
  // Método muFunc recebe myParam do tipo number e retorna string.
  myFunc(myParam: number): string;
}

// Cria classe que implementa interface:
class MyClass implements MyInterface {
  // Inicia muNumber diretamente nos parâmetros do constructor:
  constructor(public myNumber: number) { } 

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

// cria um objeto da MyClass e utiliza com myNumber e myFunc:
const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));
