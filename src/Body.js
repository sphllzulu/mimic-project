import "./Body.css";
import { GoArrowUpRight } from "react-icons/go";

const Body = () => {
  return (
    <div>
      <div className="container">
        <h1 className="heading">
          Stunning <br/>
          Creative Minds.
        </h1>
        <p className="paragraph" >
          With <b>Minds</b>,remote teams can organize projects, <br />manage shifting
          priorities, and get work done
        </p>
        <button className="button">Get more <GoArrowUpRight /></button>
      </div>
      

    </div>
  );
};
export default Body;
