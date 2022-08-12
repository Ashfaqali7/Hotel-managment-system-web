import Card from "react-bootstrap/Card";
import Buttons from "../components/button";

function TeacherCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body
        className="d-flex"
        style={{ border: "1px solid black", margin: "20px", padding: "10px" }}
      >
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.data.email}
        </Card.Subtitle>
        <div>
        <Card.Text>{props.data.email}</Card.Text>
        <Card.Text>{props.data.cnic}</Card.Text>
        <Card.Text>{props.data.contact}</Card.Text>
        <Card.Text>{props.data.section}</Card.Text>
        </div>
        <div className="mb-5">
        <Buttons label="Delete" onClick={props.click} />
        <Buttons label="Edit" onClick={props.clickEdit} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default TeacherCard;
