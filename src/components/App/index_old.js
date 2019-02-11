import React from "react";

import Form from "../Form";
import Counter from "../Counter";
import Tasks from "../Tasks";
import styled, { createGlobalStyle } from "styled-components";
// data
import initialTasks from "../../data/tasks";

/*
* Styles
*/
const GlobalStyle = createGlobalStyle`
  body{
    background-color: #2e5849
  }
`;

const AppDiv = styled.div`
  width: 500px;
  margin: 2em auto;
`;

/**
 * Code
 */
class App extends React.Component {
  /**
   * State
   */
  state = {
    tasks: initialTasks,
    input: ""
  };

  /**
   * Actions
   */
  addTask = () => {
    const { tasks, input } = this.state;
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
    const newTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: newTasks,
      input: ""
    });
  };

  deleteTask = id => () => {
    const { tasks } = this.state;

    const newTasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks: newTasks
    });
  };

  changeInputValue = value => {
    this.setState({
      input: value
    });
  };

  checkTask = id => () => {
    this.toggleTaskProp(id, "done");
  };

  favTask = id => () => {
    this.toggleTaskProp(id, "fav");
  };

  toggleTaskProp = (id, prop) => {
    const { tasks } = this.state;

    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          [prop]: !task[prop]
        };
      }
      return task;
    });

    this.setState({
      tasks: newTasks
    });
  };

  render() {
    const { tasks, input } = this.state;
    const tasksUndone = tasks.filter(task => !task.done).length;

    const filteredTasks = [
      ...tasks.filter(task => !task.done && task.fav),
      ...tasks.filter(task => !task.done && !task.fav),
      ...tasks.filter(task => task.done)
    ];

    return (
      <AppDiv>
        <GlobalStyle />
        <Form
          onAddTask={this.addTask}
          inputValue={input}
          onInputChange={this.changeInputValue}
        />
        <Counter count={tasksUndone} />
        <Tasks
          list={filteredTasks}
          actions={{
            onTaskCheck: this.checkTask,
            onTaskFav: this.favTask,
            onTaskDelete: this.deleteTask
          }}
        />
      </AppDiv>
    );
  }
}

/**
 * Export
 */
export default App;
