interface Person {
  name: string
  age: number
  city: string
}

class Student implements Person {
  name = ""
  age = 0
  city = ""
}

class BusinessPerson implements Person {
  name = ""
  age = 0
  city = ""
  salary = 0
} 

interface Car {
  name: string
}


class Logger<T extends Person = Person> {
  log(items: Array<T>, callback: (item: T) => void) {
    items.forEach((item) => {
      callback(item)
    })
  }
}

export default function play() {

  const logger = new Logger<BusinessPerson>()
  const persons = [{name: "vince", age: 30, city: "", salary: 0}, {name:"joe", age: 69, city: "", salary: 0}]
  logger.log(persons,(person)=> {
    console.log(person);
  });
}

