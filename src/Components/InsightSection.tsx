import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card"
import { Chart } from "./Chart"

const InsightSection = () => {
  return (
    <div className="p-2 grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-3">
        <div>
            <Card>
                <CardHeader className="text-center">
                    <CardTitle>Account Progerss</CardTitle>
                </CardHeader>
                <CardContent>
                    <Chart />
                </CardContent>
            </Card>
        </div>
        <div></div>
        <div></div>
    </div>
  )
}

export default InsightSection