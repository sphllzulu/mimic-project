import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="trusted-by">
        <div className="circle">5k+</div>
        <p>Trusted By Company</p>
      </div>
      <div className="companies">
        <img src="DocuSign.png" alt="" className="company-logo" />
        <img src="pngwing.com.png" alt="" className="company-logo" />
        <img src="FedEx.png.png" alt="" className="company-logo" />
        <img src="Starling.png" alt="" className="company-logo" />
      </div>
    </div>
  );
};

export default Footer;
