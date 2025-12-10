"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-200">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`rounded-full px-4 py-2 transition text-center min-w-[92px] ${
              active
                ? "bg-white/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                : "hover:bg-white/10 text-slate-300"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

