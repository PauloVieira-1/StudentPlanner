import ApplicationBox from "./ApplicationBox.jsx";
import { Col, Row, Container } from "react-bootstrap";
import UnfilledPlus from "../../assets/plus-circle.svg"
import FilledPlus from "../../assets/plus-circle-fill.svg"
import ModalElement from "../ModalElement/Modal.jsx";
import { applicationModalContext } from "../../context/ModalContext.jsx";
import { useEffect, useState } from "react";

 
const initialValues = Object.freeze({
    name: "",
    link: "",
  })

  const idGenerator = () => Math.random() + 1 
 
function PinnedApplications() {

    const [show, setShow] = useState(false)
    const [List, setList] = useState([]);
    const [appData, setAppData] = useState({...initialValues});
    
    useEffect(() => {
        const storedNotes = localStorage.getItem('apps');
        if (storedNotes) {
          setList(JSON.parse(storedNotes));
        }
      }, []);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    const addApp = () => {

        let current_id = idGenerator();
        setList((prevList) => [...prevList, { key: current_id, ...appData }]);
        localStorage.setItem('apps', JSON.stringify([...List, { key: current_id, ...appData }]));
        setShow(false);
        setAppData(initialValues);

        getFavIcon(appData.content);
        console.log(appData);

    }

    const removeApp = (itemId) => {

        setList((prevList) => {
            const updatedList = prevList.filter((item) => item.key !== itemId);
            return updatedList; 
        });

        localStorage.setItem('apps', JSON.stringify(List.filter((item) => item.key !== itemId)));
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppData((preAppData) => {
            preAppData = { ...preAppData };
            preAppData[name] = value;

            return preAppData
        });
    };

    const getFavIcon = async (url) => {

        // console.log(`https://${url}/favicon.ico`);
        
        // const response = await fetch(`https://${url}/favicon.ico`).then((response) => {
        //     if (response.ok) {
        //         return response.text;
        //     }
        //     throw new Error("Network response was not ok.");
        // }).then((text) => {
        //     const parser = new DOMParser();
        //     const doc = parser.parseFromString(text, "text/html");

        //     var img = doc.querySelector('img');
        //     console.log(img);

        //     return img;
        // }).catch((error) => {
        //     console.log(error);
        // }); 

        const respone = await fetch(`https://${url}`).then((response) => {
            if (response.ok) {
                return response.text;
            }
            throw new Error("Network response was not ok.");
        }).then((text) => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, "text/html");

            var img = doc.querySelector('link[rel="icon"]');
            console.log(img);
        })

    }
        

    return (
        <>
        <applicationModalContext.Provider value={{show: false}}>
        <Container>
            <Row >
                <Col xs={11} >
                <Row style={{overflowY: "scroll", maxHeight: "450px"}} > 
                {List.map((item) => {
                    return (
                    <ApplicationBox key={item.key} name={item.title} link={item.content} removeFunction={removeApp} />
                    )
                })}
                </Row>
                </Col>
                <Col xs={1} className="px-2">
                <div className="image-container float-end m-2" style={{minWidth: "100%"}}>
                        <img className="float-end pt-2 default-image" src={UnfilledPlus} style={{minWidth: "50%", minHeight: "50%"}} onClick={handleShow} alt="Logo"></img>
                        <img  className="float-end pt-2 hover-image" src={FilledPlus} style={{minWidth: "50%", minHeight: "50%"}} onClick={handleShow} alt="Logo"></img>
                </div>
                </Col>
            </Row>
        </Container>
        <ModalElement show={show}  closeFunction={handleClose} saveChanges={addApp} handleChange={handleInputChange} title="What link would you like to add?" element1="Name" element2="Link"/>
        </applicationModalContext.Provider>
        </>
    );
}
export default PinnedApplications
