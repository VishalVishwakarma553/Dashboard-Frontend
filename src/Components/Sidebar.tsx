import { ArrowBigLeftDash } from "lucide-react"
import Image from "next/image"

const Sidebar = ({ navbar, setNavbar }: { navbar: boolean, setNavbar: (arg: boolean) => void }) => {
  const SideBarContent = ["Home", "Stages & Checklist", "Upload Docs", "Preferred Vendors", "Tech Stack", "Targets", "Zee Sales Targets", "MAI Settings", "Pending Questions"]

  return (
    <div className={`z-50 w-70 min-h-screen p-4 bg-[#11455D] relative overflow-y-auto ${!navbar ? "hidden" : ""} md:block `}>
      {/* Close button for mobile  */}
      <button className="md:hidden absolute top-2 right-2" onClick={() => setNavbar(false)}>
        <ArrowBigLeftDash className="size-6 text-muted-foreground" />
      </button>

      {/* Logo */}
      <Image
        src={"./logo.svg"}
        alt="logo"
        width={140}
        height={35}
        className="mb-4"
      />
      <div className="flex flex-col gap-3 justify-between">
        <div className="flex flex-col gap-3 ">
          {
            SideBarContent.map((item, idx) => (
              <div key={idx} className={`${idx == 0 ? "bg-[#FFFFFF1A]" : ""} rounded-sm hover:bg-[#FFFFFF1A] p-2 flex items-center gap-3`}>
                <p className="text-[#FFFFFF99] text-sm">{item}</p>
                {idx == SideBarContent.length - 1 && <p className="h-4 w-5 rounded-2xl bg-white flex items-center justify-center text-sm text-blue-900">3</p>}
              </div>
            ))
          }
        </div>
        <p className="text-sm text-[#FFFFFF99] absolute bottom-6">Logout</p>
      </div>
    </div>
  )
}

export default Sidebar