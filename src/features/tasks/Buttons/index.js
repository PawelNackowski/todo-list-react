import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAlldone,
  selectHideDone,
  selectAreEpmtyTask,
  selectIsEveryTaskDone,
  fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const areTaskEmpty = useSelector(selectAreEpmtyTask);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(fetchExampleTasks())}
      >
        Pobierz przykładowe zadania
      </Button>
      {
        !areTaskEmpty && (
          <>
            <Button onClick={() => dispatch(toggleHideDone())}>
              {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
              onClick={() => dispatch(setAlldone())}
              disabled={isEveryTaskDone}
            >
              Ukończ wszystkie
            </Button>
          </>
        )
      }
    </Wrapper>
  );
}

export default Buttons;