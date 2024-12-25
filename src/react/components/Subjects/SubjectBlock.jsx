import FilledPlus from "../../assets/plus-circle-fill-white.svg"
import UnfilledPlus from "../../assets/plus-circle-white.svg"
import { Button } from "react-bootstrap";
import {Container, Col, Row} from "react-bootstrap";
import WorkItem from "./WorkItem.jsx";
import { useEffect, useState } from "react";
import ModalElement from "../ModalElement/Modal.jsx";
import { assignmentModelContext } from "../../context/ModalContext.jsx";


const initialValues = Object.freeze({
    title: "",
    content: ""
})

const idGenerator = () => Math.random() + 1 


function SubjectBlock({remove, id, name}) {

    const [assignmentShow, setAssignmentShow] = useState(false);
    const [taskShow, setTaskShow] = useState(false);
    const [task, setTask] = useState([]);
    const [assignments, setAssignments] = useState([]);
    const [currentObject, setObject] = useState({...initialValues});
    const [subjects, setSubjectData] = useState([]);


    const handleTaskClose = () => setTaskShow(false);
    const handleAssignmentClose = () => setAssignmentShow(false);

    const handleAssignmentShow = () => setAssignmentShow(true);
    const handleTaskShow = () => setTaskShow(true);


    useEffect(() => {
        const items = localStorage.getItem("subjects");
        if (items) {
            const itemsP = JSON.parse(items);
            const matchingItem = itemsP.find(subject => subject.key === id);
            if (matchingItem) {
                setSubjectData([matchingItem]);
            }
        }
    }, [id]); 
    
    useEffect(() => {
        subjects.forEach((item) => {
            if (item.key === id) {
                setAssignments(item.assignments ?? []);
                setTask(item.tasks ?? []);
            }
        });

        const tempSubjects = JSON.parse(localStorage.getItem("subjects"))

        localStorage.setItem("subjects", JSON.stringify(tempSubjects.filter((item) => item.key !== id).concat(subjects)));
        
    }, [subjects, id]); 
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setObject((preAssignmentData) => {
            preAssignmentData = { ...preAssignmentData };
            preAssignmentData[name] = value;

            return preAssignmentData
        });

    };

    const handleInputChangeTask = (e) => {
        const { name, value } = e.target;
        setObject((preTaskData) => {
            preTaskData = { ...preTaskData };
            preTaskData[name] = value;

            return preTaskData
        }); 

    };

    /**   
     * @param {string} itemID 
     * @param {Object} object 
     * @param {string} label 
     */
    const addLabel = (itemID, object, label) => {
       
        let current_id = idGenerator();

        if (object.title !== "" && object.content !== ""){
            setSubjectData((prevList) => {
                return prevList.map((item) => {
                    if (label === "assignment") {

                        return item.key === itemID 
                            ? { 
                                ...item, 
                                assignments: item.assignments ? 
                                    [...item.assignments, {key: current_id, ...object}] 
                                    : [{key: current_id, ...object}] 
                            }
                            : item
                    }
                    else if (label === "task") {
                        return item.key === itemID 
                            ? { 
                                ...item, 
                                tasks: item.tasks ? 
                                    [...item.tasks, {key: current_id, ...object}] 
                                    : [{key: current_id, ...object}] 
                            }
                            : item
                    }
                });
            });

            setObject((prevAssignments) => [...prevAssignments, {key: current_id, ...object}]);
            
            if (label === "assignment") {
                handleAssignmentClose();
            }
            else if (label === "task") {
                handleTaskClose();
            }
    }}

    const removeLabel = (itemID, objectID, label) => {
        
        setSubjectData((prevList => {
            return prevList.map((item) => {
                if (label === "assignment") {

                    return item.key === itemID 
                        ? { ...item, assignments: item.assignments.filter((assignment) => assignment.key !== objectID) }
                        : item
                    
                } else if (label === "task") {
                    return item.key === itemID 
                        ? { ...item, tasks: item.tasks.filter((task) => task.key !== objectID) }
                        : item
                }
            }
            );
        }));

        setObject((prevAssignments) => [...prevAssignments, {key: current_id, ...currentObject}]);

    };


    return (
        <>
        <assignmentModelContext.Provider value={{taskShow: false, assignmentShow: false}}>
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
                        <WorkItem item={id} assignmentId={assignment.key} key={assignment.key} title={assignment.title} content={assignment.content} type="assignment" remove={removeLabel}/>
                    ))}
                </Col>
                <Col>
                <div className="d-flex align-items-center justify-content-center image-container">
                    <img className="float-end pt-2 default-image " src={UnfilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  alt="Logo" onClick={handleAssignmentShow}></img>
                    <img  className="float-end pt-2 hover-image" src={FilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  onClick={handleAssignmentShow} alt="Logo"></img>
                </div>
                </Col>
            </Row>
            <Row> 
            <Col xs={11}>
            <p className="fw-bolder fs-5">Tasks</p>
                 <hr style={{borderWidth:"2px"}}></hr>
                    {task?.map((task) => (
                    <WorkItem item={id} assignmentId={task.key} key={task.key} title={task.title} content={task.content} type="task" remove={removeLabel}/>
                    ))}
                </Col>
                <Col>
                <div className="d-flex align-items-center justify-content-center image-container mb-3">
                    <img className="float-end pt-2 default-image " src={UnfilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  alt="Logo" onClick={handleTaskShow}></img>
                    <img  className="float-end pt-2 hover-image" src={FilledPlus} style={{minWidth: "25px", minHeight: "25px"}}  onClick={handleTaskShow} alt="Logo"></img>
                </div>
                </Col>
            </Row>
            <div className="d-flex align-items-center">
                <Button className="py-1 px-4 mt-2 center-me rounded-5 btn-sm" variant="outline-secondary" onClick={() => remove(id)}>Remove</Button>
             </div>
            </div>
        </Container>
        <ModalElement title="Add Assignment" element1="title" show={assignmentShow} element2="content" closeFunction={handleAssignmentClose} saveChanges={() => addLabel(id, currentObject, "assignment")
        } handleChange={handleInputChange}></ModalElement>
        <ModalElement show={taskShow}  closeFunction={handleTaskClose} saveChanges={() => addLabel(id, object, "task")} handleChange={handleInputChangeTask} title="Add Task" element1="title" element2="content" />
        </assignmentModelContext.Provider> 
        </>
    )
}

export default SubjectBlock