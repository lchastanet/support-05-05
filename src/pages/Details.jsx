import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Details() {
  const { id } = useParams()
  const [student, setStudent] = useState("")
  //fetch les info d'un étudiant

  function getStudentDetails() {
    axios
      .get(`http://localhost:8000/students/${id}`)
      .then((response) => setStudent(response.data))
  }

  useEffect(() => getStudentDetails(), [])

  return (
    <div>
      <h5>
        {student.lastname} {student.firstname}
      </h5>
      <p>
        {student.age} {student.campus}
      </p>
      {student.remote ? <p>Remote</p> : <p>On campus</p>}
    </div>
  )
}
