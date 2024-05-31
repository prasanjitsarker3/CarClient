"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../Provider/ThemeSwicher";
import Link from "next/link";
import { useAuth } from "../Provider/AuthProvider";
import { userLogOut } from "../UtlitsFunc/handleLogOut";

const NavbarSec = ({ user }: { user: any }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { setUser } = useAuth();

  const routesMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
    driver: "/dashboard/driver",
  };

  const handleLogOut = async () => {
    await userLogOut();
    setUser(null);
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div>
      <Navbar onMenuOpenChange={setIsMenuOpen} className="" maxWidth="2xl">
        <NavbarContent className="">
          <NavbarBrand>
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/car">Car</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/about">About</Link>
          </NavbarItem>
          <NavbarItem>
            {user && <Link href={routesMap[user?.role]}>Dashboard</Link>}
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="">
          <NavbarItem className="hidden lg:flex">
            <ThemeSwitcher />
            {!user ? (
              <Link href="/login">
                <Button color="primary" variant="flat">
                  Sign In
                </Button>
              </Link>
            ) : (
              <Button onClick={handleLogOut} color="primary" variant="flat">
                Sign Out
              </Button>
            )}
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href="/">{item}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavbarSec;
