import React, { useState } from "react";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Overview from "./components/Overview";
import RecentActivities from "./components/RecentActivities";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Overview");

  const renderContent = () => {
    switch (activeComponent) {
      case "Overview":
        return (
          <div>
            <Overview />
            <RecentActivities />
          </div>
        );
      case "Records":
        return <div>Records Component</div>;
      case "Transactions":
        return <div>Transactions Component</div>;
      case "Users":
        return <div>Users Component</div>;
      case "Staff":
        return <div>Staff Component</div>;
      case "Analytics":
        return <div>Analytics Component</div>;
      case "Settings":
        return <div>Settings Component</div>;
      case "Security":
        return <div>Security Component</div>;
      case "Switch board":
        return <div>Switch Board Component</div>;
      case "Logout":
        return <div>Logging out...</div>; // optional: trigger a logout here
      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <section className="grid grid-cols-[.8fr_4fr] overflow-x-hidden">
      <Aside
        setActiveComponent={setActiveComponent}
        activeComponent={activeComponent}
      />
      <div>
        <Header />
        {renderContent()}
      </div>
    </section>
  );
};

export default App;
