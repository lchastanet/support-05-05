import { NavLink } from "react-router-dom"
export default function StudentCard({ student }) {
  return (
    <div>
      <p>{student.firstname}</p>
      <p>{student.lastname}</p>

      {/* lien vers details avec param id de l'étudiant */}
      <NavLink to={`/details/${student.ID}`}>
        Get Details for {student.firstname}
      </NavLink>
    </div>
  )
}
