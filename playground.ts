
interface Person {
  name: string
}


type ReturnType<T> = T extends () => infer R ? R : unknown

export default function play() {

  function logger() {
    return "hello world"
  }

  const loggerReturn: ReturnType<typeof logger> = 'AnyString'

}


