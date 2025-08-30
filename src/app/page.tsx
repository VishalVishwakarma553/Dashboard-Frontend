"use client"
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import InsightSection from "@/Components/InsightSection"
import UploadSection from "@/Components/UploadSection";
import { useState } from "react";
export default function Home() {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="flex relative">
      <Sidebar navbar={navbar} setNavbar={setNavbar} />
      <div className={`w-full p-2 ${navbar ? "absolute inset-0 z-10 blur-[2px] overflow-hidden" : ""}`}>
        <Navbar setNavbar={setNavbar} />
        <InsightSection />
        <UploadSection />
      </div>
    </div>
  );
}
