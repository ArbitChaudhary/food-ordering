import React from "react";

interface IMain {
  children: React.ReactNode;
}

const Main: React.FC<IMain> = ({ children }) => {
  return (
    <div
      className="relative"
      style={{ maxWidth: "calc(100% - 250px)", width: "100%" }}
    >
      {children}
    </div>
  );
};
export default Main;
