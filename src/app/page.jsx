import React from "react";
import "@/styles/Root.css";
import "@/app/styles/globals.css"
// import './globals.css'
import Header from "@/Components/Common/Header/header";
import SectionOne from "@/Components/MP-SectionOne/sectionOne";

function page() {
  return (
    <>
      <Header />
      <SectionOne />
    </>
  );
}

export default page;
