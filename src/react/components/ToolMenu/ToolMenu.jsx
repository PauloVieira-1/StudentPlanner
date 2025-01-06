import "./ToolMenu.css";
import { Button } from "react-bootstrap";
import ModalElement from "../ModalElement/Modal.jsx";
import { useEffect, useState } from "react";
import { subjectModalContext } from "../../context/ModalContext.jsx";

function ToolMenu() {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    let searchTerm = `https://www.google.com/search?q=${search}`;
    window.location.href = searchTerm;
    console.log(searchTerm);
  };

  return (
    <subjectModalContext.Provider value={{ show: false }}>
      <div
        id="tool-menu"
        className="shadow py-2 ps-4 pe-2 d-flex align-items-center"
      >
        <form id="search" onSubmit={searchHandler} className="flex-grow-1 me-2">
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <Button
          variant="outline-custom-color-orange"
          type="submit"
          form="search"
          className="rounded-5 text-white px-5 mx-1 ms-auto"
        >
          Search
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
