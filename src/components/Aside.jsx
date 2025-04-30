import React from "react";
import SidebarListItems from "./SidebarListItems";

const Aside = () => {
  return (
    <section className="flex justify-center bg-deep-blue">
      <div className="grid grid-rows-[.8fr_3.5fr] p-4">
        <img
          className="mx-auto mt-3 mb-10"
          src="./src/assets/Bright Logo.svg"
          alt="logo"
        />
        <section>
          <SidebarListItems />
        </section>
      </div>
    </section>
  );
};

export default Aside;
