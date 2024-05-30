import { NavbarWrapper } from "@/Components/Common/DashboardNavbar";
import { AdminSidebarWrapper } from "@/Components/SidebarDashboard/AdminSidebar";
import { UserSidebarWrapper } from "@/Components/SidebarDashboard/UserSidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <AdminSidebarWrapper></AdminSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
