import { ReactNode } from "react";
import Header from "../../components/Header";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1">{children}</main>
    </div>
  );
}
