import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { useState } from "react";

export const ImageGallerySection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductRoute = location.pathname === "/product";
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="flex flex-col w-full items-center gap-[60px] py-16">
      <Card className="w-full max-w-[1312px]  bg-[#FF6B01] rounded-[40px] overflow-hidden border-none">
        <CardContent className="p-0 h-full flex items-center justify-center">
         
            <video 
              className="w-full h-full object-contain"
              loop
              autoPlay
              muted
              playsInline
              src="/video/Explode_Animation02.mp4"
            >
          
            </video>
     
        </CardContent>
      </Card>

      <div className="flex items-center justify-between w-full max-w-[1312px] gap-8">
        <Card className="flex w-1/2 h-[609px] bg-[#FF6B01] rounded-[40px] overflow-hidden border-none">
          <CardContent className="flex items-center justify-center w-full">
            <img
              className="w-full h-full object-cover"
              alt="AI Teddy"
              src="/Device2.png"
            />
          </CardContent>
        </Card>

        <Card className="flex w-1/2 h-[609px] bg-[#FF6B01] rounded-[40px] overflow-hidden border-none">
          <CardContent className="flex flex-col items-start justify-between p-8 py-[76px] w-full">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2 className="self-stretch mt-[-1.00px] font-['Baloo_2',Helvetica] font-bold text-white text-[76px] leading-[80px]">
              Make Playtime Smarter with CheekoAI!
              </h2>

              <p className="self-stretch font-['Arial-Regular',Helvetica] font-normal text-white text-xl leading-7 md:leading-8">
              Choose your favorite CheekoAI companion and bring home the gift of screen-free conversations, learning, and fun.
              </p>
            </div>

            <Button
              onClick={() => window.open('https://pages.razorpay.com/pl_QBiR5ZRuouU1ZH/view', '_blank', 'noopener,noreferrer')}
              className={`w-full py-3.5 px-7 bg-black hover:bg-black/90 rounded-[40px] h-auto ${isProductRoute ? 'invisible' : ''}`}
            >
              <span className="font-['Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-2xl text-center leading-7">
                Pre-Order Now!
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
