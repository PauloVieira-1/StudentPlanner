import "./ToolMenu.css";
import { Button } from "react-bootstrap";
import ModalElement from "../ModalElement/Modal.jsx";
import { useState } from "react";
import Seacrh from "../../assets/search.svg";
import { subjectModalContext } from "../../context/ModalContext.jsx";
import { Container } from "react-bootstrap";

function ToolMenu() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let searchTerm = `https://www.google.com/search?q=${search}`;
    if (search !== "") {
      window.location.href = searchTerm;
    }
  };

  return (
    <subjectModalContext.Provider value={{ show: false }}>
      <div
        id="tool-menu"
        className="shadow py-2 ps-4 pe-2 d-flex align-items-center"
      >
        <form id="search" onSubmit={searchHandler} className="flex-grow-4 me-2">
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            style={{ width: "100%", height: "30px" }}
          />
        </form>
        <Button
          variant="outline-custom-color-orange-2"
          type="submit"
          form="search"
          className="rounded-5 text-white px-2 mx-2 py-2 ms-auto h-100"
          style={{ Width: "45px", Height: "45px" }}
        >
          <img
            className="float-end  default-image "
            src={Seacrh}
            style={{ maxWidth: "13px", maxHeight: "13px" }}
            alt="Logo"
          ></img>
        </Button>
      </div>
      <ModalElement
        show={show}
        closeFunction={handleClose}
        handleChange={(e) => console.log(e)}
        savechanges={(e) => console.log(e)}
        title="TEST"
        element1="TEST"
        element2="TEST"
      />
    </subjectModalContext.Provider>
  );
}

export default ToolMenu;
