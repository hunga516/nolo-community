export default function Page() {

    return (
            
            <>
                <header
                    className="
                    relative w-full h-[36rem] md:h-[48rem]
                    [mask:url(/assets/border-down.svg)_bottom_no-repeat,linear-gradient(to_top,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_9vw,rgba(0,0,0,1)_9vw,rgba(0,0,0,1)_100%)]
                    before:content-[''] before:absolute before:inset-0
                    before:bg-gradient-to-b before:from-black/30 before:to-black/10
                    "
                    >
                    <video src="https://stream.mux.com/gk3Ve5dsfauDkYwkYmlwYSbhwx43yNusyLbp01Bc02rnM.m3u8"
                        autoPlay
                        loop
                        muted
                        className="object-cover absolute w-full h-full top-0 left-0"
                    />
                </header>
            </>
    )
}