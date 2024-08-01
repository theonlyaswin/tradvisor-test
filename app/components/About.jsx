import Image from 'next/image';

const About = () => {
    return (
        <section className="py-8 lg:mt-32 md:mt-24 mt-16 mb-36 about">
            <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-center gap-10">
                <div className="lg:w-1/2 space-y-8">
                    <h1 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Who are we?
                    </h1>
                    <p className="subheading text-lg text-justify">
                    Tradvisor is a user-friendly platform connecting buyers and sellers worldwide. We aim to provide a seamless, secure trading experience for all. Understanding that trading can be challenging, especially for beginners, we offer expert guidance and a range of resources to assist you. Our trading experts are available to answer questions, provide advice, and offer personalized recommendations. Whether buying or selling, Tradvisor is the perfect place to start. With our intuitive interface, robust security, and powerful tools, you can trade confidently and achieve your goals. Sign up today and trade like a pro!
                    </p>
                </div>
                <div className="hero-image lg:w-1/2 flex justify-center">
                    <Image src={`/about.svg`} width={400} height={400} alt="realestate-transaction" className="w-full max-w-md"/>
                </div>
            </div>
        </section>
    );
};

export default About;
