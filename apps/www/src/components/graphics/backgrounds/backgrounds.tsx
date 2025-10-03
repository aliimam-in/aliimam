import { ScrollArea, ScrollBar } from '@/registry/default/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/registry/default/ui/tabs'

import { NeonBackgrounds, NoiseBackgrounds, OilPaintBackgrounds, SolarizeBackgrounds } from './bg'

export function Backgrounds() {
    return (
        <Tabs
            defaultValue="1"
            className="mb-6 items-center justify-center text-center">
            <TabsList className="sticky top-24 z-20 w-full overflow-hidden md:w-auto items-center justify-center text-center shadow-xl">
                <ScrollArea className="whitespace-nowrap overflow-auto">
                    <div className="space-x-2">
                        <TabsTrigger
                            value="1"
                            className="px-6">
                            Neon
                        </TabsTrigger>
                        <TabsTrigger
                            value="2"
                            className="px-6">
                            Noise
                        </TabsTrigger>
                        <TabsTrigger
                            value="3"
                            className="px-6">
                            Oil Paint
                        </TabsTrigger>
                        <TabsTrigger
                            value="4"
                            className="px-6">
                            Solarize
                        </TabsTrigger>
                    </div>
                    <ScrollBar
                        className="hidden"
                        orientation="horizontal"
                    />
                </ScrollArea>
            </TabsList>
            <div className="mt-6">
                <TabsContent value="1">
                    <NeonBackgrounds />
                </TabsContent>
                <TabsContent value="2">
                    <NoiseBackgrounds />
                </TabsContent>
                <TabsContent value="3">
                    <OilPaintBackgrounds />
                </TabsContent>
                <TabsContent value="4">
                    <SolarizeBackgrounds />
                </TabsContent>
            </div>
        </Tabs>
    )
}
