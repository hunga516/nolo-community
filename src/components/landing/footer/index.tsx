import LogoWithName from '@/components/common/logo'
import Image from 'next/image'
import Link from 'next/link'

const links = [
    {
        title: 'Trang chủ',
        href: '/',
    },
    {
        title: 'Nghề nghiệp',
        href: '/nghe-nghiep',
    },
    {
        title: 'Đội ngũ',
        href: '/doi-ngu',
    },
    {
        title: 'Hướng dẫn',
        href: '/huong-dan',
    },
    {
        title: 'Tin tức',
        href: '/tin-tuc',
    },
]

export default function Footer() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    href="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <LogoWithName />
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center items-center gap-6 text-sm">
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
                <span className="text-muted-foreground block text-center text-sm"> © {new Date().getFullYear()} Nolo Community, powered by Dev Ngọc Lộc</span>
            </div>
        </footer>
    )
}