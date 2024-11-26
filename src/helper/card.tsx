import { FaDollarSign, } from "react-icons/fa6"
import { AiFillSafetyCertificate } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";

interface cardType{
    id:number,
    icon:React.ReactElement,
    text:string,
    heading:string
}
const card:cardType[]=[
    {
        id:1,
        icon:<FaDollarSign size={24}/>,
        heading:"Cheapest TXs",
        text:"Exchange popular digital currencies at the cheapest possible transaction price"
    },
    {
        id:2,
        icon:<AiFillSafetyCertificate size={24}/>,
        heading:"CerTIK",
        text:"We are audited by CerTik.Certik is leading security focused on ranking platform"
    },

    {
        id:3,
        icon:<MdCancel size={24}/>,
        heading:"No Contract Sells",
        text:"No contract sells to fund the marketing wallets"
    },

    {
        id:4,
        icon:<LuSettings2 size={24}/>,
        heading:"CrossDex Support",
        text:"Exchange popular digital currencies at the cheapest possible transaction price"
    },

]
export default card