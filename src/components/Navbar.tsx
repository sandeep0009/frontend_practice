import CustomButton from "./CustomButton"

const Navbar = () => {
    return (
        <div className="max-w-12xl m-auto">
            <div className="flex justify-around text-center py-6">
                <div className="flex">
                    <img src="../images/logo.png" className="h-18 w-24" alt="" />
                </div>
                <div className="list-items">
                    <ul className="flex gap-12 text-center justify-center py-4 text-white font-bold">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Roadmap</li>
                        <li>FAQs</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <CustomButton
                        variant="primary"
                        text="Connect Wallet"
                    />


                </div>

            </div>
        </div>
    )
}

export default Navbar