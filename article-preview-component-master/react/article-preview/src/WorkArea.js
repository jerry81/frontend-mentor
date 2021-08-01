import "./WorkArea.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import drawers from "./images/drawers.jpg";

function WorkArea() {
  /* styles */
  const workStyle = useMediaQuery("(min-width:600px)")
    ? "work d-work"
    : "work m-work";
  /* widgets */
  function BoldText() {
    return (
      <div className="bold">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </div>
    );
  }
  function Light() {
    return (
      <div className="desaturated-dark-blue light">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </div>
    );
  }

  /* render */
  return (
    <div className={workStyle}>
      <img src={drawers} alt="drawers" />
      <BoldText />
      <Light/>
    </div>
  );
}

export default WorkArea;
