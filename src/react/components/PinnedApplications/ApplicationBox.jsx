function ApplicationBox(props){
    const handleClick = () => {

        // let link = `https://www.google.com/search?q=${props.link}`

        window.open("apple.com");
    }


    return (
        <div className="rounded-4 bg-custom-color-grey-light p-3 m-3 img-effect" style={{height:"160px", width:"140px"}} onClick={handleClick}>
            <h4>{props.name}</h4>
        </div>
    )
}

export default ApplicationBox