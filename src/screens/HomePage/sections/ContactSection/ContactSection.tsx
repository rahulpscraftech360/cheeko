import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const ContactSection = (): JSX.Element => {
  // Data for the stat cards
  const statCards = [
    { value: "99%", label: "Parent Satisfaction" },
    { value: "24/7", label: "Learning & Fun" },
    { value: "5M+", label: "Happy Children" },
   
  ];

  return (
    <section className="w-full px-4 py-6 relative">
      {/* Increased margin to ensure full visibility of the overlapping image */}
      <div className="mt-[300px] relative z-20">
        <div className="grid grid-cols-2 gap-2">
          {/* First two cards in the 2-column grid */}
          {statCards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              className="rounded-xl shadow-[1px_1px_20px_#0000001a] overflow-hidden bg-white"
            >
              <CardContent className="p-[13px] py-[26px]">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="self-stretch [font-family:'Baloo_2',Helvetica] font-bold text-[#ff7f11] text-[32px] leading-7">
                    {card.value}
                  </div>
                  <div className="self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-base leading-4">
                    {card.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Last card with full width (col-span-2) */}
          {statCards.length > 2 && (
            <Card
              className="rounded-xl shadow-[1px_1px_20px_#0000001a] overflow-hidden bg-white col-span-2"
            >
              <CardContent className="p-[13px] py-[26px]">
                <div className="flex flex-col items-center gap-1 text-center">
                  <div className="self-stretch [font-family:'Baloo_2',Helvetica] font-bold text-[#ff7f11] text-[32px] leading-7">
                    {statCards[2].value}
                  </div>
                  <div className="self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-base leading-4">
                    {statCards[2].label}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};