import NavbarSec from "@/Components/Common/NavbarSec";
import { UserInformation } from "@/Components/ServerAction/Auth/UserRegister";
import React from "react";

const CommonLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await UserInformation();
  return (
    <div>
      <NavbarSec user={user} />
      {children}
    </div>
  );
};

export default CommonLayout;
