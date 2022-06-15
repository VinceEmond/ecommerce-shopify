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

type Car = CityCar | RaceCar

export default function play() {

  const car: RaceCar = {
    name: "race car",
    maxSpeed: 200,
    team: "superteam"
  }

  function logCarInfo(car: Car){
    console.log(car.team)
    switch(car.maxSpeed){
      case 200:
        console.log(car.team)
        break;
      case 100:
        console.log(car.space)
        break;
      default:
        console.log(car)
    }
  }
}


