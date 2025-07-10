'use client'

import Image, { ImageLoaderProps } from "next/image"


function LogoLoader({ src, width, quality }: ImageLoaderProps) {
    return `${process.env.NEXT_PUBLIC_BASEURL}/api/image?file=${src}&w=${width}&q=${quality || 75}`
}

export function Logo({ src }: { src: string }) {
    return (
        <Image
            loader={LogoLoader}
            src={src}
            alt='Logo'
            fill
            className="object-contain rounded-sm"
        />
    )
}