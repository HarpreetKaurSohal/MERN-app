import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Button, Card, Badge, Accordion } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listNotes } from "../../actions/notesAction";

const MyNotes = () => {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, notes, error } = noteList;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  useEffect(() => {
    dispatch(listNotes());
  }, [dispatch]);

  return (
    <MainScreen title="Welcome back Harpreet Kaur..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes?.map((note) => (
        <Accordion key={note._id}>
          {/* <Accordion.Item eventKey="0"> */}
          <Card style={{ margin: 10 }}>
            <Card.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 12,
                }}
              >
                <Accordion.Header style={{ fontSize: 20 }}>
                  {note.title}
                </Accordion.Header>
              </span>
              <div>
                <Button className="m-2" href={`/note/${note.id}`}>
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="m-2"
                  onClick={() => deleteHandler(note._id)}
                >
                  Delete
                </Button>
              </div>
            </Card.Header>
            <Accordion.Body>
              <Card.Body>
                <h4>
                  <Badge bg="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer className="blockquote-footer">
                    Created on - date
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Body>
          </Card>
          {/* </Accordion.Item> */}
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
