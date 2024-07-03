import "./Body.css";

const Body = () => {
  return (
    <div>
      <div className="container">
        <h1 className="Heading">
          Stunning <br />
          Creative Minds.
        </h1>
        <p className="paragraph">
          With <b>Minds</b>,remote teams can organize projects, <br />manage shifting
          priorities, and get work done
        </p>
        <button className="button">Get more <i class="fa-solid fa-arrow-up-long"></i></button>
      </div>
      <div className="container-balls">
      <div className="paintBall1">
        <div className="ball1"></div>
        <div className="paint1"></div>
      </div>
      <div className="paintBall2">
        <div className="ball2"></div>
        <div className="paint2"></div>
      </div>
      <div className="paintBall3">
        <div className="ball3"></div>
        <div className="paint3"></div>
      </div>

      
    </div>

    </div>
  );
};
export default Body;
