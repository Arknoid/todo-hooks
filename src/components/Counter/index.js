import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CounterDiv = styled.div`
  font-weight: 700;
  color: white;
  font-size: 1.5em;
  padding: 0.5em 0;
  margin-top: 2em;
  border-bottom: 1px solid white;
`;

const Counter = ({ count }) => {
  let message;
  switch (count) {
    case 0:
      message = 'Aucune tâche';
      break;
    case 1:
      message = `${count} tâche en cours`;
      break;
    default:
      message = `${count} tâches en cours`;
  }

  return <CounterDiv>{message}</CounterDiv>;
};

Counter.propTypes = {
  count: PropTypes.number.isRequired
};

/**
 * Export
 */
export default Counter;
