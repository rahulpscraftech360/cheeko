import { CheckIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LogoSection = (): JSX.Element => {
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
    <section className="mobile-pricing-section flex flex-col w-full max-w-[375px] mx-auto items-center gap-6 px-4 py-0">
      <header className="flex flex-col items-center gap-2 w-full">
        <h2 className="w-full [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[28px] text-center tracking-[0] leading-6">
          Get Yours Before They&apos;re GOne!
        </h2>
        <p className="text-[#1e1e1eb2] text-xs text-center leading-4 w-full [font-family:'Arial-Regular',Helvetica] font-normal tracking-[0]">
          Select the perfect AI Chhota Bheem package for your child&#39;s
          learning adventure.
        </p>
      </header>

      <Card className="flex flex-col h-[470px] items-start justify-center gap-2.5 px-[7px] py-5 relative self-stretch w-full bg-[#FF6B01] rounded-[20px] overflow-hidden border-none">
        <CardContent className="flex flex-col w-full items-center relative flex-1 grow p-0">
          <div className="flex flex-col w-[295px] items-start gap-5 relative flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] pt-10">
              <h3 className="relative self-stretch [font-family:'Baloo_2',Helvetica] font-bold text-white text-[52px] leading-[60px] mt-4">
                Save More
              </h3>

              <p className="text-white text-base leading-5 relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal tracking-[0]">
                Select the perfect AI Chhota Bheem package for your
                child&#39;s learning adventure.
              </p>
            </div>

            <div className="flex w-10 h-10 items-center gap-2 p-[7px] relative bg-white rounded-[19.5px]">
              <img
                className="relative w-6 h-6"
                alt="Majesticons arrow up"
                src="/majesticons-arrow-up-1.svg"
              />
            </div>
          </div>

          <img
            className="relative w-[328px] h-[328px] top-[52px] left-0 object-cover"
            alt="AI Chhota Bheem product"
            src="/image-8-1.png"
          />
        </CardContent>
      </Card>

      <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
        {/* Starter Package Card 1 */}
        <Card className="flex items-center gap-2.5 p-6 relative self-stretch w-full bg-[#d9d9d940] rounded-[20px] overflow-hidden border-none">
          <CardContent className="flex flex-col items-start gap-6 relative flex-1 grow p-0">
            <div className="flex flex-col items-start gap-7 relative self-stretch w-full">
              <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[40px] tracking-[0] leading-10">
                  Starter
                </h3>

                <p className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xl tracking-[0] leading-6">
                  What You will Get
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                {packageFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 relative self-stretch w-full"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-[#6BCB77] rounded-full">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xl tracking-[0] leading-8">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Divider"
                src="/divider.svg"
              />
            </div>

            <Button className="flex items-center justify-center gap-2.5 px-7 py-2.5 relative self-stretch w-full bg-[#FF6B01] rounded-[40px] h-auto">
              <span className="relative flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-7">
                Buy Now
              </span>
            </Button>
          </CardContent>
        </Card>

        {/* Starter Package Card 2 */}
        <Card className="flex items-center gap-2.5 p-6 relative self-stretch w-full bg-[#d9d9d940] rounded-[20px] overflow-hidden border-none">
          <CardContent className="flex flex-col items-start gap-6 relative flex-1 grow p-0">
            <div className="flex flex-col items-start gap-7 relative self-stretch w-full">
              <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full">
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[40px] tracking-[0] leading-10">
                  Starter
                </h3>

                <p className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xl tracking-[0] leading-6">
                  What You will Get
                </p>
              </div>

              <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
                {packageFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 relative self-stretch w-full"
                  >
                    <div className="flex items-center justify-center w-6 h-6 bg-[#6BCB77] rounded-full">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    <p className="relative flex-1 mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xl tracking-[0] leading-8">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Divider"
                src="/divider.svg"
              />
            </div>

            <Button className="flex items-center justify-center gap-2.5 px-7 py-2.5 relative self-stretch w-full bg-[#FF6B01] rounded-[40px] h-auto">
              <span className="relative flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-semibold text-white text-2xl text-center tracking-[0] leading-7">
                Buy Now
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};