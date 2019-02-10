import React from "react";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegStar as StarEmpty } from "react-icons/fa";
import { FaStar as Star } from "react-icons/fa";
import styled from "styled-components";

const Li = styled.li`
  list-style: none;
  font-size: 1.2em;
  background-color: ${props => (props.done ? "#eee" : "#fff")};
  margin: 0.3em 0 0.3em 0.5em;
  border: 1px solid #ccc;
  border-radius: 0.4em;
  padding: 1em;
  text-decoration: ${props => (props.done ? "line-through" : "none")};
  opacity: ${props => (props.done ? 0.5 : 1)};
  .label {
    margin-left: 0.5em;
  }
  .fav {
    background-color: #fffdd0;
    border-color: #fffdd0;
  }
  .trash,
  .fav {
    float: right;
    cursor: pointer;
  }
`;

const Task = ({
  id,
  label,
  done,
  fav,
  onTaskCheck,
  onTaskDelete,
  onTaskFav
}) => {
  const Favorite = fav ? Star : StarEmpty;

  return (
    <Li done={done}>
      <input type="checkbox" checked={done} onChange={onTaskCheck(id)} />
      <span className="label">{label}</span>
      <FaTrashAlt className="trash" onClick={onTaskDelete(id)} />
      <Favorite className="fav" onClick={onTaskFav(id)} />
    </Li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  fav: PropTypes.bool.isRequired,
  onTaskCheck: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskFav: PropTypes.func.isRequired
};
/**
 * Export
 */
export default Task;
