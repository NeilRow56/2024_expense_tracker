import { ReactNode } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="rekative h-screen w-full items-center justify-center flex-col flex">
      {children}
    </main>
  );
}
