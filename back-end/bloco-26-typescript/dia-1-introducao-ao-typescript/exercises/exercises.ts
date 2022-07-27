export function greeter(name: string) {
    return `Olá ${name}!`;
}

export function personAge(name: string, age: number) {
    return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
    return x + y;
}

export function sumArray(numbers: number[]): number {
    return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
    return (base * height) / 2;
}

export function square(side: number): number {
    return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function areaLosango(D: number, d: number): number {
  const area: number = (D * d) / 2;
  return area;
}

export function trapezio(h: number, B: number, b: number): number {
  const area: number = ((B + b) * h) / 2;
  return area;
}

export function circulo(r: number) : number {
  const area: number = (r * 3.14);
  return area;
}