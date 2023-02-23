import { useDispatch, useSelector } from "react-redux"
import { fetchExampleTasks, selectLoading } from "../../tasks/tasksSlice";
import { Button, Wrapper } from "../Buttons/styled"

const ExampleTask = () => {
  const dispatch = useDispatch();
  const Loading = useSelector(selectLoading);

  return (
    <Wrapper>
      <Button
        onClick={() => dispatch(fetchExampleTasks())} disabled={Loading}
      >
        {Loading
          ? "Ładowanie"
          : "Pobierz przykładowe zadania"
        }

      </Button>
    </Wrapper>
  )
}

export default ExampleTask;