import {
  Facebook,
  Instagram,
  Twitter,
  MessageCircleMore,
  Phone,
} from "lucide-react";
import Link from "next/link";

function Links() {
  const Icons = [
    { Logo: Phone, href: "tel:+923150460352" },
    { Logo: MessageCircleMore, href: "https://wa.me/+923150460352" },
    {
      Logo: Instagram,
      href: "https://www.instagram.com/awais_anser_?igsh=MXhzdmhxbzh0M3B3Zw==",
    },
    { Logo: Facebook, href: "https://www.facebook.com/awais.anser.520" },
    { Logo: Twitter, href: "https://x.com/awais_anser_?s=21" },
  ];
  return (
    <section className="flex gap-10 md:gap-20 items-center justify-center glass rounded-3xl p-6 text-center sm:p-8">
      {Icons.map(({ Logo, href }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 hover:-rotate-3 transition-transform duration-300"
        >
          <Logo className="text-slate-400 opacity-80 h-5 w-5 md:h-10 md:w-10" />
        </Link>
      ))}
    </section>
  );
}

export default Links;
