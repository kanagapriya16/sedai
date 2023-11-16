import React from "react";
import "../styles/AutoSlide.css";
import google from "../images/google.png";
import dell from "../images/dell.png";
import amazon from "../images/amazon.png";
import sony from "../images/sony.png";
import netflix from "../images/netflix.png";
import fabric from "../images/Fabric.png";
import toyota from "../images/Toyota.png";
import walmart from "../images/walmart.png";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image8 from "../images/image8.jpg";

function AutoSlide() {


  return (
    <div className="autoslide">
      <div className="logos">
        <div className="logo-slide">
          <img alt="" src="https://assets-global.website-files.com/6218de564a814751871bcb7d/63f60e4809b935055322f332_fabric.png" />
          <img alt="" src={dell} />
          <img alt="" src={walmart} />
          <img alt="" src={sony} />
          <img alt="" src={amazon} />
          <img alt="" src={fabric} />
          <img alt="" src={netflix} />
          <img alt="" src={toyota} />
        </div>
        <div className="logo-slide">
          <img alt="" src={google} />
          <img alt="" src={dell} />
          <img alt="" src={walmart} />
          <img alt="" src={sony} />
          <img alt="" src={amazon} />
          <img alt="" src={fabric} />
          <img alt="" src={netflix} />
          <img alt="" src={toyota} />
        </div>
      </div>
      <div className="slide-row">
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            With 60% of all large enterprises projected to <br />
            adopt autonomous technologies by 2024,
            <br />
            customers like Fabric have already gotten on
            <br />
            board with Sedai to stay competitive and scale.
            <br />
            We are excited to back this talented team and <br />
            look forward to the growth ahead.
          </p>
          <img className="circular-square" alt="" src={image1} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Venkat Gopalan
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Chief Digital Officer & CTO, Belcorp
          </p>
        </div>
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            It’s critical for us to give campers the best <br />
            possible web experience. We’ve used Sedai to
            <br />
            reduce the latency on our AWS Lambda services
            <br />
            by 34%, and it’s been effortless for our team to
            <br />
            rollout and manage.
          </p>
          <img className="circular-square" alt="" src={image2} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Kristin Smith
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Engineering Manager (DevOps), Campspot
          </p>
        </div>
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            Sedai has created the tool every SRE dreams of <br />
            —autonomous cloud management to proactively
            <br />
            and safely address issues in production. The
            <br />
            improvements that companies are seeing in
            <br />
            reliability, uptime, and efficiency show how <br />
            beneficial this technology is.
          </p>
          <img className="circular-square" alt="" src={image3} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Matt Howard
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            General Partner, Norwest Venture Partners
          </p>
        </div>
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            With 60% of all large enterprises projected to <br />
            adopt autonomous technologies by 2024,
            <br />
            customers like Fabric have already gotten on
            <br />
            board with Sedai to stay competitive and scale.
            <br />
            We are excited to back this talented team and <br />
            look forward to the growth ahead.
          </p>
          <img className="circular-square" alt="" src={image4} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Tim Guleri
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Managing Partner at Sierra Ventures
          </p>
        </div>
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            Sedai watches over our Lambdas and <br />
            proactively makes configuration adjustments
            <br />
            depending on what we need to do — whether
            <br />
            it’s to minimize the latency or minimize our cloud
            <br />
            costs.
          </p>
          <img className="circular-square" alt="" src={image5} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Kenneth Nguyen
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Co-Founder, Tasq
          </p>
        </div>
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            With 60% of all large enterprises projected to <br />
            adopt autonomous technologies by 2024,
            <br />
            customers like Fabric have already gotten on
            <br />
            board with Sedai to stay competitive and scale.
            <br />
            We are excited to back this talented team and <br />
            look forward to the growth ahead.
          </p>
          <img className="circular-square" alt="" src={image1} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Venkat Gopalan
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Chief Digital Officer & CTO, Belcorp
          </p>
        </div>
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            With 60% of all large enterprises projected to <br />
            adopt autonomous technologies by 2024,
            <br />
            customers like Fabric have already gotten on
            <br />
            board with Sedai to stay competitive and scale.
            <br />
            We are excited to back this talented team and <br />
            look forward to the growth ahead.
          </p>
          <img className="circular-square" alt="" src={image1} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Venkat Gopalan
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Chief Digital Officer & CTO, Belcorp
          </p>
        </div>
        <div
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            Lenders rely on Canopy to provide fast, reliable <br />
            service. We use Sedai to keep our AWS Lambda
            <br />
            functions tuned for optimal performance, and
            <br />
            we’ve used Sedai to reduce the latency on our
            <br />
            AWS Lambda services by 48%. Sedai’s operating <br />
            in a complex environment with over 11,000 <br />
            Lambdas managed and 30,000 releases <br />
            evaluated in the last 90 days.
          </p>
          <img className="circular-square" alt="" src={image8} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Drew Miller
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Senior Engineer, Canopy
          </p>
        </div>
        <div
          // key={index}
          // className={`slide ${pausedIndex === index ? 'paused' : ''}`}
          // onMouseEnter={() => handleMouseEnter(index)}
          // onMouseLeave={handleMouseLeave}
          className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            With 60% of all large enterprises projected to <br />
            adopt autonomous technologies by 2024,
            <br />
            customers like Fabric have already gotten on
            <br />
            board with Sedai to stay competitive and scale.
            <br />
            We are excited to back this talented team and <br />
            look forward to the growth ahead.
          </p>
          <img className="circular-square" alt="" src={image1} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Venkat Gopalan
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Chief Digital Officer & CTO, Belcorp
          </p>
        </div>
        <div
        className="slide"
        >
          <p
            style={{
              marginLeft: "6px",
              fontFamily: "Arial, Helvetica,sans serif",
            }}
          >
            It’s critical for us to give campers the best <br />
            possible web experience. We’ve used Sedai to
            <br />
            reduce the latency on our AWS Lambda services
            <br />
            by 34%, and it’s been effortless for our team to
            <br />
            rollout and manage.
          </p>
          <img className="circular-square" alt="" src={image2} />
          <p style={{ fontSize: "15px", marginLeft: "5%", fontWeight: "bold" }}>
            Kristin Smith
          </p>
          <br />
          <p
            style={{
              color: "grey",
              fontSize: "15px",
              marginLeft: "5%",
              fontWeight: "bold",
              marginTop: "-17px",
            }}
          >
            Engineering Manager (DevOps), Campspot
          </p>
        </div>
      </div>
    </div>
  );
}

export default AutoSlide;