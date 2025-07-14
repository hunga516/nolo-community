import Link from 'next/link'
import { Cpu, Lock, Sparkles, Zap, HeartPulse, Siren, ShieldCheck, Handshake, Wrench, Truck, Clock, ThumbsUp, Activity, Mail, LockIcon, Briefcase } from 'lucide-react'
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
                        <div className="mx-auto max-w-6xl px-6">
                            <div className="sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <JoinCommunityButton />
                                </AnimatedGroup>
                                <div className='grid grid-cols-2 gap-4 mt-4 md:mt-12'>
                                    <div className='text-left'>
                                        <TextEffect
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            as="h1"
                                            className="text-xl md:text-6xl xl:text-7xl font-bold">
                                            Máy chủ GTA5 Role Play nhập vai đỉnh cao
                                        </TextEffect>
                                        <TextEffect
                                            per="line"
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            delay={0.5}
                                            as="p"
                                            className="hidden md:block mx-auto mt-8 max-w-2xl text-md md:text-lg">
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
                                            className="mt-12 flex flex-col items-center gap-2 md:flex-row">
                                            <div
                                                key={1}
                                                className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                                <Button
                                                    asChild
                                                    size="lg"
                                                    className="rounded-xl px-5 text-base">
                                                    <Link href="https://cfx.re/join/lgqbzv" target="_blank">
                                                        <span className="text-nowrap">Tham gia miễn phí</span>
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
                                    <div className='' style={{ position: 'relative', width: '100%', height: '500px' }}>
                                        <Image
                                            alt="banner"
                                            src="/img/banner.png"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
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
                                    }}
                                    className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <span className='text-xs text-red-500 italic'>*Nolo Community là máy chủ FiveM dành cho người chơi sở hữu GTA V bản quyền. Chúng tôi không phân phối, chỉnh sửa hay phát hành lại game gốc dưới bất kỳ hình thức nào.</span>
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
                            <div className="relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-6 md:mt-12">
                                <div
                                    aria-hidden
                                    className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
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
                    <div className="mx-auto max-w-6xl px-6">
                        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                            <div className="lg:col-span-2">
                                <div className="md:pr-6 lg:pr-0">
                                    <h2 className="text-4xl font-semibold lg:text-5xl">Trải nghiệm của bạn là ưu tiên</h2>
                                    <p className="mt-6">Chúng tôi mang đến dịch vụ miễn phí với tinh thần cống hiến, đảm bảo hỗ trợ nhanh chóng và hiệu quả cho cộng đồng.</p>
                                </div>
                                <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                                    <li>
                                        <Briefcase className="size-5" />
                                        Nghề nghiệp đa dạng
                                    </li>
                                    <li>
                                        <Mail className="size-5" />
                                        Hỗ trợ mọi lúc 24/7
                                    </li>
                                    <li>
                                        <Zap className="size-5" />
                                        Hỗ trợ trãi nghiệm nhanh chóng
                                    </li>
                                    <li>
                                        <Activity className="size-5" />
                                        Giao diện và script tối ưu
                                    </li>
                                    <li>
                                        <LockIcon className="size-5" />
                                        Bảo mật hoàn toàn trên nền tảng FiveM
                                    </li>
                                </ul>
                            </div>
                            <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                                <Image src="/img/bugati.webp" className="object-contain rounded-[15px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-20">
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12 px-6">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-semibold">Cảnh sát thành phố</h2>
                                <p className='text-green-600 text-lg'>Đang tuyển dụng</p>
                            </div>
                            <p className="max-w-sm sm:ml-auto">Đội ngũ cảnh sát chuyên nghiệp, vui vẻ, hoà đồng công tư phân minh luôn có mặt khi bạn thực hiện các hoạt động tội phạm.</p>
                        </div>
                        <div className="relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-6 md:mt-12">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-70%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                    src="/img/police-banner.webp"
                                    alt="police banner"
                                    width="2700"
                                    height="1440"
                                />
                                <Image
                                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                    src="/img/police-banner.webp"
                                    alt="police banner"
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4 px-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Phản ứng nhanh</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Luôn có mặt kịp thời tại hiện trường, sẵn sàng hỗ trợ người dân.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">Trang bị hiện đại</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Sử dụng công nghệ và vũ khí tối tân để bảo vệ trật tự.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Lock className="size-4" />
                                    <h3 className="text-sm font-medium">Minh bạch & công bằng</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Mọi hoạt động được ghi lại bằng bodycam, đảm bảo minh bạch và quyền lợi công dân.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="size-4" />
                                    <h3 className="text-sm font-medium">Tuyển dụng mở rộng</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Cơ hội gia nhập lực lượng bảo vệ thành phố cho mọi công dân có lý tưởng.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-20">
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12 px-6">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-semibold">Bác sĩ cứu thương</h2>
                                <p className='text-green-600 text-lg'>Đang tuyển dụng</p>
                            </div>
                            <p className="max-w-sm sm:ml-auto">Đội ngũ y tế chuyên nghiệp, tận tâm, luôn sẵn sàng hỗ trợ và có mặt kịp thời khi bạn gặp sự cố hoặc chấn thương trong thành phố.</p>
                        </div>
                        <div className="relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-6 md:mt-12">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-70%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                    src="/img/ambulance-banner.jpg"
                                    alt="ambulance banner"
                                    width="2700"
                                    height="1440"
                                />
                                <Image
                                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                    src="/img/ambulance-banner.jpg"
                                    alt="ambulance banner"
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4 px-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <HeartPulse className="size-4" />
                                    <h3 className="text-sm font-medium">Cứu sống kịp thời</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Đội ngũ y tế luôn sẵn sàng ứng cứu và hỗ trợ người bị thương.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Siren className="size-4" />
                                    <h3 className="text-sm font-medium">Phản ứng khẩn cấp</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Luôn có mặt nhanh chóng khi có tai nạn hay tình huống khẩn cấp.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="size-4" />
                                    <h3 className="text-sm font-medium">Đảm bảo an toàn</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Trang bị đầy đủ thiết bị bảo hộ, tuân thủ quy trình y tế nghiêm ngặt.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Handshake className="size-4" />
                                    <h3 className="text-sm font-medium">Luôn hỗ trợ</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Tận tâm chăm sóc và hỗ trợ người dân trong mọi hoàn cảnh.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-8 md:py-20">
                    <div className="mx-auto max-w-6xl space-y-12">
                        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12 px-6">
                            <div>
                                <h2 className="text-2xl md:text-4xl font-semibold">Sửa xe cứu hộ</h2>
                                <p className='text-green-600 text-lg'>Đang tuyển dụng</p>
                            </div>
                            <p className="max-w-sm sm:ml-auto">
                                Đội ngũ cứu hộ cơ động, kỹ thuật cao, luôn có mặt khi phương tiện của bạn gặp sự cố trong thành phố.
                            </p>
                        </div>
                        <div className="relative mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-6 md:mt-12">
                            <div
                                aria-hidden
                                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-70%"
                            />
                            <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-2 md:p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                <Image
                                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                    src="/img/mechanic-banner.jpg"
                                    alt="ambulance banner"
                                    width="2700"
                                    height="1440"
                                />
                                <Image
                                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                    src="/img/mechanic-banner.jpg"
                                    alt="ambulance banner"
                                    width="2700"
                                    height="1440"
                                />
                            </div>
                        </div>
                        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4 px-6">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Wrench className="size-4" />
                                    <h3 className="text-sm font-medium">Sửa chữa chuyên nghiệp</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Đội ngũ kỹ thuật viên lành nghề sẵn sàng xử lý mọi sự cố kỹ thuật.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Truck className="size-4" />
                                    <h3 className="text-sm font-medium">Cứu hộ tận nơi</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Sẵn sàng đến bất cứ đâu trong thành phố để hỗ trợ phương tiện của bạn.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Clock className="size-4" />
                                    <h3 className="text-sm font-medium">Có mặt nhanh chóng</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Luôn phản ứng nhanh khi nhận được yêu cầu cứu hộ.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <ThumbsUp className="size-4" />
                                    <h3 className="text-sm font-medium">Thái độ tận tình</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Luôn hỗ trợ khách hàng với tinh thần trách nhiệm và thân thiện.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}