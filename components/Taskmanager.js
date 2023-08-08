import React from "react";
import Styles from "../src/app/style.module.css";
const Taskmanager = async () => {
  const products = await FetchserverApi();
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
              <li key={element.id}>
                {element.title}  {element.price}  {element.brand} {" "}
                {element.category}
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

export default Taskmanager;

const FetchserverApi = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
};
