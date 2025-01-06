import "./QuickNotes.css";
import { Container, Row, Col } from "react-bootstrap";
import UnfilledPlus from "../../assets/plus-circle.svg";
import FilledPlus from "../../assets/plus-circle-fill.svg";
import NoteItem from "./NoteItem.jsx";
import ModalElement from "../ModalElement/Modal.jsx";
import { useEffect, useState } from "react";
import { ModalContext } from "../../context/ModalContext.jsx";

const initialValues = Object.freeze({
  title: "",
  content: "",
});

const idGenerator = () => Math.random() + 1;

function QuickNotes() {
  const [List, setList] = useState([]);
  const [show, setShow] = useState(false);
  const [noteData, setNoteData] = useState({ ...initialValues });

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setList(JSON.parse(storedNotes));
    }
  }, []);

  /**
   *
   * @param {Object} e
   * @param {String} e.target.name
   * @param {String} e.target.value
   *
   */

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNoteData((prevNoteData) => {
      prevNoteData = { ...prevNoteData };
      prevNoteData[name] = value;

      return prevNoteData;
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setNoteData(initialValues);
    setShow(true);
  };
  const addNotes = () => {
    let current_id = idGenerator();
    if (noteData.title !== "" && noteData.content !== "") {
      setList((prevList) => [...prevList, { key: current_id, ...noteData }]);
      localStorage.setItem(
        "notes",
        JSON.stringify([...List, { key: current_id, ...noteData }]),
      );
      setNoteData(initialValues);
      setShow(false);
    }
  };

  const removeNotes = (itemId) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.key !== itemId);
      return updatedList;
    });

    localStorage.setItem(
      "notes",
      JSON.stringify(List.filter((item) => item.key !== itemId)),
    );
  };

  return (
    <ModalContext.Provider value={{ show: false }}>
      <Container
        className="rounded-4 bg-custom-color-grey-light ms-0 mt-5 me-5 pb-1 position-relative container-overflow position-relative"
        style={{ maxHeight: "20px !important" }}
      >
        <Row className="">
          <Col className="d-flex align-items-center me-0 pe-0" xs={9}>
            <h5 className="text-white pt-3 pb-1 px-2 text-start bg-custom-color-grey-light rounded-3">
              Quick Notes
            </h5>
          </Col>
          <Col
            xs={3}
            className="d-flex align-items-center image-container float-end"
          >
            <img
              onClick={handleShow}
              className="float-end pt-2 default-image"
              src={UnfilledPlus}
              style={{ minWidth: "22px", minHeight: "22px" }}
              alt="Logo"
            ></img>
            <img
              onClick={handleShow}
              className="float-end pt-2 hover-image"
              src={FilledPlus}
              style={{ minWidth: "22px", minHeight: "22px" }}
              alt="Logo"
            ></img>
          </Col>
        </Row>
        <ul className="p-0 m-0 !important">
          {List.map((item) => (
            <NoteItem
              id={item.key}
              key={item.key}
              title={item.title}
              content={item.content}
              deleteNote={removeNotes}
            />
          ))}
        </ul>
      </Container>
      <ModalElement
        show={show}
        closeFunction={handleClose}
        saveChanges={addNotes}
        handleChange={handleInputChange}
        title="What would you like to take note of?"
        element1="Title"
        element2="Note"
      />
    </ModalContext.Provider>
  );
}

export default QuickNotes;
