import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Button } from "@/registry/aliimam/ui/button"
import { TweetCard } from "@/src/components/ui/tweet-card"
import { Masonary } from "../../ui/masonary"

const allTweets = [
    "https://x.com/learnframer/status/1986146849020125484",
    "https://x.com/opencutapp/status/2029297075716784521",
    "https://x.com/stephenhaney/status/1966609181361729770",
    "https://x.com/xn1cklas/status/2027423354852954564",
    "https://x.com/jakub_works/status/1958186156249485664",
    "https://x.com/CherubinV47534/status/1914771532100043078",
    "https://x.com/M8ker_com/status/1846950174641316122",
    "https://x.com/serafimcloud/status/1877383403001057439",
    "https://x.com/jakub_works/status/1958181359035261153",
    "https://x.com/learnframer/status/1994076861438284043",
    "https://x.com/xn1cklas/status/2027419258607587442",
    "https://x.com/learnframer/status/1986146837234102380",
    "https://x.com/M8ker_com/status/1846044133665739103",
    "https://x.com/21st_dev_old/status/1970231768851591435",
    "https://x.com/alibey_10/status/2021254834486378682",
    "https://x.com/21st_dev_old/status/1937752881844695397",
    "https://x.com/21st_dev_old/status/1959903753047359860",
    "https://x.com/21st_dev_old/status/1958001449113117054",

].map((t) => t.split("/").slice(-1)[0])

export function Testimonials() {
    return (
        <div className="border-t">
            <section className="relative container">
            <div className="p-2 lg:border-x">
                <div className="flex justify-center gap-2 flex-wrap">
                    <Masonary initialCount={9}>
                        {allTweets.map((id) => (
                            <div
                                key={id}
                                className="group w-full h-full relative block"
                            >
                                <TweetCard
                                    id={id}
                                    className="h-full w-full bg-code overflow-hidden border transition-[border-color,background-color,box-shadow] duration-200 ease-in-out hover:shadow-md"
                                />
                                <div className="absolute border inset-0 flex items-center justify-center opacity-0 backdrop-blur-sm transition-opacity duration-200 ease-in-out will-change-[opacity] group-hover:opacity-100">
                                    <Link
                                        href={`https://x.com/i/status/${id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="h-8 w-fit"
                                    >
                                        <Button
                                            variant="default"
                                            size="default"
                                            className="pointer-events-none h-8 w-fit translate-y-3 px-2 transition-transform duration-200 ease-in-out will-change-transform group-hover:translate-y-0"
                                        >
                                            View Tweet
                                            <ArrowUpRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Masonary>
                </div>
                </div>
            </section>
        </div>
    )
}