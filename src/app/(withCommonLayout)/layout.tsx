import NavbarSec from "@/Components/Common/NavbarSec";
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarSec />
      {children}
    </div>
  );
};

export default CommonLayout;
