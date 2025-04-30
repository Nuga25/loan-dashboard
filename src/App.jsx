import React from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Overview from "./components/Overview";
import RecentActivities from "./components/RecentActivities";

const App = () => {
  return (
    <section className="grid grid-cols-[.8fr_4fr] overflow-x-hidden">
      <Aside />
      <div>
        <Header />
        <Overview />
        <RecentActivities />
      </div>
    </section>
  );
};

export default App;
