

// interface Person {
//   name: string
//   age: number
// }

class Person {
  name: string
  age?: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

type PersonLoggerFn = (name: string, age?: number) => string

export default function play() {
  const name: string = "Vince"
  const age: number = 30
  const person = {
    name: 'John',
    age: 34
  } 

  const logPersonInfo: PersonLoggerFn = (
    personName: string, personAge: number = 0
  ): string => {
    const info = `Name: ${personName}, age: ${personAge}`
    console.log(info)
    return info
  }

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`
    console.log(info)
    return info
  }
  
  const log = logPersonInfo(name)

  const aPerson = new Person("Jimmy", 69)
  const john: Person = {
    name: "john"
  }

  // const log: string = logPersonInfo(name,age)
  logPersonInfo2(aPerson)
}


