interface Person {
  name: string
  age: number
}

interface BusinessPerson extends Person {
  salary: number
}

interface AcademicPerson extends Person{
  publications: string[]
}

export default function play() {

  const acaperson: AcademicPerson = {
    name: 'Filip',
    age: 30,
    publications:["yo", "sup"]
  }

  const busperson: BusinessPerson = {
    name: 'BusinessDude',
    age: 69,
    salary: 420
  }

  function logPerson(person: Person) {
    console.log(person)
  }

  logPerson(acaperson)
  logPerson(busperson)


}


