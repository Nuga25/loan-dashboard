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
        return (
          <div>
            Records Component <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Transactions":
        return (
          <div>
            Transactions Component <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Users":
        return (
          <div>
            Users Component
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Staff":
        return (
          <div>
            Staff Component
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Analytics":
        return (
          <div>
            Analytics Component
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Settings":
        return (
          <div>
            Settings Component
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Security":
        return (
          <div>
            Security Component
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Switch board":
        return (
          <div>
            Switch Board Component
            <br />
            <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolor repudiandae doloremque dolorem ab iste, fugit modi vel vitae
            quas repellendus voluptas repellat obcaecati natus quam voluptatem
            fugiat! Totam, eaque dolor?
          </div>
        );
      case "Logout":
        return <div>Logging out...</div>;
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
