
export interface Card{
    icon:React.ReactElement,
    heading:string,
    text:string
}

const CustomCard = (props:Card) => {
  return (
    <div className="w-60 h-48 rounded-xl border border-gray-700 flex flex-col text-white justify-start px-6 py-8">
        <div className="bg-gray-600 rounded-full w-min p-2">
            {props.icon}
        </div>
        <div className="text-xl font-bold">
            {props.heading}
        </div>
        <div className="text-sm text-gray-200">
            {props.text}
        </div>
    </div>
  )
}

export default CustomCard