
interface Person {
  name: string
}

type CustomArray<T> = {
  [index: number]: T
}

type CustomObject<T = string | number | Person> = {
  [key: string]: string
}



export default function play() {
  const person: CustomObject = {
    age: '23',
    name: 'Vince',
    city: "sdfsdfs"
  }
}


