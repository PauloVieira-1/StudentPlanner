import './FeatureBox.css';
function FeatureBox({title, active, component}) {
    return (
        <>
        <div className={active ? " transition-left" : "transition-down"}>
            <h2 className='mb-2 text-custom-color-grey-text-emphasis'>
            {title}
            </h2>
            <div id='calendar' className=''>
                {component}
                <h1>HWdo</h1>
            </div>
        </div>
        </>
    );
}

export default FeatureBox;