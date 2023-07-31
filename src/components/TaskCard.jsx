

const TaskCard = ({ title, description}) => {
  return (
    <li className="TaskCard card">
    <h3>{title}</h3>
    <h4>Description:</h4>
    <p>{description}</p>
  </li>
  )
}

export default TaskCard