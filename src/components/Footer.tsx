import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa6"


const Footer = () => {
  return (
    <div className="w-auto bottom-0 h-42 ">
        <div className="flex justify-around py-24 flex-col sm:flex-row sm:justify-between items-center sm:items-start px-14">
            <div>
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="list-items">
                    <ul className="flex flex-col sm:flex-row  sm:gap-12  sm:text-left gap-12 text-center justify-center py-4 text-white font-bold">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Roadmap</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
            </div>

            <div className="text-white">
                <h1 className="text-center font-bold">Contact <span className="text-yellow-300">Us</span></h1>
                <div className="flex gap-8  sm:justify-start">
                    <FaTelegram/>
                    <FaDiscord/>
                    <FaTwitter/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer