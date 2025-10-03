import { Tabs, TabsContent } from '@/registry/default/ui/tabs'
import { ScrollableTabs } from './scroll-tab'

import { Campaigns, Creatives, Festive, Logos, Modals, Music, Others, Packaging, UIUX } from './creatives'
import { Videos } from './videos'
import { Reels } from './reels'

export function Works() {
    return (
        <div className="w-full">
            <Tabs
                defaultValue="1"
                className="items-center justify-center px-6 text-center">
                <ScrollableTabs />

                <div className="mt-6">
                    <TabsContent value="1">
                        <Creatives />
                    </TabsContent>
                    <TabsContent value="2">
                        <Festive />
                    </TabsContent>
                    <TabsContent value="3">
                        <Campaigns />
                    </TabsContent>
                    <TabsContent value="4">
                        <Modals />
                    </TabsContent>
                    <TabsContent value="5">
                        <Packaging />
                    </TabsContent>
                    <TabsContent value="6">
                        <UIUX />
                    </TabsContent>
                    <TabsContent value="7">
                        <Logos />
                    </TabsContent>
                    <TabsContent value="8">
                        <Music />
                    </TabsContent>
                    <TabsContent value="9">
                        <Videos />
                    </TabsContent>
                    <TabsContent value="10">
                        <Reels />
                    </TabsContent>
                    <TabsContent value="11">
                        <Others />
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    )
}
