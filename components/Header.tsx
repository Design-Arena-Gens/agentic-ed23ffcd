"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={
        "px-3 py-2 rounded-md text-sm font-medium transition-colors " +
        (pathname === href
          ? "text-brand-700 bg-brand-50"
          : "text-slate-700 hover:text-brand-700 hover:bg-slate-100")
      }
    >
      {label}
    </Link>
  );

  return (
    <header className="container-responsive py-3">
      <div className="glass rounded-xl p-3 sm:p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-brand-600 grid place-content-center text-white shadow-glow">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-extrabold">Rojgar AI</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          {link("/jobs", "Jobs")}
          {link("/eligibility", "Eligibility")}
          {link("/about", "About")}
        </nav>
      </div>
    </header>
  );
}
