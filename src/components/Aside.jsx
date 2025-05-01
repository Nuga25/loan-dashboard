import React from "react";
import SidebarListItems from "./SidebarListItems";

const Aside = ({ setActiveComponent, activeComponent }) => {
  return (
    <section className="flex justify-center bg-deep-blue">
      <div className="grid grid-rows-[.8fr_3.5fr] p-4">
        <img className="mx-auto my-3" src="Bright Logo.svg" alt="logo" />
        <section>
          <SidebarListItems
            setActiveComponent={setActiveComponent}
            activeComponent={activeComponent}
          />
        </section>
      </div>
    </section>
  );
};

export default Aside;
