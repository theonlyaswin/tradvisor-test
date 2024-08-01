"use client";
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import NumberTicker from "@/components/magicui/number-ticker";
import Confetti from "@/components/magicui/confetti";

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const confettiRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && confettiRef.current) {
            confettiRef.current.fire({});
        }
    }, [isVisible]);

    const items = [
        { src: '/clients.svg', alt: 'clients-illustration', width: 200, height: 100, value: 1532, text: 'Happy Clients' },
        { src: '/like.svg', alt: 'facebook-like-illustration', width: 100, height: 100, value: 50000, text: 'Facebook Likes' },
        { src: '/twitter.svg', alt: 'twitter-illustration', width: 100, height: 100, value: 10000, text: 'Retweets' },
    ];

    return (
        <section ref={sectionRef} className="relative min-h-screen flex flex-col lg:flex-row items-stretch justify-center py-8 px-4 sm:px-6 lg:px-48 space-y-8 lg:space-y-0 lg:space-x-8">
            {items.map((item, index) => (
                <div key={index} className='flex flex-col justify-center items-center w-full lg:w-1/3 space-y-4'>
                    <div className="h-32 flex items-center justify-center">
                        <Image 
                            src={item.src} 
                            alt={item.alt} 
                            width={item.width} 
                            height={item.height}
                            className="object-contain"
                        />
                    </div>
                    <p className='whitespace-pre-wrap text-3xl lg:text-5xl font-medium text-center'>
                        <NumberTicker className="counter" value={item.value} />
                    </p>
                    <h2 className='counter-info text-lg lg:text-xl text-center'>{item.text}</h2>
                </div>
            ))}
            <Confetti
                ref={confettiRef}
                className="absolute left-0 top-0 z-10 w-full h-full"
            />
        </section>
    );
};

export default Testimonials;