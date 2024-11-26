import CustomButton from "./CustomButton"


const Hero = () => {
  return (
    <div className="max-w-12xl m-auto">
        <div className="flex justify-between items-center text-white px-8 lg:px-20">
        <div className="mt-28 ml-16 ">
            <div className="text-7xl text-white font-bold">
            Trusted Multi-Chan <br />
                <span className="text-yellow-300">DEX</span> platform
                <p className="text-gray-500 text-lg py-4">Trade,earn and own crypto on all-in-one multi-chain DEX</p>


            </div>
                <div className="flex gap-10">
                    <CustomButton variant="primary" text="Connect Wallet"/>
                    <CustomButton variant="secondry" text="Trade Crypto"/>
                </div>
        </div>

        <div className="relative">
            <div
            className="bg-gradient-to-r from-yellow-300 to-yellow-200 w-64 h-64 rounded-full mx-auto"
            >

            </div>

        </div>
           
        </div>
    </div>
  )
}

export default Hero