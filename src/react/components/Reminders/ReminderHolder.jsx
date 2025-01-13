import { Container, Row, Col } from "react-bootstrap"
import ReminderCard from "./ReminderCard.jsx"
import { reminderModelContext } from "../../context/ModalContext.jsx";
import { useState, useEffect } from "react";
import ModalElement from "../ModalElement/Modal.jsx";
import UnfilledPlus from "../../assets/plus-circle.svg";
import FilledPlus from "../../assets/plus-circle-fill.svg";

const INITIAL_VALUES = Object.freeze({
    title: "",
    content: "",
    date: "",
    priority: "No Priority"
})

const idGenerator = () => Math.random() + 1;

function ReminderHolder(){

    const [reminderShow, setReminderShow] = useState(false);
    const [reminderData, setReminderData] = useState({...INITIAL_VALUES})
    const [reminders, setReminder] = useState([])

    useEffect(() => {
        const reminders = localStorage.getItem("reminders")

        if (reminders){
            setReminder(JSON.parse(reminders))
        }
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("reminders", JSON.stringify(reminders));
    // }, [reminders]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setReminderData((preAppData) => {
          preAppData = { ...preAppData };
          preAppData[name] = value;
    
          return preAppData;
        });
        // setReminderShow(false);
      };

    const addReminder = () => {
       
        const current_id = idGenerator()

        if (reminderData.title !== "" || reminderData.content !== "" || reminderData.date !== ""){
            setReminder(() => {[...reminders, {key: current_id, ...reminderData}]})
            localStorage.setItem("reminders", JSON.stringify([...reminders, {key: current_id, ...reminderData}]))
            console.log([reminders])
        }

        setReminderShow(false)
    }

    /**
     * 
     * @param {String} reminderId
     */

    const removeReminder = (reminderId) => {
      const newReminders = reminders.filter((item) => item.key !== reminderId)
      setReminder(newReminders)
      localStorage.setItem("reminders", JSON.stringify(newReminders))
    }


    /**
     * @param {Object} reminderkey
     * @param {String} priority 
     */

    const setPriority = (reminderkey, priority) => {
      console.log(reminderkey, priority)
      console.log(reminders)

      const new_reminders = reminders.map((item) => {
        if (item.key === reminderkey){
          return {
            ...item,
            priority: priority
          }
        }
        return item
      })
      
      console.log(reminders)

      setReminder(new_reminders)
      localStorage.setItem("reminders", JSON.stringify(new_reminders))

    }

    const handleShow = () => {
        setReminderShow(true);
    }

    const handleClose = () => {
        setReminderShow(false)
    }

    return (
        <reminderModelContext.Provider value={{reminderShow: false}}>
            <Container className="p-1">
                <Row>
                    <Col className="p-3">
                    <Row>
                        {reminders?.map((item => 
                                 <ReminderCard key={item.key}
                                 id={item.key} title={item.title} content={item.content} date={item.date} priority={item.priority} changePriority={setPriority} removeReminder={removeReminder}/>
                        ))}
                    </Row>
                    </Col>
                
                    <Col xs={1} className="px-2">
                                <div
                                  className="image-container float-end m-2"
                                  style={{ minWidth: "100%" }}
                                >
                                  <img
                                    className="float-end pt-2 default-image me-2"
                                    src={UnfilledPlus}
                                    style={{ minWidth: "30px", minHeight: "30px" }}
                                    onClick={handleShow}
                                    alt="Logo"
                                  ></img>
                                  <img
                                    className="float-end pt-2 hover-image me-2"
                                    src={FilledPlus}
                                    style={{ minWidth: "30px", minHeight: "30px" }}
                                    onClick={handleShow}
                                    alt="Logo"
                                  ></img>
                                </div>
                              </Col>    
                </Row>

            </Container>
            <ModalElement show={reminderShow}
                 closeFunction={handleClose}
                 saveChanges={addReminder}
                 handleChange={handleInputChange}
                 title="Add a Reminder"
                 element1="Title"
                 element2="Reminder"
                 element3="Date"
            ></ModalElement>
        </reminderModelContext.Provider>
    ) 
}

export default ReminderHolder