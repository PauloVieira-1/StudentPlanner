import { Container, Row, Col } from "react-bootstrap";
import emptyTrash from "../../assets/trash3.svg"
import fullTrash from "../../assets/trash3-fill.svg"

function ApplicationBox({icon, name, link, removeFunction, id}) {

    const url = link
    const handleClick = () => {
        
        let link = `https://` + url
        chrome.tabs.create({ url: link });
    }

 
    return (
        <Container className="rounded-4 bg-custom-color-grey-light p-3 m-3 img-effect text-custom-color-grey-text-emphasis" style={{height:"160px", width:"140px"}}>
            <Row style={{height:"18px"}}>
                <div className="container-hidden">
                    <div className=" image-container float-end" >
                            <img className="float-end default-image hover-trash" src={emptyTrash} style={{minWidth: "15px", minHeight: "15px"}}  alt="Logo" onClick={() => removeFunction(id)}></img>
                            <img  className="float-end hover-image" src={fullTrash} style={{minWidth: "15px", minHeight: "15px"}} alt="Logo" onClick={() => removeFunction(id)}></img>
                    </div>
                </div>
            </Row>
            <div style={{cursor: "pointer"}} className="d-flex flex-column justify-content-center align-items-center" onClick={handleClick}>
                <Row className="mt-0 mb-3">
                    <div className="rounded-circle bg-custom-color-grey-lighter d-flex align-items-center justify-content-center" style={{minWidth: "60px", minHeight: "60px"}}>
                        <img className="img-fluid" src={icon} style={{maxWidth: "120px", maxHeight: "120px"}} alt="Logo"></img>
                    </div>
                </Row>
                <Row>
                <h4>{name}</h4>
                </Row>
            </div>
        </Container>
    )
}  
 
export default ApplicationBox