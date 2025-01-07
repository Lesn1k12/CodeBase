import React, { useState } from "react";
import "./Dashboard.css";

import Navbar from "../../components/navbar/Navbar";
import RepoSideBar from "../../components/repo_sidebar/RepoSideBar";
import CenterContent from "../../components/center_content/CenterContent";

import DefaultDashboardComponent from "../../components/default_dashboard_component/DefaultDashboardComponent";
import RepoContent from "../../components/repo_content/RepoContent";

const CONTENT_TYPES = {
  DEFAULT: "DefaultContent",
  REPO: "RepoContent",
  PERSON: "PersonContent",
};

const Dashboard = () => {
  const [active, setActive] = useState(1)

  const displayData = () => {
    switch(active){
      case 1:
        return <DefaultDashboardComponent />
      case 2:
        return <RepoContent />
      // case 3:
      //   return <Income />
      // case 4: 
      //   return <Expenses />
      default: 
        return <DefaultDashboardComponent />
    }
  }

  function getRepo(){

  }

  return (
    <div className="container">
      <div className="left sidebar">
        <RepoSideBar active={active} setActive={setActive}/>
      </div>
      <div className="center">
        {displayData()}
      </div>
      <div className="right sidebar">
        <Navbar active={active} setActive={setActive}/>
      </div>
    </div>
  );
};

export default Dashboard;
