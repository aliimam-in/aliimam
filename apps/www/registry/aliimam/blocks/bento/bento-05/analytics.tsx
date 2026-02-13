"use client"

import { Area, AreaChart } from "recharts"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/aliimam/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/aliimam/ui/chart"

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 305 },
  { month: "March", visitors: 237 },
  { month: "April", visitors: 73 },
  { month: "May", visitors: 209 },
  { month: "June", visitors: 214 },
]

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function AnalyticsCard() {
  return (
    <div className="justify-center">
      <Card className="bg-background border-none p-0 shadow-none">
        <CardHeader className="p-6">
          <CardTitle>Analytics</CardTitle>
          <CardDescription>418.2K Visitors</CardDescription>
        </CardHeader>
        <ChartContainer config={chartConfig} className="aspect-[1/0.35]">
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0,
              right: 0,
            }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" hideLabel />}
              defaultIndex={2}
            />
            <Area
              dataKey="visitors"
              type="linear"
              fill="var(--color-visitors)"
              fillOpacity={0.4}
              stroke="var(--color-visitors)"
            />
          </AreaChart>
        </ChartContainer>
      </Card>
    </div>
  )
}
