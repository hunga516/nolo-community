'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import LogoWithName from '@/components/common/logo'

const menuItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Nghề nghiệp', href: '/nghe-nghiep' },
    { name: 'Hướng dẫn', href: '/huong-dan' },
    { name: 'Đội ngũ', href: '/doi-ngu' },
    { name: 'Tin tức', href: '/tin-tuc' },
]

export const Header = () => {
    const [menuState, setMenuState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2">
                <div className={cn('mx-auto mt-2 max-sm:px-4 max-w-6xl transition-all duration-300', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <LogoWithName />
                            </Link>
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link href="https://discord.gg/Vak5pRjFP3" target="blank">
                                    <Image alt='discord logo' width={34} height={34} src="https://pngimg.com/d/discord_PNG11.png" />
                                </Link>
                                <Link href="https://www.facebook.com/groups/3965835106963608" target="blank">
                                    <Image alt='facebook logo' width={31} height={31} src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" />
                                </Link>
                                <Link href="https://servers.fivem.net/servers/detail/lgqbzv" target="blank" className="-ml-3">
                                    <Image alt='fivem logo' width={47} height={47} src="https://1000marcas.net/wp-content/uploads/2025/01/FiveM-Logo-thumb-1280x720.png" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}