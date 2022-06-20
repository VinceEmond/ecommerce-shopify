
interface Person {
  name: string
  age: number
}

type Logger<
  P1 = string,
  P2 = number,
  RT = string
  > = (param1: P1, param2: P2) => RT

export default function play() {

// Uses custom values
const superLogger: Logger<string, number, string> = (name, age) => {
  return "Hello World!"
} 

// Uses the default values
const logger: Logger = (brand, age) => {
  return 'car'
}
  
}
 

