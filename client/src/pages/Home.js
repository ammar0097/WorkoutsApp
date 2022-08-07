import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("http://localhost:3001/api/workouts/", {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };
    if (user) {
      fetchWorkouts();
    }
  }, [dispatch,user]);

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
