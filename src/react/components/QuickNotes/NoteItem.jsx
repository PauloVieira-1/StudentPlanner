import "./NoteItem.css";
import Button from "react-bootstrap/Button";

function NoteItem({ deleteNote, id, title, content }) {
  return (
    <div className="p-3 mt-3 mb-2 bg-custom-color-grey-lighter rounded-3">
      <h6>{title}</h6>
      <p>{content}</p>
      <div className="d-flex align-items-center">
        <Button
          onClick={() => deleteNote(id)}
          className="py-1 px-4 mt-2 center-me rounded-5 btn-sm"
          variant="outline-secondary"
        >
          Remove
        </Button>
      </div>
    </div>
  );
}

export default NoteItem;
