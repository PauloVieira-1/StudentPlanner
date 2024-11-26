import { Container, Row, Col } from "react-bootstrap";
import '../../styles/GlobalCss.css'
import Navbar from "./Navbar/Navbar.jsx";
import '../../styles/colors.css'
import Subjects from "./Subjects/Subjects.jsx";
import { useState } from "react";
import FeatureBox from "./FeatureBox/FeatureBox.jsx";

function App() {

    const [showSubjects, setShowSubjects] = useState(false)

    const activateSubjects = () => {
      setShowSubjects(!showSubjects)
    }


    return (
            <Container className="ps-0 ms-0" style={{height: "100vh"}}>
            <Row className="h-100">
                <Col xs={3} className="d-flex flex-column">
                <Navbar style={{flex: 1}} subjectFunction = {activateSubjects}
                />   
                </Col>
                <Col xs={9} className="px-3 ms-0 mt-3 d-flex flex-column" style={{height: "100%"}}>
                <Row className="mb-5">
                    {/* <ToolMenu 
                    button1 = {featureTools.button1}
                    button2 = {featureTools.button2}
                    button3 = {featureTools.button3}
                    /> */}
                </Row>
                <Row className="mt-5 flex-grow-1">
                <FeatureBox 
                    title= 'Subjects'
                    active = {showSubjects}
                    component = {<Subjects/>}
                    />         
                    </Row>
                </Col>
            </Row>
            </Container>      
    );
}   

export default App