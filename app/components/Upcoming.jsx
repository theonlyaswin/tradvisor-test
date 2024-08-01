import TextReveal from "@/components/magicui/text-reveal";

const Upcoming = () => {
    return(
        <section className="min-h-screen flex items-center justify-center flex-col py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="py-8 text-left ">
                        <TextReveal className="heading" text="Upcoming Projects" />
                    </h1>
      <div className="w-11/12 max-w-7xl space-y-6 flex justify-center items-center flex-col">
        
        <div className="mb-6">
            <h2 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Islands Brokerage</h2>
            <p className="text-justify projects">Our next strategic plan is to broker private island deals, targeting high-net-worth individuals. We'll utilize targeted marketing and advertising across social media and search engines to attract buyers, positioning our brand as a premier luxury real estate broker and driving significant growth.
            </p>
        </div>
        
        
        
        <div className="mb-6">
            <h2 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Investment in marketing and advertising</h2>
            <p className="text-justify projects">To attract more users and increase sales, Tradvisor could invest in marketing and advertising campaigns across various channels, such as social media, search engines, or television.
            </p>
        </div>

        
        <div className="mb-6">
            <h2 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Focus on user experience</h2>
            <p className="text-justify projects">To retain users and improve customer satisfaction, Tradvisor could focus on improving the user experience by offering more personalized recommendations, improving the search functionality, or simplifying the checkout process.
            </p>
        </div>

        
        <div className="mb-6">
            <h2 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Introduction of new features</h2>
            <p className="text-justify projects">To stay competitive and attract new users, Tradvisor could introduce new features, such as augmented reality product visualization or social commerce integration.
            </p>
        </div>

        
        <div className="mb-6">
            <h2 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">Expansion into new product categories</h2>
            <p className="text-justify projects">To diversify its offerings and attract new users, Tradvisor could expand into new product categories, such as automotive parts, home appliances, or sports equipment.
            </p>
        </div>

      </div>
    </section>
    );
};

export default Upcoming;