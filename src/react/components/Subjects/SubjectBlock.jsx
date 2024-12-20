import FilledPlus from "../../assets/plus-circle-fill-white.svg"
import UnfilledPlus from "../../assets/plus-circle-white.svg"
import { Button } from "react-bootstrap";
import {Container, Col, Row} from "react-bootstrap";
import WorkItem from "./WorkItem.jsx";
import { useEffect, useState } from "react";
import ModalElement from "../ModalElement/Modal.jsx";
import { assignmentModelContext } from "../../context/ModalContext.jsx";


const initialValues = Object.freeze({
    assignment: "",
    date: ""
})

const idGenerator = () => Math.random() + 1 


function SubjectBlock({remove, id, name}) {

    const [currentAssignment , setCurrentAssignment] = useState({...initialValues});
    const [show, setShow] = useState(false);
    const [assignments, setAssignments] = useState([]);
    const [subjects, setSubjectData] = useState([]);


    useEffect(() => {
        const items = localStorage.getItem("subjects");
        if (items) {
            setSubjectData(JSON.parse(items));
        }
    }, []); 
    
    useEffect(() => {
        subjects.forEach((item) => {
            if (item.key === id) {
                setAssignments(item.assignments ?? []);
            }
        });

        localStorage.setItem("subjects", JSON.stringify(subjects));
    }, [subjects, id]); 
    
    
    useEffect(() => {
        console.log(subjects);
    }, [subjects]);

    const handleShow = () => {setShow(true)};

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentAssignment((preAssignmentData) => {
            preAssignmentData = { ...preAssignmentData };
            preAssignmentData[name] = value;

            return preAssignmentData
        });

    };

    /**
     * @param {string} itemID The id of the subject to add the assignment to.
     * @param {Object} assignment The assignment to add.
     */
    const addAssignment = (itemID, assignment) => {
        let current_id = idGenerator();

        setSubjectData((prevList) => {
            return prevList.map((item) => 
                item.key === itemID 
                    ? { 
                        ...item, 
                        assignments: item.assignments ? 
                            [...item.assignments, {key: current_id, ...assignment}] 
                            : [{key: current_id, ...assignment}] 
                    }
                    : item
            );
        });
        
        setAssignments((prevAssignments) => [...prevAssignments, {key: current_id, ...assignment}]);

        localStorage.setItem("subjects", JSON.stringify(subjects));
    };

    const removeAssignment = (itemID, assignmentID) => {
        
        setSubjectData((prevList => {
            return prevList.map((item) => 
                item.key === itemID 
                    ? { ...item, assignments: item.assignments.filter((assignment) => assignment.key !== assignmentID) }
                    : item
            );
        }));

        setAssignments((prevAssignments) => prevAssignments.filter((assignment) => assignment.key !== assignmentID));
        localStorage.setItem("subjects", JSON.stringify(subjects));

        console.log("DONE")
    };

    
    return (
        <>
        <assignmentModelContext.Provider value={{show:false}}>
        <Container className="text-custom-color-grey-text-emphasis">
            <div className="p-3 my-3 mx-3 bg-custom-color-grey-lighter rounded-4">
            <Row>
                <Col xs={12}>
                    <h4 className="fw-bold fs-3 mb-3">{name}</h4>
                    {/* <hr style={{borderWidth:"2px"}}></hr> */}
                </Col>
            </Row>
            <Row>
            <Col xs={11} className="mb-3">
            <p className="fw-bolder fs-5">Assignments</p>
                    <hr style={{borderWidth:"2px"}}></hr>
                    {assignments?.map((assignment) => (
                        <WorkItem item={id} assignmentId={assignment.key} key={assignment.key} title={assignment.title} content={assignment.content} remove={removeAssignment}/>
                    ))}
                </Col>
                <Col>
                <div className="d-flex align-items-center justify-content-center image-container">
                    <img className="float-end pt-2 default-image " src={UnfilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  alt="Logo" onClick={handleShow}></img>
                    <img  className="float-end pt-2 hover-image" src={FilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  onClick={handleShow} alt="Logo"></img>
                </div>
                </Col>
            </Row>
            <Row> 
            <Col xs={11}>
            <p className="fw-bolder fs-5">Tasks</p>
                    <hr style={{borderWidth:"2px"}}></hr>

                </Col>
                <Col>
                <div className="d-flex align-items-center justify-content-center image-container">
                    <img className="float-end pt-2 default-image " src={UnfilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  alt="Logo" onClick={handleShow}></img>
                    <img  className="float-end pt-2 hover-image" src={FilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  onClick={handleShow} alt="Logo"></img>
                </div>
                </Col>
            </Row>
            <div className="d-flex align-items-center">
                <Button className="py-1 px-4 mt-2 center-me rounded-5 btn-sm" variant="outline-secondary" onClick={() => remove(id)}>Remove</Button>
             </div>
            </div>
        </Container>
        <ModalElement title="Add Assignment" element1="Title" show={show} element2="Content" closeFunction={() => setShow(false)} saveChanges={() => {addAssignment(id, currentAssignment)
            setShow(false)
        }} handleChange={handleInputChange}></ModalElement>
        </assignmentModelContext.Provider>
        </>
    )
}

export default SubjectBlock