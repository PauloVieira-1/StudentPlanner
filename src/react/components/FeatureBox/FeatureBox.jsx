import "./FeatureBox.css";
function FeatureBox({ title, active, component }) {
  return (
    <>
      <div
        className={
          active ? " transition-left" : "transition-down transition-reset"
        }
        style={{ height: "100%" }}
      >
        <h2 className="ps-3 mb-3 text-custom-color-grey-text-emphasis">{title}</h2>
        <div id="calendar" className="">
          {component}
        </div>
      </div>
    </>
  );
}

export default FeatureBox;
