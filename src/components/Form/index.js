import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  background-color: #1c382f;
  border: 1px solid #183129;
  box-shadow: inset 0 0 25px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  color: #fff;
  padding: 0.8em 1.2em;
  width: 100%;
  height: 3em;
  font-size: 1.6em;
`;

class Form extends React.Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { onAddTask } = this.props;
    onAddTask();
  };

  handleChange = evt => {
    const { onInputChange } = this.props;
    const { value } = evt.target;
    onInputChange(value);
  };

  render() {
    const { inputValue } = this.props;

    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <Input
          type="text"
          id="todo-input"
          placeholder="Ajouter une tâche"
          onChange={this.handleChange}
          value={inputValue}
        />
      </form>
    );
  }
}

/**
 * Export
 */
export default Form;
