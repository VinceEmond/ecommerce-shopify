interface Person {
  kind: "business" | "academic" | "otherType"
  name: string
  age: number
}

interface Person {
  prop1: string
  prop2: number
}

interface BusinessPerson extends Person {
  kind: "business"
  salary: number
}

interface AcademicPerson extends Person{
  kind: "academic"
  publications: string[]
}

type Human = BusinessPerson | AcademicPerson | {kind: 'otherType', special: string}

type RaceCar = {
  name: string
  maxSpeed: 200
  team: string
}
type CityCar = {
  name: string
  space: string
  maxSpeed: 100
}

type SUV = {
  name: string
  isCarbonFree: boolean
  maxSpeed: 50
}

type Car = CityCar | RaceCar | SUV

export default function play() {

  const car: RaceCar = {
    name: "race car",
    maxSpeed: 200,
    team: "superteam"
  }

  const person: Person = {
    prop1: "",
    prop2: 2,
    name: "",
    age: 23
  }

  function printInfo(someObject: {[key:string]: any}) {
    someObject.age.toUpperCase()
  }

  printInfo({
    age: 23,
    isMarried: false,
    name: "Filip"
  })


  function logPersonInfo(human: Human){
    if (human.kind === "academic"){
      console.log(human)
    } else if (human.kind === "business") {
      console.log(human)
    } else if (human.kind === "otherType") {
      console.log(human)
    } else {
      console.log(human)
    }
  }
  console.log((<RaceCar>car).team)


  function logCarInfo(car: Car){
    switch(car.maxSpeed){
      case 200:
        console.log(car.team)
        break;
      case 100:
        console.log(car.space)
        break;
      case 50:
        console.log(car.isCarbonFree)
        break;
      default:
        const _never: never = car
        return _never
    }
  }


}


