"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Manage",
    href: "/dashboard/manage",
  },
  {
    name: "Categories",
    href: "/dashboard/categories",
  },
  {
    name: "Transactions",
    href: "/dashboard/transactions",
  },
  {
    name: "Currency",
    href: "/wizard",
  },
];

export function DashboardNavigation() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            link.href === pathname
              ? "text-foreground font-bold text-lg border-b-4 border-sky-500"
              : "text-muted-foreground hover:text-foreground text-lg"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
