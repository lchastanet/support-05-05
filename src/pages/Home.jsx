import { useState, useEffect } from "react"
import axios from "axios"
import StudentCard from "../components/StudentCard"

export default function Home() {
  const [studentList, setStudentList] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8000/students").then((response) => {
      setStudentList(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <div>
      <ul>
        {studentList.map((student) => (
          <StudentCard key={student.ID} student={student} />
        ))}
      </ul>
    </div>
  )
}
