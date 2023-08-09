"use client";
import React from "react";
import { useState, useEffect } from "react";
import Styles from "../src/app/style.module.css";
import axios from "axios";
const Taskmanager = () => {
  let [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/api/employee").then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <>
      <div
        className={`${Styles.margin} ${Styles.height} ${Styles.radius} ${Styles.overflow} col-md-7 mx-auto`}
      >
        <h3 className="text-white">Tasks</h3>
        <div className={Styles.horizontalLine}></div>
        <ol>
          {products.slice(0, 10).map((element) => {
            return (
              <li key={element.empid}>
                {element.dob} {element.empid} {element.name} {element.city}{" "}
                {element.age} {element.salary}  {element.state}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Taskmanager;
