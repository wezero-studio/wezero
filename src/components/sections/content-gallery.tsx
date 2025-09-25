import React from 'react';
import Image from 'next/image';

const topRowImages = [
    "globe.svg",
    "globe.svg",
    "globe.svg",
    "globe.svg",
];

const bottomRowImages = [
    "globe.svg",
    "globe.svg",
    "globe.svg",
    "globe.svg",
    "globe.svg",
];

const Scroller = ({
    images,
    altPrefix,
    animationClass,
}: {
    images: string[];
    altPrefix: string;
    animationClass: string;
}) => {
    const duplicatedImages = [...images, ...images];
    return (
        <div className={`flex w-max ${animationClass}`}>
            {duplicatedImages.map((src, index) => (
                <div key={index} className="flex-shrink-0 px-3">
                    <Image
                        src={src}
                        alt={`${altPrefix} ${index + 1}`}
                        width={256}
                        height={144}
                        className="h-36 w-auto rounded-lg object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default function ContentGallery() {
    const scrollerStyles = `
    .animate-scroll-left { animation: scroll-left 60s linear infinite; }
    .animate-scroll-right { animation: scroll-right 60s linear infinite; }
    @keyframes scroll-left {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    @keyframes scroll-right {
      from { transform: translateX(-50%); }
      to { transform: translateX(0); }
    }
  `;

    return (
        <>
            <style>{scrollerStyles}</style>
            <section className="bg-background py-10 sm:py-20 overflow-hidden">
                <div className="flex flex-col gap-6">
                    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <Scroller images={topRowImages} altPrefix="Creative image" animationClass="animate-scroll-left" />
                    </div>
                    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                        <Scroller images={bottomRowImages} altPrefix="Design asset" animationClass="animate-scroll-right" />
                    </div>
                </div>
            </section>
        </>
    );
}