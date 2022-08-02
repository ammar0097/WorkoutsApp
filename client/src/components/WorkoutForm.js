import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { WorkoutsContext } from "../context/WorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext(WorkoutsContext);
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:3001/api/workouts/",
        { title: title, reps: reps, load: load },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setTitle("");
          setError(null);
          setReps("");
          setLoad("");
          dispatch({ type: "CREATE_WORKOUT", payload: response.data });
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setError(error.response.data.message);
        }
      });
  };

  return (
    <Form style={{ marginTop: "35px" }} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter workout title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Load (kg)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter workout load"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Reps</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter workout reps"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
      </Form.Group>

      <Button bg="#00ADB5" type="submit">
        Add workout
      </Button>
      {error && (
        <Alert key="warning" variant="warning" style={{ marginTop: "15px" }}>
          {error}
        </Alert>
      )}
    </Form>
  );
};

export default WorkoutForm;
