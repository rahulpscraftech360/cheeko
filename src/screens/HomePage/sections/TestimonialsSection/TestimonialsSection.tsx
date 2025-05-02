import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";

export const TestimonialsSection = (): JSX.Element => {
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
    <section className="flex flex-col w-full max-w-[375px] mx-auto items-center gap-6 px-4 py-0">
      <header className="flex flex-col items-center gap-2 w-full">
        <h2 className="w-full [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[28px] text-center tracking-[0] leading-6">
          Frequently Asked Question
        </h2>
        <p className="text-[#1e1e1eb2] text-xs text-center leading-4 w-full [font-family:'Arial-Regular',Helvetica] font-normal tracking-[0]">
          Select the perfect AI Chhota Bheem package for your child&#39;s
          learning adventure.
        </p>
      </header>

      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="mb-6 rounded-2xl border border-solid border-[#d9d9d9] overflow-hidden"
          >
            <AccordionTrigger className="px-4 py-4 [font-family:'Baloo_2',Helvetica] font-medium text-[#1e1e1e] text-[22px] tracking-[0] leading-6 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-[13px] tracking-[0] leading-5">
              {item.answer || "Content not provided"}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
