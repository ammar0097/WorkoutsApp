import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

const WorkoutDetails = ({workout}) => {
  return (
    <Container>
      <Card style={{ marginTop: "30px" }} key={workout.key}>
        <Card.Body>
          <Card.Title style={{ marginBottom: "15px" , color:'#00ADB5'}}>
            {workout.title}
          </Card.Title>
          <p>Load(kg) : {workout.load}</p>
          <p>Reps : {workout.reps}</p>
          <p>{workout.createdAt}</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default WorkoutDetails;
