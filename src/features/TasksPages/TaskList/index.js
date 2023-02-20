import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { List, Item, Content, Button } from "./styled";
import {toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery } from "../../tasks/tasksSlice";

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector(state => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hiden={task.done && hideDone}
        >
          <Button
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? " ✔" : ""}
          </Button>
          <Content done={task.done}>
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </Content>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </Item>
      ))}
    </List>
  )
};

export default TaskList;