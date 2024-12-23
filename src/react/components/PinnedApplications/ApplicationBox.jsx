function ApplicationBox(props){
    const handleClick = () => {
        let link = `https://` + props.link
        chrome.tabs.create({ url: link });
    }


    return (
        <div className="rounded-4 bg-custom-color-grey-light p-3 m-3 img-effect" style={{height:"160px", width:"140px"}} onClick={handleClick}>
            <img className="float-end" src={props.image} style={{minWidth: "25px", minHeight: "25px"}} alt="Logo"></img>
            <h4>{props.name}</h4>
        </div>
    )
}

export default ApplicationBox