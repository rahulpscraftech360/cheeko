import { CheckIcon, InfoIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

export const VideoSection = (): JSX.Element => {
  // Thumbnail data for mapping
  const navigate = useNavigate();
  const thumbnails = [
    {
      id: 1,
      src: "/412284286-cb0c8fc0-962a-4d41-bb4c-ac56d03b61c1-1-8.png",
      alt: "Element",
    },
    {
      id: 2,
      src: "/412284286-cb0c8fc0-962a-4d41-bb4c-ac56d03b61c1-1-8.png",
      alt: "Element",
    },
    {
      id: 3,
      src: "/412284286-cb0c8fc0-962a-4d41-bb4c-ac56d03b61c1-1-8.png",
      alt: "Element",
    },
    {
      id: 4,
      src: "/412284286-cb0c8fc0-962a-4d41-bb4c-ac56d03b61c1-1-8.png",
      alt: "Element",
    },
  ];

  // Feature list data for mapping
  const features = [
    {
      title: "Friendly Conversations :",
      description: "AI Teddy listens and responds like a real friend.",
    },
    {
      title: "Exciting Storytelling :",
      description: "Enjoy personalized bedtime stories and fun adventures.",
    },
    {
      title: "Smart Learning :",
      description: "Helps with early education through games and activities.",
    },
    {
      title: "Emotional Support :",
      description: "Provides comfort and companionship anytime.",
    },
    {
      title: "Parental Controls :",
      description: "Safe, secure, and designed with kids in mind.",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row items-start justify-between gap-8 w-full pt-6 md:p-16 ">
      {/* Left side - Product images */}
      <div className="flex flex-col w-full md:w-1/2 items-center gap-7">
        <Card className="w-full bg-[#d9d9d94c] rounded-[20px] overflow-hidden border-none">
        <CardContent className="p-[30px] sm:p-[53px] py-0.5 h-[380px] sm:h-[540px] flex items-center">
            <img
              className="w-full h-full object-contain"
              alt="Element"
              src="/412284286-cb0c8fc0-962a-4d41-bb4c-ac56d03b61c1-1-8.png"
            />
          </CardContent>
        </Card> 

        <div className="flex items-center justify-center gap-7 w-full">
          {thumbnails.map((thumbnail) => (
                      <Card
              key={thumbnail.id}
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] bg-[#d9d9d933] rounded-[15px] md:rounded-[20px] overflow-hidden border-none"
            >
              <CardContent className="p-[5px] md:p-[7px] h-full flex items-center">
                <img
                  className="w-full h-full object-cover"
                  alt={thumbnail.alt}
                  src={thumbnail.src}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Right side - Product details */}
      <div className="flex flex-col w-full md:w-1/2 items-start gap-7">
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <h1 className="font-bold text-[44px] leading-[56px] [font-family:'Baloo_2',Helvetica] text-[#1e1e1e] tracking-[0]">
              AI - Teddy Bear
            </h1>

            <div className="flex items-center gap-2 w-full">
              <div className="flex items-start gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <img
                    key={star}
                    className="w-5 h-5"
                    alt="Star"
                    src="/star.svg"
                  />
                ))}
              </div>
              <span className="flex-1 [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-base">
                (2.5 K) Reviews
              </span>
            </div>
          </div>

          <div className="text-[#ff7f11] text-[64px] leading-[56px] [font-family:'Baloo_2',Helvetica] font-bold tracking-[0]">
            $99.9
          </div>
        </div>

        <Separator className="w-full" />

        <div className="flex flex-col items-start gap-4 w-full">
          <p className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-base leading-[26px]">
            AI Teddy is more than just a toy—it&#39;s a smart, interactive
            companion designed to grow with your child! Powered by advanced AI,
            AI Teddy listens, chats, tells stories, and even helps with
            learning. With its soft, cuddly design and intelligent features, it
            makes playtime fun and educational.
          </p>

          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-lg leading-5">
              Why Kids Love AI Teddy:
            </h3>

            <div className="flex flex-col items-start gap-1.5 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2.5 w-full">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#6BCB77] flex items-center justify-center mt-0.5">
                      <CheckIcon className="w-3 h-3 text-white" />
                    </div>
                  <div className="flex-1 [font-family:'Arial-Bold',Helvetica] font-normal text-[#1e1e1eb2] text-sm leading-8">
                    <span className="font-bold">{feature.title}</span>
                    <span className="font-bold text-base">&nbsp;</span>
                    <span className="[font-family:'Arial-Regular',Helvetica] text-xs">
                      {feature.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="w-full" />

        <div className="flex items-center gap-3 w-full">
          <span className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-lg leading-5 whitespace-nowrap">
            Quantity :
          </span>

          <div className="relative w-[65px] h-6 rounded overflow-hidden border-[1.5px] border-solid border-[#d9d9d9] flex items-center justify-between px-2">
            <button className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e80] text-lg leading-[10px]">
              -
            </button>
            <span className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-lg leading-[10px]">
              1
            </span>
            <button className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e80] text-lg leading-[10px]">
              +
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
                <InfoIcon className="w-5 h-5" />
                <span>Cash on delivery is available on this product</span>
              </div>

              
              <div className="flex justify-end">
                <Button variant="outline" className="text-gray-600 border-2 border-gray-300 rounded-xl px-6">
                  Remove
                </Button>
              </div>
        <Button className="w-full bg-[#ff7f11] hover:bg-[#e67200] rounded-[40px] h-auto py-2.5 px-7">
          <span onClick={()=>{navigate('/cart')}} className="[font-family:'Baloo_2',Helvetica] font-semibold text-white text-2xl leading-7">
            Add to Cart
          </span>
          <img className="w-6 h-6 ml-2" alt="Bxs cart" src="/bxs-cart.svg" />
        </Button>
      </div>
    </section>
  );
};
