import { Button } from "react-bootstrap";

function Subjects({title, content}){
    
    return (
            <div className="">
                <div className="p-3 my-3 mx-3 bg-custom-color-grey-lighter rounded-4">
                    <h6>{title}</h6>
                    <p>{content}</p>
                    <div className="d-flex align-items-center">
                        <Button className="py-1 px-4 mt-2 center-me rounded-5 btn-sm" variant="outline-secondary" >Remove</Button>
                </div>
                </div>
            </div>
    )
}

export default Subjects