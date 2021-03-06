import "./WorkArea.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import drawers from "./images/drawers.jpg";
import michelle from "./images/avatar-michelle.jpg";
import share from "./images/icon-share.svg";
import active from "./images/icon-active.svg";
import fb from "./images/icon-facebook.svg";
import pin from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
import { useState, useRef } from "react";

function WorkArea() {
  const [sharing, setSharing] = useState(false);
  const [popupX, setPopupX] = useState(0)
  const [popupY, setPopupY] = useState(0)
  /* styles */
  const dsk = useMediaQuery("(min-width:600px)");
  const workStyle = dsk ? "work d-work" : "work m-work";
  const drawersC = dsk ? "drawers" : "";
  const nonImage = dsk ? "nonImage" : "";
  const popupStyle = {
    left: popupX,
    top: popupY
  }
  /* refs */
  const shareButton = useRef(null);
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
  function Active() {
    return (
      <footer className="active">
        <div className="leftA">
          <span className="share-text">SHARE</span>
          <div className="shareIcons">
            <img className="shareIcon" src={fb} alt="michelle" />
            <img className="shareIcon" src={twitter} alt="michelle" />
            <img className="shareIcon" src={pin} alt="michelle" />
          </div>
        </div>
        <div className="shareBorderA" onClick={toggleActive}>
          <img className="share" src={active} alt="share" />
        </div>
      </footer>
    );
  }
  function Profile() {
    return (
      <div className="profile">
        <span className="name">Michelle Appleton</span>
        <span className="grayish-blue">28 Jun 2020</span>
      </div>
    );
  }
  function ShareBorder() {
    return (
      <div
        className="shareBorder"
        ref={shareButton}
        onClick={toggleActive}
        aria-describedby="popover"
      >
        <img className="share" src={share} alt="share" />
      </div>
    );
  }
  function SharePopup() {
    return sharing && (
      <div className='popup' style={popupStyle}>
        <Active/>
      </div>
    );
  }
  function Footer() {
    return !sharing || dsk ? (
      <footer className="foot">
        <div className="left">
          <img className="face" src={michelle} alt="michelle" />
          <Profile />
        </div>
        <ShareBorder />
        <SharePopup />
      </footer>
    ) : (
      <Active />
    );
  }
  /* methods */
  function toggleActive(ev) {
    setPopupX(ev.clientX - 150);
    setPopupY(ev.clientY - 100)
    setSharing(!sharing);
  }


  /* render */
  return (
    <div className={workStyle}>
      <img src={drawers} alt="drawers" className={drawersC} />
      <div className={nonImage}>
        <BoldText />
        <Light />
        <Footer />
      </div>
    </div>
  );
}

export default WorkArea;
