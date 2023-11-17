import React from "react";
import kubernetes from '../images/Kubernetes.png'
import '../styles/Container.css'
import AWSLambda from '../images/AwsLambda.png'
import AwsEcs from '../images/aws_ecs.png'
import { Divider } from "@mui/material";
import sedai from '../images/sedai.png'

function Container() {
  return (
    <div className="container">
      <div className="container-body">
        <div className="container1">
            <img alt="" src={kubernetes}/>
            <h3>Kubernetes</h3>
            <p>
              Autonomusly scale <br/>
              Kubernetes applications and <br/>
              clusters for maximum cost <br/>
              savings and performance
            </p>
        </div>
        <div className="container2">
        <img alt="" src={AWSLambda}/>
        <h3>AWS Lambda</h3>
        <p>
        Autonomus concurrency <br/>
        and performance tuning for <br/>
        continuos peak <br/>
        performance without <br/>
        overprovisioning
        </p>
        </div>
        <div className="container3">
        <img alt="" src={AwsEcs}/>
        <h3>AWS ECS</h3>
        <p>
        Achieve continuous cost <br/>
        optimization for maximum <br/>
        savings without sacrificing <br/>
        performance for AWS ECS
        </p>
        </div>
      </div>
      <div className="demo">
        <h2>Book a demo</h2>
        <div className="calender">
          <div className="sedai-demo">
            <img alt="" src={sedai}/>
          </div>
          <div className="calender-divider">
          <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    background:"grey",
                    height: "100%",
                  }}
                />
                </div>
          <div className="calender-table">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;