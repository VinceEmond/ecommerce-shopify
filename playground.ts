interface Person {
  name: string
  age: number
}

class Logger<T> {
  log(items: Array<T>, callback: (item: T) => void) {
    items.forEach((item) => {
      callback(item)
    })
  }
}

export default function play() {

  const logger = new Logger<string>()
  const cars = ["ford", "honda", "subaru"]
  logger.log(cars,(car)=> {
    console.log(car)
  });

  const logger2 = new Logger<number>()
  const speeds = [45,25,62]
  logger2.log(speeds, (speed) => {
    console.log(speed)
  })

}


