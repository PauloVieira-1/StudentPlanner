import './FeatureBox.css';
function FeatureBox({title, active, component}) {
    return (
        <>
        <div className={active ? " transition-left" : "transition-down transition-reset"} style={{height: "0"}}>
            <h2 className='mb-2 text-custom-color-grey-text-emphasis'>
            {title}
            </h2>
            <div id='calendar' className=''>
                {component}
            </div>
        </div>
        </>
    );
}

export default FeatureBox;