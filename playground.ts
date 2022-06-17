interface Person {
  kind: "business" | "academic" | "otherType"
  name: string
  age: number
}

interface businessPerson extends Person {
  kind: "business"
  salary: number
}

interface academicPerson extends Person {
  kind: 'academic'
  publications: string[]
}

interface Person {
  prop1: string
  prop2: number
}


export default function play() {
  
  function iterate(items: string[]) {
    items.forEach((item)=> {
      console.log(item.toUpperCase());
    })
  }
  
  iterate(["Sup", "dawg", "cat"]);


}


