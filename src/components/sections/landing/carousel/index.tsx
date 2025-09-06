"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import AutoplayScroll from "embla-carousel-auto-scroll"


const ImagesCarousel = () => {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true
            }}
            className="w-full"
            plugins={[
                AutoplayScroll({
                    speed: 1,
                    startDelay: 0,
                    stopOnMouseEnter: true
                }),
            ]}
        >
            <CarouselContent className="mt-2">
                <CarouselItem className="basis-1/2 md:basis-1/4">
                    <div className="relative h-36 md:h-60 rounded-sm overflow-hidden">
                        <Image fill alt="svj1" src="/img/gta-o-1.jpg" className="object-cover" />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4">
                    <div className="relative h-36 md:h-60 rounded-sm overflow-hidden">
                        <Image fill alt="svj1" src="/img/sf-1.webp" className="object-cover" />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4">
                    <div className="relative h-36 md:h-60 rounded-sm overflow-hidden">
                        <Image fill alt="svj1" src="/img/police-hunt-1.jpg" className="object-cover" />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4">
                    <div className="relative h-36 md:h-60 rounded-sm overflow-hidden">
                        <Image fill alt="svj1" src="/img/police-car-1.jpeg" className="object-cover" />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4">
                    <div className="relative h-36 md:h-60 rounded-sm overflow-hidden">
                        <Image fill alt="svj1" src="/img/taxi-car-1.jpeg" className="object-cover" />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4">
                    <div className="relative h-36 md:h-60 rounded-sm overflow-hidden">
                        <Image fill alt="svj1" src="/img/ems-1.webp" className="object-cover" />
                    </div>
                </CarouselItem>
                <CarouselItem className="basis-1/2 md:basis-1/4">
                    <div className="relative h-36 md:h-60 rounded-sm overflow-hidden">
                        <Image fill alt="svj1" src="/img/police-1.jpeg" className="object-cover" />
                    </div>
                </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
    )
}

export default ImagesCarousel