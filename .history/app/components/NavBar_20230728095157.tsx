"use client";

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import Logo from "./Logo";
// import { TwitterIcon, GithubIcon, LinkedInIcon } from "./Icons";
// import { motion } from "framer-motion";

type CustomLinkProps = {
  href: string;
  title: string;
  className: string | object;
};

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  //   const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          "w-0" //   router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <header
      className="w-full px-32 py-8 font-medium 
            flex items-center justify-between sticky top-0 z-10 bg-slate-800"
    >
      <nav>
        <CustomLink href="/" title="Logo" className="mr-4" />
        {/* <CustomLink href="/about" title="About" className="mx-4" /> */}
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <a href="/school" className="w-max-content mx-3">
          Register School
        </a>
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
