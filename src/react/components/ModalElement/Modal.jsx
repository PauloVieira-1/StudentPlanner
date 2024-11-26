import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ModalContext } from "../../context/ModalContext.jsx";
import "./Modal.css";


function ModalElement(props) {

    const {} = useContext(ModalContext);

    return ( 
    
    <Modal show={props.show} onHide={props.closeFunction} className="shadow">
        <Modal.Body className="bg-custom-color-grey text-custom-color-grey-text-emphasis rounded-top-2">
        <Modal.Title className="text-custom-color-grey-text-emphasis">{props.title}</Modal.Title>
            <div className="mt-3">
              <form>
                <h6><input autoComplete="off" className='px-2 pt-2' name="title" placeholder={props.element1} onChange={(e) => props.handleChange(e)} ></input></h6>
                <p><input autoComplete="off" className='px-2' name="content" placeholder={props.element2} onChange={(e) => props.handleChange(e)}></input></p>
              </form>
            </div>
        </Modal.Body>
        <Modal.Footer className="bg-custom-color-grey">
          <Button className="rounded-5 px-4 rounded-5" variant="secondary" onClick={props.closeFunction} >
            Close
          </Button>
          <Button className="text-white rounded-5 px-4" variant="custom-color-orange" onClick={() =>  props.saveChanges()}>
            Save Note
          </Button>
        </Modal.Footer>
      </Modal>

    );
}

export default ModalElement;