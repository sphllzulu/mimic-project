import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="container-right">
      <div className="orangeBalls">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
        <div className="shiny-ball"></div>
      </div>
      <div className="bell">
        <img
          src="notification.png"
          alt=""
          style={{ width: "60px", height: "60px" }}
        />
        <p>
          500 clients across <br />
          15 countries
        </p>
      </div>
      <div className="cards">
        <div className="card1">
          <img
            src="adrian-Photoroom.png"
            alt="Adrian Lunga"
            className="adrian-image"
          />
          <div className="text-container1">
            <h1>ADRIAN LUNGA</h1>
            <h2>Founder,</h2>
            <h2>Engineering Inc.</h2>
          </div>
        </div>

        <div className="card2">
          <div className="text-container2">
            <p>
              The quality of their work stands out the most. They're
              knowledgeable and provide useful feedback.
            </p>
          </div>
          <img src="hourglass.png" alt="" className="card-image" />
        </div>
      </div>
{/* <div className="profiles-container">
      <div className="profile-pics">
        <div className="pic1"><img src="profile.jpg" alt="" style={{ width: "30px", height: "30px" }} /></div>
        <div className="pic2"><img src="profile.jpg" alt="" style={{ width: "30px", height: "30px" }} /></div>
        <div className="pic3"><img src="profile.jpg" alt="" style={{ width: "30px", height: "30px" }} /></div>
        <div className="pic4"><img src="profile.jpg" alt="" style={{ width: "30px", height: "30px" }} /></div>
      </div>
      <div>
      <div className="text">
        <p><b>+21K</b> recruiters have <br />already subscribed</p></div>
    </div>
      </div> */}
      
    </div>
  );
};
export default Reviews;
