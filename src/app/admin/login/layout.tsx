import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Login",
  description: "MESA staff admin login",
};

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout bypasses the admin layout's auth check
  // by being a nested layout that renders children directly
  return <>{children}</>;
}
