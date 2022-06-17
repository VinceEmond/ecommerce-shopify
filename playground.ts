interface Person {
  kind: "business" | "academic" | "otherType"
  name: string
  age: number
}

interface Person {
  prop1: string
  prop2: number
}

type Noop = () => any
type Noop2 = () => void

export default function play() {

  function fn1(x: Noop): void {
    x()
  }
  
  function fn2(x: Noop2): void {
    x()
  }

}


