import Image from "next/image";
import React from "react";
import Head from "next/head";
import SchoolListed from "@/app/components/SchoolListed";

export default function Home() {
  return (
    <div className="bg-slate-300 min-h-screen">
      <Head>
        <title>School List</title>
        <meta name="description" content="A school management system" />
      </Head>

      <main className="container  py-10 px-4 flex flex-col items-center justify-start">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">
          Onboarded Secondary Schools
        </h1>
        <SchoolListed />
      </main>
    </div>
  );
}
