import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react"
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button } from "./styled";
import { addTasks } from "../tasksSlice";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

const dispatch = useDispatch();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(addTasks({
      content: newTaskContent.trim(),
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    focusInput(inputRef);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        autoFocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button className="form__button">Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;