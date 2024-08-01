import Image from 'next/image';

const Contact = () => {
    return (
        <section className="py-8 lg:mt-32 md:mt-24 mt-16 mb-36">
            <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-center gap-10">
                <div className="lg:w-1/2 space-y-8 contact">
                    <h1 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                        Get in touch.
                    </h1>
                    <p className="text-lg contact-p">
                    Email : support@tradvisor.ae
                    <br/>
                    Phone : +971 54 560 1975
                    </p>
                    <button type="button" className="google-btn font-bold rounded-full text-sm px-6 py-3 text-center inline-flex items-center">
                            <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
                            </svg>
                            Join with Google
                        </button>
                </div>
                <div className="hero-image lg:w-1/2 flex justify-center">
                    <Image src={`/contact.svg`} width={400} height={400} alt="realestate-transaction" className="w-full max-w-md"/>
                </div>
            </div>
        </section>
    );
};

export default Contact;
