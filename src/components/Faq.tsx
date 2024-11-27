
import CustomAccordion from './CustomAccordian';
import { faqData } from '../helper/accordian';

const Faq = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
 
    <CustomAccordion items={faqData} />
  </div>
  )
}

export default Faq