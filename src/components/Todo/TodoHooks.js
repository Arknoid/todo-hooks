import React, { useState, useEffect } from "react";
import Form from "../Form";
import Counter from "../Counter";
import Tasks from "../Tasks";
import styled, { createGlobalStyle } from "styled-components";
import axios from "axios";

/*
* Styles
*/
const GlobalStyle = createGlobalStyle`
  body{
    background-color: #2e5849
  }
`;

const AppWrapper = styled.div`
  width: 500px;
  margin: 2em auto;
`;

/**
 * Code
 */

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Equivalent to Component did mount
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_FUNCTIONS_BASE_URL + "/tasks")
      .then(response => {
        setTasks(response.data);
      });
  }, []);

  const addTask = () => {
    if (input.length < 1) {
      return;
    }
    const allIds = tasks.map(task => task.id);
    const currentId = allIds.length > 0 ? Math.max(...allIds) : 0;
    const nextId = currentId + 1;
    const newTask = {
      id: nextId,
      label: input,
      done: false,
      fav: false
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = id => () => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const toggleTaskProp = (id, prop) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          [prop]: !task[prop]
        };
      }
      return task;
    });
    setTasks(newTasks);
  };
  const changeInputValue = value => {
    setInput(value);
  };

  const checkTask = id => () => {
    toggleTaskProp(id, "done");
  };

  const favTask = id => () => {
    toggleTaskProp(id, "fav");
  };

  const tasksUndone = tasks.filter(task => !task.done).length;

  const filteredTasks = [
    ...tasks.filter(task => !task.done && task.fav),
    ...tasks.filter(task => !task.done && !task.fav),
    ...tasks.filter(task => task.done)
  ];

  return (
    <AppWrapper>
      <GlobalStyle />
      <Form
        onAddTask={addTask}
        inputValue={input}
        onInputChange={changeInputValue}
      />
      <Counter count={tasksUndone} />
      <Tasks
        list={filteredTasks}
        onTaskCheck={checkTask}
        onTaskFav={favTask}
        onTaskDelete={deleteTask}
      />
    </AppWrapper>
  );
};

/**
 * Export
 */
export default Todo;
