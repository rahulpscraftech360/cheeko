import { ArrowLeftIcon, ArrowRightIcon, StarIcon } from "lucide-react";

import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";


export const RelatedProductsSection = (): JSX.Element => {
  // Testimonial data for mapping
  const testimonials = [
    {
      id: 1,
      name: "Jane Doe",
      title: "Product Designer",
      content:
        "ToyAI has been a game-changer for my daughter's learning journey. She's improved her math skills significantly while having so much fun she doesn't even realize she's learning!",
      avatar: "/ellipse-76.svg",
      highlighted: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Product Designer",
      content:
        "ToyAI has been a game-changer for my daughter's learning journey. She's improved her math skills significantly while having so much fun she doesn't even realize she's learning!",
      avatar: "/ellipse-76-1.svg",
      highlighted: false,
    },
    {
      id: 3,
      name: "Jane Doe",
      title: "Product Designer",
      content:
        "ToyAI has been a game-changer for my daughter's learning journey. She's improved her math skills significantly while having so much fun she doesn't even realize she's learning!",
      avatar: "/ellipse-76-2.svg",
      highlighted: false,
    },
  ];

  return (
    <section className="w-full py-16 bg-[#d9d9d940]">
      <div className="flex flex-col items-center gap-10 px-16 max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center gap-2 max-w-[808px]">
          <h2 className="font-bold text-[56px] text-[#1e1e1e] text-center leading-[72px] [font-family:'Baloo_2',Helvetica]">
            Why Parents Love It!
          </h2>
          <p className="text-2xl text-[#1e1e1eb2] text-center leading-8 [font-family:'Arial-Regular',Helvetica]">
            Join thousands of happy families who have made AI Chhota Bheem part
            of their children&#39;s learning journey.
          </p>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="flex items-center gap-6 w-full">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className={`flex-1 rounded-[16px_16px_0px_0px] ${
                  testimonial.highlighted ? "border-b-4 border-[#ff7f11]" : ""
                }`}
              >
                <CardContent className="flex flex-col gap-7 p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-[85.8px] h-[85.8px] mt-[-12.90px] mb-[-24.90px] ml-[-18.90px]">
                        <AvatarImage src={testimonial.avatar} alt="Profile" />
                      </Avatar>
                      <div className="flex flex-col gap-0.5 flex-1">
                        <h3 className="font-bold text-xl text-[#1b1b1b] leading-7 [font-family:'Baloo_2',Helvetica]">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-[#494949] leading-[18px] [font-family:'Arial-Regular',Helvetica]">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-base text-[#1e1e1eb2] leading-6 [font-family:'Arial-Regular',Helvetica]">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className="w-5 h-5 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end gap-4 w-full">
            <Button
              variant="outline"
              size="icon"
              className="w-10 h-10 rounded-[19.5px] bg-white"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </Button>
            <Button
              size="icon"
              className="w-10 h-10 rounded-[19.5px] bg-[#ff7f11]"
            >
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
