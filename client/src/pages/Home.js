import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  
  useEffect(() => {
    const fetchWorkouts =  () => {
      axios.get("http://localhost:3001/api/workouts/").then((response) => {
        dispatch({ type: "SET_WORKOUTS", payload: response.data });
      });
    };
    fetchWorkouts();
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          {workouts &&
            workouts.map((workout) => (
              <div>
                <WorkoutDetails
                  key={workout._id}
                  workout={workout}
                ></WorkoutDetails>
              </div>
            ))}
        </Col>
        <Col>
          <WorkoutForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
