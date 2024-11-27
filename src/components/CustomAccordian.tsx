import { useState } from "react";
import { FaPlus,FaMinus } from "react-icons/fa6";

export interface AccordionProp {
  answer: string;
  question: string;
}

interface CustomAccordionProps {
  items: AccordionProp[]; 
  className?: string; 
}

const CustomAccordion = (props: CustomAccordionProps) => {
  const { items, className } = props; 
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={`space-y-4 w-full max-w-lg mx-auto ${className || ""}`}>
      <div className="text-center text-yellow-300 text-2xl font-bold">FAQs</div>
      
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-gray-600 rounded-lg overflow-hidden "
        >
    
          <div
            className="flex justify-between items-center p-4 cursor-pointer "
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-white font-semibold">{item.question}</span>
            <span className="text-yellow-300 bg-gray-600 rounded-full  w-fit p-2">
              {index === activeIndex ? <FaMinus/> : <FaPlus/>}
            </span>
          </div>

      
          {index === activeIndex && (
            <div className="p-4  text-gray-300">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
