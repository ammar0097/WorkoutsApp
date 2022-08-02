import Button from "react-bootstrap/Button";
import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { AiFillDelete } from "react-icons/ai";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  const clickHandler = () => {
    axios
      .delete("http://localhost:3001/api/workouts/" + workout._id)
      .then((response) => {
        dispatch({ type: "DELETE_WORKOUT", payload: response.data });
      })
      .catch();
  };
  return (
    <Container>
      <Card style={{ marginTop: "30px" }} key={workout.key}>
        <Card.Body>
          <div>
            <Card.Title style={{ marginBottom: "15px", color: "#00ADB5" }}>
              {workout.title}
            </Card.Title>
            <p>Load(kg) : {workout.load}</p>
            <p>Reps : {workout.reps}</p>
            <p>
              {formatDistanceToNow(new Date(workout.createdAt), {
                addSuffix: true,
              })}
            </p>
          </div>
          <div>
            <Button variant="warning" type="submit" onClick={clickHandler}>
              <AiFillDelete /> delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WorkoutDetails;
