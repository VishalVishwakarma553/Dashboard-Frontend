import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import InsightSection from "@/Components/InsightSection"
export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-2">
        <Navbar />
        <InsightSection />
      </div>
    </div>
  );
}
