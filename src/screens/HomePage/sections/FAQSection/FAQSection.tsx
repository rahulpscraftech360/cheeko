import { PlayIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FAQSection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname === '/product';

  return (
    <section className="relative w-full bg-[#FF6B01] overflow-hidden  pb-12 ">
      <div className="absolute bottom-0 left-0">
            <img
              className="w-[100px] md:w-[221px] h-[100px] md:h-[153px]"
              alt="left"
              src="/left.png"
            />
             </div>
              <div className="absolute w-full h-full  ">
      <img
              className="absolute w-[168px] md:w-[259px] h-[133px] md:h-[205px] bottom-0 right-0 -rotate-0"
              alt="leaf2"
              src="/leaf2.png"
            />
            </div>
      <div className="container max-w-[375px] left-0">
        {/* Decorative circles */}
        
       

        {/* Main content */}
        <Card className="flex flex-col w-full  items-center bg-transparent border-none shadow-none min-h-[60vh] justify-start pt-16 pr-5">
          <CardContent className="flex flex-col items-start gap-5 p-0 w-full">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
             
              
              <div className="relative self-stretch overflow-visible">
                    <img 
                      src="/maintitleMobile.png" 
                      alt="AI Teddy Bear" 
                      className="w-[110%] max-w-[150%] transform scale-108 "
                    />
                  </div>
           
             

              
            </div>

            <div className="flex flex-row  gap-3 relative  w-full mt-4 mb-10">
              {!isProductPage && (
                <Button 
                  className="flex-1 justify-center   py-2.5 md:py-3.5 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-xl md:text-2xl h-auto"
                  onClick={() => window.open('https://rzp.io/rzp/uOIscPfX', '_blank', 'noopener,noreferrer')}
                >
                  Pre-Order Now – ₹4999
                </Button>
              )}
              {/* <Button className="flex-1 justify-center py-2.5 md:py-3.5 bg-transparent border-2 border-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-black hover:text-white text-xl md:text-2xl h-auto">
                Explore Toys
              </Button> */}
            </div>
          </CardContent>
        </Card>

      
       
      </div>
      
      <div className="absolute w-[123px] h-[105px] bottom-[0px] right-0 rotate-90">
        
        </div>
    </section>
  );
};