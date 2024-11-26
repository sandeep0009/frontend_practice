import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="max-w-12xl m-auto">
      <div
        className="flex flex-col-reverse lg:flex-row justify-between items-center text-white px-8 lg:px-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/circles.png)" }}
      >
        <div className="mt-12 lg:mt-28 ml-8 lg:ml-16 text-center lg:text-left">
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            Trusted Multi-Chain <br />
            <span className="text-yellow-300">DEX</span> platform
            <p className="text-gray-500 text-base sm:text-lg md:text-xl py-4">
              Trade, earn, and own crypto on an all-in-one multi-chain DEX
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center lg:justify-start mt-6">
            <CustomButton variant="primary" text="Connect Wallet" />
            <CustomButton variant="secondry" text="Trade Crypto" />
          </div>
        </div>
        <div className="relative mb-12 lg:mb-0">
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full mx-auto">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
