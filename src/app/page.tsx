import Menuicons from "../../components/menuicons";

import Taskmanager from '../../components/Taskmanager'
import './globals.css'

export default function Home() {
  return (
    <>
 
      <div className="d-flex justify-content-center col-md-8 mx-auto">
        <div>
          {" "}
          <Menuicons
            urlpath="https://www.facebook.com/"
            iconname="Facebook"
            bgcolor=" #58b7ff"
            target="_blank"
            text="Facebook"
            icon='https://img.icons8.com/ios/50/baby-weight.png'
          ></Menuicons>{" "}
        </div>
        <div>
          {" "}
          <Menuicons
            urlpath="https://www.google.com/"
            iconname="Facebook"
            bgcolor="#32a875"
            target="_blank"
            text="Google"
            icon='https://img.icons8.com/ios/100/baby-weight.png'
          ></Menuicons>{" "}
        </div>
        <div>
          {" "}
          <Menuicons
            urlpath="https://www.gmail.com/"
            iconname="Facebook"
            bgcolor="#e3626a"
            target="_blank"
            text="Gmail"
            icon='https://img.icons8.com/ios/100/baby-weight.png'
          ></Menuicons>{" "}
        </div>
        <div>
          {" "}
          <Menuicons
            urlpath="https://www.instagram.com/"
            iconname="Facebook"
            bgcolor="#03f8fc"
            target="_blank"
            text="Instagram"
            icon='https://img.icons8.com/ios/100/baby-weight.png'
          ></Menuicons>{" "}
        </div>
      </div>
      <div>
      <Taskmanager></Taskmanager>
    </div>
  
    </>
  );
}
