import "./Navbar.css";
import { Container, Row, Col } from "react-bootstrap";
import QuickNotes from "../QuickNotes/QuickNotes.jsx";
import Logo from "../../assets/Logo.png";
function Navbar({subjectFunction, applicationFunction}) {
    return (
        <div id="navbar" className="rounded-4 shadow p-3 mt-1 mb-5">
            <Container >
                <Row style={{height: "150px"}} className="bg-custom-color-gey-light rounded-3 text-center d-flex align-items-center justify-content-center"> 
                    {/* <Col xs={5} className="p-1 d-flex align-items-center"> */}
                    <div className="d-flex align-items-center  text-center justify-content-center">
                        <img className="text-white p-2 rounded-3 " src={Logo}  style={{ height: "140px"}} alt="Logo"></img>
                    </div>
                        {/* <span className="align-items-center pe-3" style={{minHeight: "100%", maxWidth: "100%", maxHeight: "100%"}}>
                                <h5  style={{minHeight: "100%", maxWidth: "100%", maxHeight: "100%", wordBreak: "normal"}} className="text-white px-3 pt-3 text-left me-2 bg-custom-color-grey-light rounded-3fw-bold me-2">Class Compass</h5>
                        </span> */}
                    {/* </Col> */}
                    {/* <Col xs={7} className="p-1" style={{minHeight: ""}}>
                        <span className="align-items-center" style={{minHeight: "100%"}}>
                                <h5  style={{minHeight: "100%"}} className="text-white px-3 pt-2 text-left me-2 bg-custom-color-grey-light rounded-3">Student Planner</h5>
                        </span>
                    </Col> */}
                </Row>
            </Container>
            <ul className="mt-4">
                <li><button onClick={subjectFunction}>
                         Subjects
                    </button>
                </li>
                <li>
                     <button onClick={applicationFunction}>
                         Applications
                    </button>
                </li>
                <li><a>Coming Soon</a></li>
                <li><a>Coming Soon</a></li>
            </ul>
            <QuickNotes />
        </div>  
    );

}

export default Navbar