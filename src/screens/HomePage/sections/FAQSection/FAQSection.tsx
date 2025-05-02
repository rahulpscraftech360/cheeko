import { PlayIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FAQSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname === '/product';

  return (
    <section className="relative w-full bg-[#ff7f11] overflow-hidden pt-4 pb-12 px-4">
      <div className="container relative mx-auto max-w-[375px] md:max-w-none">
        {/* Decorative circles */}
        <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <div className="absolute w-[356px] h-[383px] top-[223px] left-[9px] overflow-hidden rotate-[36.63deg]">
            <div className="relative w-[651px] h-[651px] top-[-22px] left-[-148px]">
              <div className="h-[651px]">
                <div className="relative w-[651px] h-[651px] rounded-[325.5px]">
                  <div className="absolute w-[202px] h-[202px] top-56 left-56 rounded-[101.22px] border-[0.64px] border-solid border-white" />
                  <div className="absolute w-[327px] h-[327px] top-[162px] left-[162px] rounded-[163.55px] border-[0.64px] border-solid border-white opacity-80" />
                  <div className="absolute w-[436px] h-[436px] top-[107px] left-[107px] rounded-[218.18px] border-[0.64px] border-solid border-white opacity-60" />
                  <div className="absolute w-[542px] h-[542px] top-[55px] left-[55px] rounded-[270.88px] border-[0.64px] border-solid border-white opacity-40" />
                  <div className="absolute w-[651px] h-[651px] top-0 left-0 rounded-[325.5px] border-[0.64px] border-solid border-white opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <Card className="flex flex-col w-full max-w-[383px] mx-auto md:max-w-[600px] items-center bg-transparent border-none shadow-none min-h-[70vh] justify-center">
          <CardContent className="flex flex-col items-start gap-5 p-0 w-full">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
             
              
              <div className="relative self-stretch ">
                    <img 
                      src="/maintitle.png" 
                      alt="AI Teddy Bear" 
                      className="w-full"
                    />
                  </div>
           
             

              <p className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-5 max-w-[80%]">
                Imagine the joy on your child&apos;s face when Chhota Bheem
                talks back, responds to their touch, and shares exciting stories
                just like a real friend!
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 relative self-stretch w-full mt-4 mb-10">
              {!isProductPage && (
                <Button 
                  className="w-full md:w-auto px-8 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-base"
                  onClick={() => navigate('/product')}
                >
                  Pre-Order Now!
                </Button>
                
              )}

              <Button className="w-full md:w-auto px-8 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-base mb-8">
                Our Story
                <PlayIcon className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Decorative leaf element */}
       
      </div>
      <div className="absolute w-[123px] h-[105px] bottom-[0px] right-0 rotate-90">
          <div className="relative h-[105px]">
            <img
              className="absolute w-[133px] h-[109px]  bottom-0 right-0 -rotate-90"
              alt="Vector"
              src="/vector-5-1.svg"
            />
            <img
              className="absolute w-[99px] h-[124px] bottom-0 right-0 -rotate-180 object-cover"
              alt="Leaf"
              src="/leaf.png"
            />
          </div>
        </div>
    </section>
  );
};