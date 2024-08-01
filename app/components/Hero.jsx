'use client'

import Image from 'next/image'
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        // This effect runs after the component mounts
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        };

        const servicesButton = document.querySelector('.serv-btn');
        if (servicesButton) {
            servicesButton.addEventListener('click', handleSmoothScroll);
        }

        // Cleanup function to remove the event listener
        return () => {
            if (servicesButton) {
                servicesButton.removeEventListener('click', handleSmoothScroll);
            }
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <section className="py-8 lg:mt-32 md:mt-24 mt-16 home">
            <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-center gap-10">
                <div className="lg:w-1/2 space-y-8">
                    <h1 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        <GradualSpacing
                        text={"Tradvisor"}/>
                    </h1>
                    <p className="subheading text-lg">
                        Tradvisor is a leading online marketplace focused on the UAE, providing buyers and sellers with a secure, user-friendly trading platform and expert guidance to help them succeed in the local marketplace.
                    </p>
                    <div className='btns flex flex-wrap gap-4'>
                        <button type="button" className="google-btn font-bold rounded-full text-sm px-6 py-3 text-center inline-flex items-center">
                            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                            </svg>
                            Join with Google
                        </button>
                        <a 
                            href="#services"
                            className="serv-btn font-bold rounded-full text-sm px-6 py-3 text-center inline-flex items-center"
                        >
                            Our Services
                        </a>
                    </div>
                </div>
                <div className="hero-image lg:w-1/2 flex justify-center">
                    <Image src={`/laurel-handshake.svg`} width={400} height={400} alt="realestate-transaction" className="w-full max-w-md"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;