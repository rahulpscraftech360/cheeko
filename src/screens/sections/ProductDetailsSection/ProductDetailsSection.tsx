import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";


export const ProductDetailsSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What's inside the AI Teddy Bear?",
      answer:
        "Inside the Curio box, you will find the Curio toy itself, a user-friendly manual, charging cables, and a set of interactive cards that enhance the play experience. Additionally, there's a unique code to access online resources and updates.",
    },
    {
      question: "What's inside the AI Teddy Bear",
      answer: "",
    },
    {
      question: "What's inside the AI Teddy Bear",
      answer: "",
    },
    {
      question: "What's inside the AI Teddy Bear",
      answer: "",
    },
    {
      question: "What's inside the AI Teddy Bear",
      answer: "",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-4 md:px-16 py-12 w-full gap-8">
      <div className="flex flex-col items-center gap-2 w-full md:w-1/2">
        <h2 className="self-stretch font-['Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-4xl md:text-[56px] leading-tight md:leading-[72px]">
          Frequently Asked Questions
        </h2>
        <p className="text-[#1e1e1eb2] text-xl md:text-2xl leading-8 self-stretch font-['Arial-Regular',Helvetica] font-normal">
          Select the perfect AI Chhota Bheem package for your child&#39;s
          learning adventure.
        </p>
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
