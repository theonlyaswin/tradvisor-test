import { Handshake, MonitorSmartphone, BadgeCheck, LockKeyhole} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";


const features = [
  {
    Icon: MonitorSmartphone,
    name: "User Friendly Interface",
    description: "Tradvisor provides a simple and intuitive interface that makes buying and selling products easy and straightforward.",
    className: "col-span-3 lg:col-span-1",
    background: "/img1.png",
  },
  {
    Icon: Handshake,
    name: "Expert guidance",
    description: "Our team of trading experts is available to answer questions, provide advice, and offer personalized recommendations based on each user's unique needs and goals.",
    className: "col-span-3 lg:col-span-2",
    background: "/img2.png",
  },
  {
    Icon: BadgeCheck,
    name: "Seller verification",
    description: "To ensure that all sellers on Tradvisor are legitimate, we verify the identity and contact information of all sellers before they can start selling on the platform.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: "/img3.png",
  },
  {
    Icon: LockKeyhole,
    name: "Secure and reliable platform",
    description: "Tradvisor uses robust security measures to ensure that transactions are safe and reliable, giving users peace of mind when trading online.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: "/img4.png",
  },
];

const Gallery = () => {
  return (
    <section id="services" className="min-h-screen flex items-center justify-center flex-col py-16 px-4 sm:px-6 lg:px-8 services">
      <h1 className="heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-8 text-left">
                        Our Services.
                    </h1>
      <div className="w-full max-w-7xl">
        <BentoGrid className="h-full gallery ">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Gallery;