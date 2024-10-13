import Image from "next/image";
import Link from "next/link";
import FellowsImage from "@/public/TCimages/below-hero.png"; 

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-indigo-600/90 rounded-xl p-6 shadow-lg md:flex md:items-center">
          {/* Image Section */}
          <div className="md:flex-shrink-0 md:w-1/2">
            <Image
              className="rounded-lg object-cover w-full h-full"
              src={FellowsImage}
              width={350} 
              height={300}
              alt="About TradeChain"
            />
          </div>

          {/* Text Content Section */}
          <div className="mt-6 text-white md:mt-0 md:ml-6 md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Unlock the future of trading with TradeChain</h3>
            <p className="text-base md:text-lg leading-relaxed">
              TradeChain is a cutting-edge platform that enables seamless, secure, and transparent commodity trading.
              Whether you're trading precious metals, agricultural products, or cryptocurrencies, TradeChain 
              provides the tools and insights to help you succeed in a fast-paced market.
            </p>
            <div className="mt-4">
              <Link
                href="/signup"
                className="inline-block bg-white text-indigo-600 font-semibold px-5 py-2 rounded-md shadow hover:bg-gray-100 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
