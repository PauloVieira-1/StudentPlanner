import { Col } from "react-bootstrap";
import Icon from "../../assets/calendar2.svg";
import { Button } from "react-bootstrap";

const buttonClickHandler = () => {
  const message = "Test";
  chrome.runtime.sendMessage({ event: "onActivation", message });
};

function Empty(props) {
  return (
    <Col
      className="px-5 py-5 d-flex justify-content-center align-items-center flex-column text-center text-custom-color-grey-text-emphasis"
      style={{ height: "580px" }}
    >
      <h2 className="px-3 py-2">No {props.title} added</h2>
      <h6 className="px-3 pb-4">
        {" "}
        Add {props.title} using the "+" button on the right
      </h6>
      <img
        src={Icon}
        alt="Logo"
        style={{ minWidth: "80px", minHeight: "80px" }}
      ></img>
      {/* <Button id="test" className="mt-3" onClick={buttonClickHandler} >TEST STUFF</Button> */}
    </Col>
  );
}

export default Empty;
