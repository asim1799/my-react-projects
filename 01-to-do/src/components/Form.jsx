import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  gap: 25px;
  align-items: center;
  margin: 10px;
  input {
    color: gainsboro;
    height: 30px;
    background-color: #026914;
    border: 1px solid #0c874f;
    border-radius: 10px;
    padding: 0 15px;
    box-shadow: 2px 2px 8px 2px #212e21;
  }
  input::placeholder {
    color: gainsboro;
  }
  button {
    font-weight: 800;
    width: 60px;
    height: 60px;
    border: 5px solid #dbcc34;
    border-radius: 50%;
    color: dimgray;
    background-color: #beb514;
    text-transform: uppercase;
    box-shadow: 4px 1px 15px 3px #887f24;
  }
  input:focus {
    outline: none;
  }
`;
function Form({ activities, setActivities }) {
  const [newActivity, setNewActivity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setActivities([
      ...activities,
      { id: activities.length, name: newActivity },
    ]);
    setNewActivity("");
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        value={newActivity}
        onChange={(e) => setNewActivity(e.target.value)}
        placeholder="Input your activity..."
      />
      <button>add</button>
    </StyledForm>
  );
}

export default Form;
