
interface Person {
  name: string
}


export default function play() {

  function logger(...args: any[]) {
    return "hello world"
  }

  const newLogger: typeof logger = (name: string, age: number) => 'Hey guys'

  newLogger("", 20)

}


