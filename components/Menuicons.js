import React from "react";
import Styles from "../src/app/style.module.css";
const Menuicons = (props) => {
  return (
    <>
      <a
        className={Styles.center}
        href={props.urlpath}
        target={props.target}
        color={props.bgcolor}
        style={{ backgroundColor: props.bgcolor }}
      >
        <div className="d-flex flex-column justify-content-around align-items-center">
          <img src={props.icon} alt="Image not Found" width={80} height={80} ></img>
          <h2 className="text-white ">{props.text}</h2>
        </div>
      </a>
    </>
  );
};

export default Menuicons;
