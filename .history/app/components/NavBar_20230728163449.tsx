"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import SchoolIcon from "@mui/icons-material/School";

type CustomLinkProps = {
  href: string;
  title: string;
  className: string | object;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      <SchoolIcon fontSize="large" />
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
    <header
      className="w-full px-32 py-8 font-bold
            flex items-center justify-between sticky top-0 z-10 bg-slate-800 text-white"
    >
      <nav>
        <CustomLink href="/" title="Logo" className="mr-4" />
        {/* <CustomLink href="/about" title="About" className="mx-4" /> */}
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        {pathname === "/school" ? null : (
          <a
            href="/school"
            className={` w-max-content mx-3 text-orange-300 border border-white p-3 rounded-lg hover:border-none hover:text-white duration-500`}
          >
            Register School
          </a>
        )}

        <a
          href="https://www.linkedin.com/in/marcus-dashe-15a088202"
          target={"_blank"}
          className="w-6 mx-3"
        ></a>
        <a
          href="https://www.github.com/marcusdashe"
          target={"_blank"}
          className="w-6 ml-3"
        >
          {/* <GithubIcon /> */}
        </a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50]">
        {/* <Logo /> */}
      </div>
    </header>
  );
};

export default Navbar;
