import Link from 'next/link'
import { Cpu, Lock, Sparkles, Zap, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import JoinCommunityButton from '@/components/landing/header/join-community-button'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function Page() {
    return (
        <>
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <Image
                                src="/city-2.jpeg"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <JoinCommunityButton />
                                </AnimatedGroup>

                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 text-balance text-3xl md:text-7xl lg:mt-16 xl:text-[5.25rem]">
                                    Bắt đầu là người thường Kết thúc là huyền thoại
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="hidden md:block mx-auto mt-8 max-w-2xl text-balance text-md md:text-lg">
                                    Tái hiện thế giới thực đầy đủ ngành nghề, luật pháp và tương tác xã hội. Mỗi quyết định đều ảnh hưởng đến số phận nhân vật bạn đang nhập vai.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="https://cfx.re/join/lgqbzv" target="_blank">
                                                <span className="text-nowrap">Kết nối máy chủ</span>
                                                <Image alt='fivem logo' width={32} height={32} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/FiveM-Logo.png/1200px-FiveM-Logo.png" />
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#link">
                                            <span className="text-nowrap">Hướng dẫn tham gia</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <Image
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/img/city-2.jpg"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <Image
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/img/city-2.jpg"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="py-16 md:py-32">
                    <div className="mx-auto max-w-6xl space-y-12 px-6">
                        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
                            <div>
                                <h2 className="text-4xl font-semibold">Cảnh sát thành phố</h2>
                                <p className='text-green-600 text-lg'>Đang tuyển dụng</p>
                            </div>
                            <p className="max-w-sm sm:ml-auto">Đội ngũ cảnh sát chuyên nghiệp, vui vẻ, hoà đồng công tư phân minh luôn có mặt khi bạn thực hiện các hoạt động tội phạm.</p>
                        </div>
                        <div className="relative rounded-3xl overflow-hidden md:-mx-8 lg:col-span-3">
                            <div className="aspect-88/36 relative">
                                <div className="bg-linear-to-t z-1 from-background absolute inset-0 to-transparent"></div>
                                <div className='overflow-hidden'>
                                    <Image src="/img/police-banner.webp" className="absolute inset-0 z-10 rounded-md" alt="payments illustration dark" width={2797} height={1137} />
                                </div>
                                <Image src="/img/police-banner.webp" className="hidden dark:block" alt="payments illustration dark" width={2797} height={1137} />
                                <Image src="/img/police-banner.webp" className="dark:hidden" alt="payments illustration light" width={2797} height={1137} />
                            </div>
                        </div>
                        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Tốc độ</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Cảnh sát sẽ luôn có mặt trong khoảng thời gian ngắn nhất.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Hoả lực</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Được trang bị các vũ khi và phương tiện tiên tiến nhất thành phố.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Lock className="size-4" />
                                    <h3 className="text-sm font-medium">An toàn</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Mỗi cảnh sát đều được trang bị bodycam. Bạn luôn có thể yêu cầu trích suất để bảo vệ quyền công dân.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="size-4" />

                                    <h3 className="text-sm font-medium">Tham gia dễ dàng</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Chúng tôi luôn chiêu mộ và tôn trọng những công dân tham gia vào đội ngũ cảnh sát.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}