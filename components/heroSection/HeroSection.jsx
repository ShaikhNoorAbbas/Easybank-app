import Image from "next/image";
import style from "./hero.module.css";
export default function HeroSection() {
  return (
    <>
      <div className="relative">
        <div className="Customcontainer">
          {/* Grid Container */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 ">
            {/* Left */}

            {/* Content */}
            <div className="flex flex-col items-center justify-center order-2 gap-5 mt-5 lg:items-start lg:order-1">
              <div>
                <h1 className="mt-12 text-4xl font-bold md:text-5xl drop-shadow-xl">
                  Next generation
                  <br /> digital banking
                </h1>
              </div>
              <div className="text-center lg:max-w-sm lg:text-start">
                <p className="text-lg text-gray-500">
                  {" "}
                  Take your financial life online. Your Easybank account will be
                  a one-stop-shop for spending, saving, budgeting, investing,
                  and much more.
                </p>
              </div>
              {/* Button */}
              <div className="flex px-4 py-1 text-white rounded-full shadow-lg hover:shadow-2xl Custom-btn-bg">
                <button className="text-md">Request Invite</button>
              </div>
            </div>

            {/* Right */}

            <div className={`order-1 w-full lg:order-2`}>
              <div className="relative">
                <Image
                  src="/assets/images/bg-intro-desktop.svg"
                  alt="background"
                  width={1920}
                  height={1080}
                />
                <Image
                  src="/assets/images/image-mockups.png"
                  alt="mobile Background"
                  width={1920}
                  height={1080}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
