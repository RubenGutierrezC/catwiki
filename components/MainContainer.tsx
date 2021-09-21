import React, { FunctionComponent } from "react";

const MainContainer: FunctionComponent = ({ children }) => (
  <div className="pt-3 md:pt-7 max-w-screen-xl mx-2.5 md:mx-5 xl:mx-auto">
    {" "}
    {children}
  </div>
);

export default MainContainer;
