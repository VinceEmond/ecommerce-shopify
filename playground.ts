interface Person {
  name: string
}

interface Student extends Person {
  age: number
}

interface PostGraduateStudent extends Person {
  age: number
  projects: string[]
}

// interface StudentInfo<T extends Student = Student> {
//   data: T
//   grades: number[]
// }

type StudentInfo<T extends Student = Student> = {
  data: T
  grades: number[]
}

export default function play() {

  function logStudentInfo(info: StudentInfo) {
    console.log(info.data.name)
    console.log(info.data.age)
  }

  const info = {
    data: {
      name: "Vince",
      age: 65
    },
      grades: [12,32,43]
    }
    logStudentInfo(info)
}


