"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative flex items-center">
      {/* Desktop Nav */}
      <div className="hidden sm:flex flex-wrap items-center gap-2 text-sm text-slate-200">
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
      </div>

      {/* Hamburger (Mobile) */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="sm:hidden ml-2 flex flex-col gap-1.5"
        aria-label="Toggle menu"
      >
        <span className="hamburger-line h-0.5 w-6 bg-white" />
        <span className="hamburger-line h-0.5 w-5 bg-white" />
        <span className="hamburger-line h-0.5 w-4 bg-white" />
      </button>

      {/* Mobile Menu */}
      {open && (
  <div className="absolute right-0 top-12 z-50 w-52 rounded-2xl 
    border border-white/5 
    bg-white/5 
    backdrop-blur-xl 
    shadow-[0_8px_30px_rgba(0,0,0,0.35)] 
    sm:hidden">
    
    <div className="flex flex-col gap-2 p-2 text-sm text-slate-200">
      {links.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`rounded-xl px-4 py-2 transition text-center ${
              active
                ? "bg-white/15 text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                : "hover:bg-white/10 text-slate-300"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  </div>
)}
    </div>
  );
}
