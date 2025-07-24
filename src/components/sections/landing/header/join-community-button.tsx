"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
// import { toast } from "sonner"

const JoinCommunityButton = () => {

    // const onClick = () => {
    //     toast.error("Chức năng đang phát triển")
    // }

    return (
        <Link
            href="https://discord.gg/Vak5pRjFP3"
            target="_blank"
            className="hover:bg-[oklch(0.86 0.14 85.91)] dark:hover:border-t-border bg-[oklch(0.86 0.14 85.91)] group mx-auto flex w-fit items-center gap-4 rounded-full border border-black/10 p-1 pl-4 shadow-md transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
            <span className="hidden md:block text-foreground text-sm">Tham gia ngay cộng đồng GTA 5 Role Play của chúng tôi</span>
            <span className="block md:hidden text-foreground text-sm">Tham gia cộng đồng</span>
            <span className="block h-4 w-0.5 border-l !border-gray-800 dark:!border-zinc-700 bg-[oklch(0.86_0.14_85.91)] dark:bg-zinc-700"></span>

            <div className="group-hover:bg-[oklch(0.86 0.14 85.91)] size-6 overflow-hidden rounded-full duration-500">
                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                        <ArrowRight className="m-auto size-3 bg-[oklch(0.86 0.14 85.91)]" />
                    </span>
                    <span className="flex size-6 bg-[oklch(0.86 0.14 85.91)]">
                        <ArrowRight className="m-auto size-3" />
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default JoinCommunityButton;