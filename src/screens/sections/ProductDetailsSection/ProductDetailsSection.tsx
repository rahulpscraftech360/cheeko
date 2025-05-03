import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";


export const ProductDetailsSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is CheekoAI Toy?",
      answer:
        "CheekoAI Toy turns any stuffed toy into a smart, talking friend that helps kids learn, play, and imagine — without using screens!.",
    },
    {
      question: "Is there any screen or display in CheekoAI?",
      answer: "No, CheekoAI is 100% screen-free! It's designed to encourage natural conversations and playful learning without any visual distractions.",
    },
    {
      question: "How does CheekoAI grow with my child?",
      answer: "CheekoAI’s AI keeps evolving! It adapts to your child’s questions, interests, and skills, making learning fun and fresh every day.",
    },
    {
      question: "How do parents stay in control?",
      answer: "Parents can manage CheekoAI completely through the CheekoAI App.Set filters, monitor learning goals, control content, and ensure a safe, age-appropriate experience.",
    },
    {
      question: "Is CheekoAI connected to the internet?",
      answer: "Yes, CheekoAI connects securely to the internet to stay updated with the latest games, stories, and learning activities - all curated for your child's growth.",
    },
    {
      question: "Can CheekoAI be used with any toy?",
      answer: "Yes! You can easily pair CheekoAI with your child's favorite stuffed toy to make it come alive.",
    },
  
  ];

  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-4 md:px-16 py-12 w-full gap-8">
      <div className="flex flex-col items-center gap-2 w-full md:w-1/2">
        <h2 className="self-stretch font-['Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-4xl md:text-[56px] leading-tight md:leading-[72px]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#1e1e1eb2] text-xl md:text-2xl leading-8 self-stretch font-['Arial-Regular',Helvetica] font-normal">
        Everything you need to know about giving your child the smartest screen-free companion.
        </p>

       
        <div className="w-full  left-0">
        <img 
      src="/Group.png"
      alt="Group illustration"
      className="w-[501px] h-[306px] object-cover mx-auto mt-6"
    />
  </div>
      </div>

      <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-[#d9d9d9] rounded-2xl mb-6 overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-4 hover:no-underline">
                <span className="font-['Baloo_2',Helvetica] font-medium text-[#1e1e1e] text-lg md:text-[22px] leading-6 text-left">
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <p className="font-['Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-[13px] leading-5">
                  {item.answer || "No answer provided yet."}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
