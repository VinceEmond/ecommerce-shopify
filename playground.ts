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

type Car = {
  name: string
}

type RaceCar = Car &{
  speed: number
} 

export default function play() {
   const car: RaceCar = {
    name: 'My car',
    speed: 100
   }

   function logCar(car: RaceCar){
    console.log(car.speed)
   }

   logCar(car)
}


