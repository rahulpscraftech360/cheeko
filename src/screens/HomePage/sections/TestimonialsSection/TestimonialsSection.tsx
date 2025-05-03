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
    <section className="flex flex-col w-full max-w-[375px] mx-auto items-center gap-6 px-4 py-0">
      <header className="flex flex-col items-center gap-2 w-full">
        <h2 className="w-full [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[28px] text-center tracking-[0] leading-6">
          Frequently Asked Question
        </h2>
        <p className="text-[#1e1e1eb2] text-xs text-center leading-4 w-full [font-family:'Arial-Regular',Helvetica] font-normal tracking-[0]">
        Everything you need to know about giving your child the smartest screen-free companion.
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
