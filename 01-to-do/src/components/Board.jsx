import { IoCloseCircle } from "react-icons/io5";
import styled from "styled-components";

const StyledBoard = styled.div`
  width: 600px;
  height: 350px;
  color: gainsboro;
  font-size: 24px;
  background-color: green;
  border: 3px solid #8bc34a;
  border-radius: 15px;
  box-shadow: 5px 5px 20px 3px #37813c;
  overflow: auto;
  ul {
    list-style: none;
  }
  li {
    position: relative;
    padding: 0 15px;
  }
  span:hover {
    color: #c6ad00;
  }
  svg {
    position: absolute;
    top: 0;
    right: 15px;
  }
  svg:hover {
    color: #ff4b4b;
    cursor: pointer;
  }
  hr {
    border: 1px solid #5a8d1f;
  }
`;
function Board({ activities, setActivities }) {
  function handleDone(e) {
    e.target.style.textDecorationLine = "line-through";
  }
  function handleDelete(id) {
    const updatedList = activities.filter((item) => item.id !== id);
    setActivities(updatedList);
  }
  return (
    <StyledBoard>
      <ul>
        {activities.map((activity, i) => (
          <li key={i}>
            <span onClick={handleDone}>{activity.name}</span>
            <IoCloseCircle
              onClick={() => handleDelete(activity.id)}
              role="button"
            />
            <hr />
          </li>
        ))}
      </ul>
    </StyledBoard>
  );
}

export default Board;
