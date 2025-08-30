import { Card, CardContent} from "@/Components/ui/card"
import { Chart } from "./Chart"
import { Separator } from "./ui/separator"
import Image from "next/image"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

const InsightSection = () => {
    return (
        <div className="p-2 grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-3">
            <div className="h-[569px]">
                <Card>
                    <CardContent>
                        <h1 className="text-center font-semibold">Account Progress</h1>
                        <Chart />
                        <Separator />
                        <div className="p-3 rounded-2xl bg-[#F6F7FB] my-4">
                            <h3 className="text-sm font-medium text-[#1C222B] my-3">Steps Completed</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <span className="h-2.5 w-2.5 bg-[#D9D9D9] rounded-full"></span>
                                        <p className="text-xs text-[#455468]">Profile Setup</p>
                                    </div>
                                    <Image src={"./checked.svg.svg"} alt="checked" width={15} height={15} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <span className="h-2.5 w-2.5 bg-[#D9D9D9] rounded-full"></span>
                                        <p className="text-xs text-[#455468]">Initial Training</p>
                                    </div>
                                    <Image src={"./checked.svg.svg"} alt="checked" width={15} height={15} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <span className="h-2.5 w-2.5 bg-[#D9D9D9] rounded-full"></span>
                                        <p className="text-xs text-[#455468]">Legal Document</p>
                                    </div>
                                    <Image src={"./checked.svg.svg"} alt="checked" width={15} height={15} />
                                </div>
                            </div>
                        </div>
                        <div className="p-3 rounded-2xl bg-[#F6F7FB]">
                            <h3 className="text-sm font-medium text-[#1C222B] my-3">Steps Remaining</h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <span className="h-2.5 w-2.5 bg-[#D9D9D9] rounded-full"></span>
                                        <p className="text-xs text-[#455468]">Financial Integration</p>
                                    </div>
                                    <Image src={"./unchecked.svg"} alt="checked" width={15} height={15} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2 items-center">
                                        <span className="h-2.5 w-2.5 bg-[#D9D9D9] rounded-full"></span>
                                        <p className="text-xs text-[#455468]">Final Review</p>
                                    </div>
                                    <Image src={"./unchecked.svg"} alt="checked" width={15} height={15} />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col gap-5 h-[569px]">
                <Card className="h-[270]">
                    <CardContent>
                        <h1 className="font-semibold">Total Franchisees Onboard</h1>
                        <div className="flex justify-between items-center mb-2 mt-4">
                            <div className="flex items-center gap-3">
                                <h1 className="text-3xl font-semibold">14</h1>
                                <Badge
                                    className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums border-[#079455] text-[#079455]"
                                    variant="outline"
                                >
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 1.5L7.06568 5.43432C6.86768 5.63232 6.76867 5.73133 6.65451 5.76842C6.55409 5.80105 6.44591 5.80105 6.34549 5.76842C6.23133 5.73133 6.13232 5.63232 5.93431 5.43431L4.56568 4.06568C4.36768 3.86768 4.26867 3.76867 4.15451 3.73158C4.05409 3.69895 3.94591 3.69895 3.84549 3.73158C3.73133 3.76867 3.63232 3.86768 3.43431 4.06569L1 6.5M11 1.5H7.5M11 1.5V5" stroke="#079455" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span>7.4%</span>
                                </Badge>
                            </div>
                            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                                <Avatar>
                                    <AvatarImage src="./image-1.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="./image-2.png" alt="@leerob" />
                                    <AvatarFallback>LR</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="./image-3.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="./image-4.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="./image-5.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>ER</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage
                                        src="./image-6.png"
                                        alt="@evilrabbit"
                                    />
                                    <AvatarFallback>+7</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                        <div className="w-full flex gap-3 my-4">
                            <div className="w-[35%] h-3 bg-[#1F7EAA] rounded-sm"></div>
                            <div className="w-[20%] h-3 bg-[#2FBDFF] rounded-sm"></div>
                            <div className="w-[45%] h-3 bg-[#97DEFF] rounded-sm"></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <span className="h-2.5 w-2.5 bg-[#1F7EAA] rounded-full"></span>
                                    <p className="text-xs text-[#455468]">Stage 1 (Initial Inquiry)</p>
                                </div>
                                <span className="text-lg font-semibold">02</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <span className="h-2.5 w-2.5 bg-[#2FBDFF] rounded-full"></span>
                                    <p className="text-xs text-[#455468]">Stage 2 (Document Submission)</p>
                                </div>
                                <span className="text-lg font-semibold">07</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-2 items-center">
                                    <span className="h-2.5 w-2.5 bg-[#97DEFF] rounded-full"></span>
                                    <p className="text-xs text-[#455468]">Stage 3 (Training)</p>
                                </div>
                                <span className="text-lg font-semibold">05</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="h-[275]">
                    <CardContent>
                        <h1 className="font-semibold">Financial Wellbeing</h1>
                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <h1 className="text-3xl font-semibold">20</h1>
                                <p className="text-[#475467] text-xs">Total Franchisees</p>
                            </div>
                            <Badge
                                className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums border-[#079455] text-[#079455]"
                                variant="outline"
                            >
                                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 1.5L7.06568 5.43432C6.86768 5.63232 6.76867 5.73133 6.65451 5.76842C6.55409 5.80105 6.44591 5.80105 6.34549 5.76842C6.23133 5.73133 6.13232 5.63232 5.93431 5.43431L4.56568 4.06568C4.36768 3.86768 4.26867 3.76867 4.15451 3.73158C4.05409 3.69895 3.94591 3.69895 3.84549 3.73158C3.73133 3.76867 3.63232 3.86768 3.43431 4.06569L1 6.5M11 1.5H7.5M11 1.5V5" stroke="#079455" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span>2.1%</span>
                            </Badge>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid grid-cols-2 gap-3">
                            <div className="rounded-lg bg-[#F6F7FB] p-4 text-center">
                                <p className="text-[#455468] text-xs font-semibold pb-6">Target</p>
                                <h3 className="text-[#1C222B] font-semibold text-xl">$500,000</h3>
                            </div>
                            <div className="rounded-lg bg-[#F6F7FB] p-4 text-center">
                                <p className="text-[#455468] text-xs font-semibold pb-6">Current</p>
                                <h3 className="text-[#1C222B] font-semibold text-xl">$450,000</h3>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="flex flex-col gap-5 h-[569px]">
                <Card className="h-[270px]">
                    <CardContent>
                        <h1 className="font-semibold ">Key Insights & Feedback</h1>
                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <h3 className="text-lg font-semibold">10%</h3>
                                <p className="text-xs text-[#475467]" >Sales Growth</p>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Avatar className="size-8">
                                    <AvatarImage src={"./AcmeGroup.jpg"} alt="Acme" ></AvatarImage>
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                                <Badge variant="secondary" className="text-[#279DD4] bg-[#D5F2FF80] border-[#BAE9FF]">Top Performer</Badge>
                            </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="p-3 bg-[#F6F7FB] rounded-xl">
                            <h3 className="text-sm mb-2 font-semibold text-[#1C222B]">Feedback</h3>
                            <div className="flex  gap-2">
                                <span className="h-2.5 w-3 bg-[#D9D9D9] rounded-full"></span>
                                <p className="text-xs text-[#455468]">Franchisees are requesting more detailed training materials.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="h-[275]">
                    <CardContent>
                        <h1 className="font-semibold">Prospect Leads</h1>
                        <div className="flex flex-col gap-3 mt-5">
                            <div className="bg-[#F6F7FB] rounded-xl p-2 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar className="size-7">
                                        <AvatarImage src={"./lead1.png"} alt="lead-1"></AvatarImage>
                                        <AvatarFallback>1</AvatarFallback>
                                    </Avatar>
                                    <h4 className="text-[#101828] font-medium text-sm">Wade Warren</h4>
                                </div>
                                <p className="text-xs"><span className="text-[#1C222BB2] font-medium">Stage:</span>Initial Inquiry</p>
                            </div>
                            <div className="bg-[#F6F7FB] rounded-xl p-2 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar className="size-7">
                                        <AvatarImage src={"./lead-2.png"} alt="lead-2"></AvatarImage>
                                        <AvatarFallback>1</AvatarFallback>
                                    </Avatar>
                                    <h4 className="text-[#101828] font-medium text-sm">Ava Wright</h4>
                                </div>
                                <p className="text-xs"><span className="text-[#1C222BB2] font-medium">Stage:</span>Initial Inquiry</p>
                            </div>
                            <div className="bg-[#F6F7FB] rounded-xl p-2 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Avatar className="size-7">
                                        <AvatarImage src={"./lead-3.png"} alt="lead-1"></AvatarImage>
                                        <AvatarFallback>1</AvatarFallback>
                                    </Avatar>
                                    <h4 className="text-[#101828] font-medium text-sm">Cody Fisher</h4>
                                </div>
                                <p className="text-xs"><span className="text-[#1C222BB2] font-medium">Stage:</span>Initial Inquiry</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default InsightSection