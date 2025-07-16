'use client'

import Image from 'next/image'

const members1 = [
    {
        name: 'Ngọc Lộc',
        role: 'Owner',
        avatar: '/img/avatar-ngocloc.jpg',
    },
]

const members2 = [
    {
        name: 'Ngọc Lộc',
        role: 'Fullstack',
        avatar: '/img/avatar-ngocloc.jpg',
    },
    {
        name: 'Đang chiêu mộ',
        role: 'Designer',
        avatar: '/img/user_placeholder.png',
    },
    {
        name: 'Đang chiêu mộ',
        role: 'Frontend Dev',
        avatar: '/img/user_placeholder.png',
    },
    {
        name: 'Đang chiêu mộ',
        role: 'Backend Dev',
        avatar: '/img/user_placeholder.png',
    },
]

const members3 = [
    {
        name: 'Ngọc Lộc',
        role: 'Owner',
        avatar: '/img/avatar-ngocloc.jpg',
    },
    {
        name: 'Đang chiêu mộ',
        role: 'Manage Modding',
        avatar: '/img/user_placeholder.png',
    },
    {
        name: 'Đang chiêu mộ',
        role: 'Staff Facebook',
        avatar: '/img/user_placeholder.png',
    },
    {
        name: 'Đang chiêu mộ',
        role: 'Staff Discord',
        avatar: '/img/user_placeholder.png',
    },
]

export default function Page() {
    return (
        <section className="max-sm:mt-12 py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Đội ngũ phát triển</h2>

                <div>
                    <h3 className="mb-6 text-lg font-medium">Sáng lập</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members1.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 overflow-hidden">
                                    <Image
                                        className="aspect-square rounded-full object-cover"
                                        src={member.avatar}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Phát triển hệ thống</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members2.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 overflow-hidden">
                                    <Image
                                        className="aspect-square rounded-full object-cover"
                                        src={member.avatar}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="mb-6 text-lg font-medium">Điều hành cộng đồng</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {members3.map((member, index) => (
                            <div key={index}>
                                <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5 overflow-hidden">
                                    <Image
                                        className="aspect-square rounded-full object-cover"
                                        src={member.avatar}
                                        alt={member.name}
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <span className="mt-2 block text-sm">{member.name}</span>
                                <span className="text-muted-foreground block text-xs">{member.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
