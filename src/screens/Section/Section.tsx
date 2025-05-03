import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Section = (): JSX.Element => {
  return (
    <section
      className="relative w-full  h-[600px] bg-[#ff6b01]  overflow-hidden"
     
    >
      <div className="flex flex-col items-center justify-center gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[725px] px-4">
        <Card className="bg-transparent border-none shadow-none w-full">
          <CardContent className="flex flex-col items-center gap-2 p-0">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Clash_Display-Bold',Helvetica] font-bold text-white text-5xl md:text-6xl text-center tracking-[0] leading-[67.2px]">
            Meet Your Child’s New Best Friend
            </h2>

            <p className="relative self-stretch [font-family:'Nunito_Sans',Helvetica] font-normal text-white text-lg text-center tracking-[0] leading-[26px]">
            CheekoAI pairs with any plush toy to create an interactive buddy that talks, plays, and grows smarter every day.
            </p>
          </CardContent>
        </Card>

        <div className="inline-flex items-center gap-3 relative">
          <Button 
            onClick={() => window.open('https://pages.razorpay.com/pl_QBiR5ZRuouU1ZH/view', '_blank', 'noopener,noreferrer')}
            className="w-60 h-12 bg-black hover:bg-black/90 rounded-[110px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-white text-xl"
          >
            Pre-Order Now!
          </Button>
        </div>
      </div>

      <img
        className="absolute w-[333px] h-[500px] top-20 left-2 object-cover"
        alt="AI toy robot on the left"
        src="/Puppy_01 1.png"
      />

      <img
        className="absolute w-[373px] h-[500px] top-20 right-2 object-cover"
        alt="AI toy robot on the right"
        src="/penquin.png"
      />
    </section>
  );
};
