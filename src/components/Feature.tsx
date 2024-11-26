import card from "../helper/card"
import CustomCard from "./CustomCard"

const Feature = () => {
  return (
    <>
      <div className="flex justify-center">
        <span className="text-yellow-300 text-4xl font-bold mt-12">Feature</span>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12 px-24 ">
        {
          card.map((item) => (
            <CustomCard 
              key={item.id} 
              icon={item.icon} 
              heading={item.heading} 
              text={item.text} 
            />
          ))
        }
      </div>
    </>
  )
}

export default Feature
