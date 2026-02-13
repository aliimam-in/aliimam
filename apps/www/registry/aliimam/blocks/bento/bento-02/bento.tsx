import {
  Briefcase,
  Sparkles,
  TrendingDown,
  TrendingUp,
  User,
} from "@aliimam/icons"
import { Abstract131, Abstract135 } from "@aliimam/logos"

import { ChartArea } from "@/registry/aliimam/blocks/bento/bento-02/chart-area"
import { CheckboxInTable } from "@/registry/aliimam/blocks/bento/bento-02/checkbox-table"
import { BentoGrid, BentoGridItem } from "@/registry/aliimam/components/bento"
import { Device } from "@/registry/aliimam/components/device"
import { GradientBars } from "@/registry/aliimam/components/gradient-bars"
import { Badge } from "@/registry/aliimam/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/aliimam/ui/card"

export function MinimalBento() {
  return (
    <div className="container py-6 md:py-12">
      <BentoGrid cols={{ base: 2, md: 3, lg: 4 }} rowHeight="200px">
        <BentoGridItem className="p-0" colSpan={{ base: 2, md: 3, lg: 1 }}>
          <div className="flex h-full w-full flex-col justify-center">
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardDescription>New Customers</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  1,234
                </CardTitle>
                <CardAction>
                  <Badge variant="outline">
                    <TrendingDown />
                    -20%
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Down 20% this period <TrendingDown className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Acquisition needs attention
                </div>
              </CardFooter>
            </Card>
          </div>
        </BentoGridItem>

        <BentoGridItem className="p-0" colSpan={{ base: 2, md: 3, lg: 2 }}>
          <div className="flex flex-col justify-center">
            <ChartArea />
          </div>
        </BentoGridItem>

        <BentoGridItem
          colSpan={{ base: 2, md: 1, lg: 1 }}
          className="flex flex-col items-center justify-center p-0"
        >
          <div className="flex h-full w-full flex-col justify-center">
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader>
                <CardDescription>Growth Rate</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                  4.5%
                </CardTitle>
                <CardAction>
                  <Badge variant="outline">
                    <TrendingUp />
                    +4.5%
                  </Badge>
                </CardAction>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  Steady performance increase <TrendingUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                  Meets growth projections
                </div>
              </CardFooter>
            </Card>
          </div>
        </BentoGridItem>

        <BentoGridItem
          colSpan={{ base: 2, md: 2, lg: 1 }}
          rowSpan={{ base: 1, md: 1, lg: 2 }}
        >
          <div className="flex h-full flex-col justify-between space-y-4">
            <div className="text-muted-foreground flex items-center gap-2 text-lg">
              <User size={18} />
              About
            </div>

            <p className="text-lg leading-tight font-medium md:text-3xl">
              Independent product designer building scalable brand systems and
              modern interfaces.
            </p>

            <p className="text-muted-foreground text-sm">
              Focused on clarity, usability, and long-term design
              infrastructure.
            </p>
          </div>
        </BentoGridItem>

        <BentoGridItem
          className="relative flex h-full flex-col items-center justify-center overflow-hidden"
          colSpan={{ base: 2, md: 2, lg: 2 }}
          rowSpan={2}
        >
          <Device
            variant="imac"
            className="z-20"
            width={400}
            src="/images/device/display.jpg"
          />
          <GradientBars colors={["#fff200", "transparent"]} />
        </BentoGridItem>

        <BentoGridItem
          rowSpan={{ base: 1, md: 2, lg: 2 }}
          colSpan={{ base: 2, md: 1, lg: 1 }}
        >
          <div className="flex h-full flex-col justify-between space-y-3 md:space-y-6">
            <div className="text-muted-foreground flex items-center gap-2 text-lg">
              <Briefcase size={18} />
              Services
            </div>
            <Abstract135 className="text-primary h-24 w-24" />

            <ul className="space-y-4 text-lg leading-tight font-medium md:text-2xl">
              <li>
                Brand Strategy
                <p className="text-muted-foreground mt-1 text-xs">
                  Positioning, identity systems, visual direction.
                </p>
              </li>

              <li>
                Product UI/UX
                <p className="text-muted-foreground mt-1 text-xs">
                  Research-led interface design.
                </p>
              </li>

              <li>
                Design Systems
                <p className="text-muted-foreground mt-1 text-xs">
                  Tokens, components, scalable foundations.
                </p>
              </li>
            </ul>
          </div>
        </BentoGridItem>

        <BentoGridItem colSpan={{ base: 2, md: 1, lg: 2 }}>
          <div className="flex h-full flex-col justify-between">
            <div className="flex justify-between">
              <p className="text-muted-foreground mt-2 text-sm">
                Fintech · SaaS · Creative Agencies · Startups
              </p>
              <Abstract131 className="text-primary h-12 w-12" />
            </div>

            <div className="space-y-3">
              <p className="text-muted-foreground flex items-center gap-2 text-sm">
                <Sparkles size={14} />
                Selected Collaborations
              </p>

              <h2 className="text-lg font-semibold tracking-tight lg:text-3xl">
                Building Products That Matter
              </h2>

              <p className="text-muted-foreground text-sm">
                From early-stage startups to growth-stage SaaS platforms.
              </p>
            </div>
          </div>
        </BentoGridItem>

        <BentoGridItem
          colSpan={{ base: 2, md: 2, lg: 2 }}
          className="flex items-center justify-center"
        >
          <CheckboxInTable />
        </BentoGridItem>
      </BentoGrid>
    </div>
  )
}
