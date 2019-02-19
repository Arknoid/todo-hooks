import React from "react";
import PropTypes from "prop-types";

import Task from "./Task";

const Tasks = ({ list, ...props }) => (
  <ul id="tasks">
    {list.map(task => (
      <Task key={task.id} {...task} {...props} />
    ))}
  </ul>
);

Tasks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
/**
 * Export
 */
export default Tasks;