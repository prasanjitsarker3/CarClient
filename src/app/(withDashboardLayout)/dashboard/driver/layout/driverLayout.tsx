import { NavbarWrapper } from "@/Components/Common/DashboardNavbar";
import { AdminSidebarWrapper } from "@/Components/SidebarDashboard/AdminSidebar";
import { DriverSidebarWrapper } from "@/Components/SidebarDashboard/DriverSidebar";
import { UserSidebarWrapper } from "@/Components/SidebarDashboard/UserSidebar";

export default function DriverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <DriverSidebarWrapper></DriverSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
