import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      axios.get("http://localhost:3001/api/workouts/").then((response) => {
        setWorkouts(response.data);
      });
    };
    fetchWorkouts();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {workouts &&
            workouts.map((workout) => (
              <WorkoutDetails
                key={workout._id}
                workout={workout}
              ></WorkoutDetails>
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
