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
  const [active, setActive] = useState(1);

  const displayData = () => {
    switch (active) {
      case 1:
        return <DefaultDashboardComponent />;
      case 2:
        return <RepoContent repoId={1} />;
      default:
        return <DefaultDashboardComponent />;
    }
  };

  function getRepo() {}

  return (
    <div className="container">
      <RepoSideBar />
      <div className="center">{displayData()}</div>
      <Navbar active={active} setActive={setActive} />
    </div>
  );
};

export default Dashboard;
