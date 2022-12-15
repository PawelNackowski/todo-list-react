import "./style.css";

const Tasks = (props) => (
  <ul className="task">
    {props.tasks.map(task => (
      <li key={task.id}
        className={`task__item ${task.done && props.hideDone ? "task__item--hiden" : ""}`}
      >
         <button className="task__button task__button--toggleDone">
      {task.done ? " ✔" : ""}
      </button>
     <span className={`task${task.done ? " task__content--done" : ""}`}>
       {task.content}
     </span>
     <button className="task__button task__button--remove">
       🗑   
     </button>
      </li>
    ))}
  </ul>
);

export default Tasks;