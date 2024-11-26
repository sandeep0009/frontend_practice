

export interface ButtonProps{
    variant:'primary'|'secondry',
    text:string

}


const variantStyles={
    "primary":"bg-gradient-to-r from-yellow-300 to-yellow-200 rounded-full text-black font-bold text-center px-6 py-3",
    "secondry":"bg-blue-500 rounded-full text-yellow-300 border-yellow-300"
}

const CustomButton = (props:ButtonProps) => {
  return (
    <div>
        <button className={variantStyles[props.variant]}>{props.text}</button>
    </div>
  )
}

export default CustomButton