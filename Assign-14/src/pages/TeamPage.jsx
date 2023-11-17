import React from "react";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import PageName from "../components/PageName";
import TeamMembers from "../components/TeamMembers";

function TeamPage() {
  return (
    <div className="teamPage">
      <PageName />
      <TeamMembers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default TeamPage;
