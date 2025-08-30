import Image from "next/image"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { ListFilter, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Badge } from "./ui/badge"
import { Switch } from "./ui/switch"
import { Select, SelectTrigger } from "./ui/select"

const UploadSection = () => {
    const UplaodData = [
        {
            fileSource: "./fileicon.svg",
            fileDesc: "Tech requirements.pdf",
            fileSize: "200KB",
            badgeCont: "Legal",
            badgeCss: "text-[#175CD3] bg-[#EFF8FF] border-[#B2DDFF]",
            checked1: true,
            checked2: true,
            SelectVal: "Full",
        },
        {
            fileSource: "./fileicon.svg",
            fileDesc: "Dashboard screenshot.jpg",
            fileSize: "720 KB",
            badgeCont: "Vendors & Assets",
            badgeCss: "text-[#067647] bg-[#ECFDF3] border-[#ABEFC6]",
            checked1: true,
            checked2: true,
            SelectVal: "Onboarding",
        },
        {
            fileSource: "./fileicon2.svg",
            fileDesc: "Dashboard prototype recording.mp4",
            fileSize: "16 MB",
            badgeCont: "Technology",
            badgeCss: "text-[#B93815] bg-[#FEF6EE] border-[#F9DBAF]",
            checked1: false,
            checked2: true,
            SelectVal: "Franchisee",
        },
        {
            fileSource: "./fileicon2.svg",
            fileDesc: "Financial Overview",
            fileSize: "4.2 MB",
            badgeCont: "Financial",
            badgeCss: "text-[#C11574] bg-[#FDF2FA] border-[#FCCEEE]",
            checked1: true,
            checked2: true,
            SelectVal: "Prospect",
        },
        {
            fileSource: "./fileicon2.svg",
            fileDesc: "UX Design Guidelines.docx",
            fileSize: "400 KB",
            badgeCont: "Legal",
            badgeCss: "text-[#175CD3] bg-[#EFF8FF] border-[#B2DDFF]",
            checked1: true,
            checked2: false,
            SelectVal: "Onboarding",
        },
        {
            fileSource: "./fileicon.svg",
            fileDesc: "Dashboard interaction.aep",
            fileSize: "12 MB",
            badgeCont: "Legal",
            badgeCss: "text-[#175CD3] bg-[#EFF8FF] border-[#B2DDFF]",
            checked1: true,
            checked2: true,
            SelectVal: "Onboarding",
        },
        {
            fileSource: "./fileicon.svg",
            fileDesc: "Briefing call recording.mp3",
            fileSize: "18.6 MB",
            badgeCont: "Financial",
            badgeCss: "text-[#C11574] bg-[#FDF2FA] border-[#FCCEEE]",
            checked1: false,
            checked2: false,
            SelectVal: "Prospect",
        },
    ]
    return (
        <div className="p-2">
            <Card className="flex flex-col gap-3">
                <CardHeader className="border-b">
                    <CardTitle>My Uploads</CardTitle>
                    <CardDescription className="text-[#475467]">Documents that are uploaded by you.</CardDescription>
                    <CardAction><Image src={"./threedot.svg"} alt="thre" width={5} height={2} /></CardAction>
                </CardHeader>
                <CardContent className="p-0 overflow-y-auto w-full">
                    <div className="w-full flex justify-between gap-2 mb-4 px-5 ">
                        <div className="w-full max-w-sm relative">
                            <Input type="text" id="email" className="pl-8" placeholder="Search here.." />
                            <Label htmlFor="email" className="absolute top-[28%] left-3 text-[#667085]"><Search className="size-4" /></Label>
                        </div>
                        <Button variant={"outline"} className="text-[#344054]"><ListFilter />Filter</Button>
                    </div>
                    <table className="w-full overflow-y-auto">
                        <thead className="my-4 bg-[#F9FAFB]">
                            <tr className="text-xs text-[#475467]">
                                <th><Checkbox /></th>
                                <th >Document Name</th>
                                <th>Document Type</th>
                                <th>AI App Inclusion</th>
                                <th>Dashboard Inclusion</th>
                                <th>Stage Access</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                UplaodData.map((item, idx) => (
                                    <tr key={idx}>
                                        <td><Checkbox /></td>
                                        <td className="flex gap-1">
                                            <Image src={item.fileSource} alt="file" height={45} width={38} />
                                            <div>
                                                <h5 className="text-[#101828] sm:text-sm text-xs">{item.fileDesc}</h5>
                                                <p className="text-[#475467] text-xs">{item.fileSize}</p>
                                            </div>
                                        </td>
                                        <td><Badge variant="outline" className={`${item.badgeCss} rounded-full`}>{item.badgeCont}</Badge></td>
                                        <td><Switch checked={item.checked1} /></td>
                                        <td><Switch checked={item.checked2} /></td>
                                        <td><Select><SelectTrigger className="w-[150px]">{item.SelectVal}
                                        </SelectTrigger></Select></td>
                                        <td>
                                            <div className="flex gap-2 text-sm font-semibold">
                                                <span className="text-[#475467]">Delete</span>
                                                <span className="text-[#279DD4]">Edit</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </CardContent>
            </Card>
        </div>
    )
}

export default UploadSection