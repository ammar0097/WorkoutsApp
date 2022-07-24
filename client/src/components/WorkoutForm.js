import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
const WorkoutForm = () => {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3001/api/workouts/",
      { title: title, reps: reps, load: load },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const json = response.json();

    if (!response.ok) {
      setError(json.message);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout add", json);
    }
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

      <Button variant="primary" type="submit">
        Add workout
      </Button>
      {error && <p>{error}</p>}
    </Form>
  );
};

export default WorkoutForm;
