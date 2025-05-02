import { InfoIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
import { Card, CardContent } from "../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Product info data
  const productInfoItems = [
    {
      label: "Dimensions",
      content: "15 cm height, perfect for tabletop or bedside placement",
    },
    { label: "Power", content: "Rechargeable via Type-C" },
    {
      label: "Materials",
      content:
        "Safe, non-toxic, durable materials, including plush elements and sturdy plastic base",
    },
    {
      label: "Connectivity",
      content: "Wi-Fi enabled for seamless AI updates and interactions",
    },
    {
      label: "Supported Languages",
      content: "English, French,  Chinese, Japanese, Korean, Spanish etc",
    },
  ];

  // Product description
  const productDescription =
    "AI Teddy is more than just a toy—it's a smart, interactive companion designed to grow with your child! Powered by advanced AI, AI Teddy listens, chats, tells stories, and even helps with learning. With its soft, cuddly design and intelligent features, it makes playtime fun and educational. Meet Little Cactus, the interactive AI-powered companion that brings fun and conversation into your child's world! This talking cactus is more than just a toy—it's a friend that listens, responds, and engages in playful banter, helping kids develop communication skills and providing endless entertainment.";

  return (
    <Card className="w-full border-2 border-solid border-[#d9d9d9e6] rounded-[20px] p-[18px] mx-auto">
      <CardContent className="p-0">
        <Accordion type="multiple"  className="w-full "  defaultValue={["product-info", "delivery-returns"]} >
          <div className="flex flex-col md:flex-row gap-4">
            {/* Product InfoIcon Section */}
            <AccordionItem value="product-info" className="flex-1 border-none">
              <AccordionTrigger className="flex items-center gap-2.5 py-2 px-0">
                <div className="flex items-center gap-2.5">
                  <InfoIcon className="w-6 h-6" />
                  <span className="font-['Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-2xl leading-5">
                    Product&nbsp;&nbsp;Info
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-[25px] py-[21px]">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    {productInfoItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2.5">
                        <img
                          className="w-4 h-4"
                          alt="Vector"
                          src="/vector.svg"
                        />
                        <div className="flex-1 mt-[-1.00px] font-['Arial-Bold',Helvetica] text-[#1e1e1eb2] text-base leading-4">
                          <span className="font-bold leading-[21px]">
                            {item.label} :{" "}
                          </span>
                          <span className="font-['Arial-Regular',Helvetica] text-sm leading-[21px]">
                            {item.content}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-['Arial-Regular',Helvetica] text-[#1e1e1eb2] leading-6">
                    {productDescription}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Delivery & Returns Section */}
            <AccordionItem
              value="delivery-returns"
              className="flex-1 border-none"
            >
              <AccordionTrigger className="flex items-center gap-2.5 py-2 px-0">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-6 h-6">
                    <div className="relative h-6 rotate-180">
                    <InfoIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <span className="font-['Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-2xl leading-5">
                    Delivery &amp; Returns
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-[25px] py-[21px]">
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-4">
                    {productInfoItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-2.5">
                        <img
                          className="w-4 h-4"
                          alt="Vector"
                          src="/vector.svg"
                        />
                        <div className="flex-1 mt-[-1.00px] font-['Arial-Bold',Helvetica] text-[#1e1e1eb2] text-base leading-4">
                          <span className="font-bold leading-[21px]">
                            {item.label} :{" "}
                          </span>
                          <span className="font-['Arial-Regular',Helvetica] text-sm leading-[21px]">
                            {item.content}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs font-['Arial-Regular',Helvetica] text-[#1e1e1eb2] leading-6">
                    {productDescription}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion>
      </CardContent>
    </Card>
  );
};
