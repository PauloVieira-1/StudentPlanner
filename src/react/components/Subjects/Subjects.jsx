import { Col, Row, Container } from "react-bootstrap";
import FilledPlus from "../../assets/plus-circle-fill.svg";
import UnfilledPlus from "../../assets/plus-circle.svg";
import { subjectModalContext } from "../../context/ModalContext.jsx";
import ModalElement from "../ModalElement/Modal.jsx";
import { useEffect, useState } from "react";
import SubjectBlock from "./SubjectBlock.jsx";

const INITIAL_VALUES = Object.freeze({
  title: "",
});

const idGenerator = () => Math.random() + 1;

function Subjects() {
  const [show, setShow] = useState(false);
  const [subjectData, setSubjectData] = useState(INITIAL_VALUES);
  const [list, setList] = useState([]);
  const [showMesage, setShowMessage] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const storedSubjects = localStorage.getItem("subjects");

    if (storedSubjects) {
      setList(JSON.parse(storedSubjects));
    }
  }, []);

  const handleAddtoDatabase = () => {
    let current_id = idGenerator();

    if (subjectData.title !== "") {
      setList((prev) => [...prev, { key: current_id, ...subjectData }]);
      localStorage.setItem(
        "subjects",
        JSON.stringify([...list, { key: current_id, ...subjectData }]),
      );

      setShow(false);
      setSubjectData(INITIAL_VALUES);
      setShowMessage(true);
    }
  };

  const removeSubject = (itemID) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.key !== itemID);
      return updatedList;
    });

    localStorage.setItem(
      "subjects",
      JSON.stringify(list.filter((item) => item.key !== itemID)),
    );
  };

  /**
   *
   * @param {Object} e
   * @param {String} e.target.name
   * @param {String} e.target.value
   */

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSubjectData((preAppData) => {
      preAppData = { ...preAppData };
      preAppData[name] = value;

      return preAppData;
    });
    setShowMessage(false);
  };

  return (
    <subjectModalContext.Provider value={{ show: false }}>
      <Container className="pt-1 px-0 m-0">
        <Row>
          <Col style={{ overflowY: "scroll", maxHeight: "580px" }}>
            {list.map((item) => (
              <SubjectBlock
                key={item.key}
                id={item.key}
                remove={removeSubject}
                name={item.title}
              />
            ))}
          </Col>
          <Col xs={1} className="px-2">
            <div
              className="image-container float-end m-2"
              style={{ minWidth: "100%" }}
            >
              <img
                className="float-end pt-2 default-image me-2"
                src={UnfilledPlus}
                style={{ minWidth: "30px", minHeight: "30px" }}
                onClick={handleShow}
                alt="Logo"
              ></img>
              <img
                className="float-end pt-2 hover-image me-2"
                src={FilledPlus}
                style={{ minWidth: "30px", minHeight: "30px" }}
                onClick={handleShow}
                alt="Logo"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
      <ModalElement
        show={show}
        closeFunction={handleClose}
        saveChanges={handleAddtoDatabase}
        handleChange={handleInputChange}
        title="What subject would you like to add?"
        element1="Name"
        empty={showMesage}
      />
    </subjectModalContext.Provider>
  );
}

export default Subjects;
