
import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const Tasks = ({ list, actions }) => (
  <ul id="tasks">
    {list.map(task => (
      <Task
        key={task.id}
        {...task}
        {...actions}
      />
    ))}
  </ul>
);

Tasks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  actions: PropTypes.objectOf(PropTypes.func.isRequired).isRequired,
};
/**
 * Export
 */
export default Tasks;
