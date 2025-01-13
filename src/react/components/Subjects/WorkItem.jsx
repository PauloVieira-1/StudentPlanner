import { Container, Col, Row } from "react-bootstrap";
import emptyTrash from "../../assets/trash3.svg";
import fullTrash from "../../assets/trash3-fill.svg";

function WorkItem(props) {
  return (
    <Container className="rounded-3 py-2 my-2 text-custom-color-grey-text-emphasis bg-custom-color-grey-lighter2 container-hidden">
      <Row>
        <Col xs={11}>
          <h6>{props.title}</h6> 
          <p>{props.content}</p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center p-0 ">
          <div className="d-flex align-items-center justify-content-center image-container float-end">
            <img
              className="float-end default-image hover-trash"
              src={emptyTrash}
              style={{ minWidth: "25px", minHeight: "25px" }}
              alt="Logo"
            ></img>
            <img
              className="float-end hover-image"
              src={fullTrash}
              style={{ minWidth: "25px", minHeight: "25px" }}
              alt="Logo"
              onClick={() =>
                props.remove(props.item, props.assignmentId, props.type)
              }
            ></img>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default WorkItem;
