import React from "react";
import PageName from "../components/PageName";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import ProjectsMain from "../components/ProjectsMain";

function ProjectsPage() {
  return (
    <div className="projects">
      <PageName />
      <ProjectsMain />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default ProjectsPage;
