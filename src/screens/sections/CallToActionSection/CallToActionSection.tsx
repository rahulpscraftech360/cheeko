import { CheckIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

export const CallToActionSection = (): JSX.Element => {
  // Package features data
  const packageFeatures = [
    "ToyAI Basic Hardware",
    "ToyAI Basic Hardware",
    "ToyAI Basic Hardware",
    "ToyAI Basic Hardware",
    "ToyAI Basic Hardware",
    "ToyAI Basic Hardware",
  ];

  return (
    <section className="flex flex-col w-full items-center gap-[60px] px-16 py-20">
      <div className="w-full flex flex-col items-center gap-2">
        <h2 className="w-full [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[56px] text-center tracking-[0] leading-[72px]">
          Get Yours Before They&apos;re Gone!
        </h2>

        <p className="text-[#1e1e1eb2] text-2xl text-center leading-8 w-full [font-family:'Arial-Regular',Helvetica] font-normal tracking-[0]">
          Select the perfect AI Chhota Bheem package for your child&#39;s
          learning adventure.
        </p>
      </div>

      <div className="flex items-center gap-[29px] w-full">
        {/* Promotional Card */}
        <Card className="flex-1 h-[520px] bg-[#FF6B01] rounded-[20px] overflow-hidden border-none">
          <CardContent className="p-0 h-full">
            <div className="relative w-full h-full p-6">
              <img
                className="absolute w-[398px] h-[398px] bottom-0 left-0 object-cover"
                alt="AI Chhota Bheem product"
                src="/image-8-1.png"
              />

              <div className="flex flex-col w-[322px] items-start gap-5">
                <div className="flex flex-col items-start gap-2 w-full">
                  <h3 className="w-full font-bold text-[52px] leading-10 [font-family:'Baloo_2',Helvetica] text-white tracking-[0] mt-4">
                    Save More
                  </h3>

                  <p className="text-white text-base leading-5 w-full [font-family:'Arial-Regular',Helvetica] font-normal tracking-[0]">
                    Select the perfect AI Chhota Bheem package for your
                    child&#39;s learning adventure.
                  </p>
                </div>

                <div className="flex w-10 h-10 items-center justify-center bg-white rounded-[19.5px]">
                  <img
                    className="w-6 h-6"
                    alt="Arrow up"
                    src="/majesticons-arrow-up.svg"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Starter Package Card */}
        <Card className="flex-1 bg-[#d9d9d940] rounded-[20px] overflow-hidden border-none">
          <CardContent className="p-6">
            <div className="flex flex-col items-start gap-7 w-full">
              <div className="flex flex-col items-start justify-center gap-2 w-full">
                <CardTitle className="[font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[40px] leading-10">
                  Starter
                </CardTitle>

                <CardDescription className="[font-family:'Arial-Regular',Helvetica] text-[#1e1e1eb2] text-xl leading-6">
                  What You will Get
                </CardDescription>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                {packageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2.5 w-full">
                     <div className="flex items-center justify-center w-6 h-6 bg-[#6BCB77] rounded-full">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xl leading-8">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="w-full" />
            </div>

            <Button className="w-full mt-6 bg-[#FF6B01] hover:bg-[#e67200] rounded-[40px] h-auto py-2.5 px-7">
              <span className="[font-family:'Baloo_2',Helvetica] font-semibold text-white text-2xl text-center leading-7">
                Buy Now
              </span>
            </Button>
          </CardContent>
        </Card>

        {/* Premium Package Card (duplicate of Starter) */}
        <Card className="flex-1 bg-[#d9d9d940] rounded-[20px] overflow-hidden border-none">
          <CardContent className="p-6">
            <div className="flex flex-col items-start gap-7 w-full">
              <div className="flex flex-col items-start justify-center gap-2 w-full">
                <CardTitle className="[font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[40px] leading-10">
                  Starter
                </CardTitle>

                <CardDescription className="[font-family:'Arial-Regular',Helvetica] text-[#1e1e1eb2] text-xl leading-6">
                  What You will Get
                </CardDescription>
              </div>

              <div className="flex flex-col items-start gap-4 w-full">
                {packageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2.5 w-full">
                     <div className="flex items-center justify-center w-6 h-6 bg-[#6BCB77] rounded-full">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <span className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xl leading-8">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Separator className="w-full" />
            </div>

            <Button className="w-full mt-6 bg-[#FF6B01] hover:bg-[#e67200] rounded-[40px] h-auto py-2.5 px-7">
              <span className="[font-family:'Baloo_2',Helvetica] font-semibold text-white text-2xl text-center leading-7">
                Buy Now
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
