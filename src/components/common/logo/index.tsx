import Image from "next/image"

const LogoWithName = () => {
    return (
        <div className="flex items-center gap-2">
            <Image
                src="/logo.svg"
                alt="logo nolo"
                width={30}
                height={30}
            ></Image>
            <span
                className={`font-semibold  opacity-100 pointer-events-none"}`}
            >
                NOLO Community
            </span>
        </div>
    )
}

export default LogoWithName