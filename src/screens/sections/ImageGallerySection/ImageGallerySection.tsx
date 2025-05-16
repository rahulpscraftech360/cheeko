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
    <section className="flex flex-col w-full items-center gap-[30px] sm:gap-[40px] md:gap-[60px] py-8 sm:py-12 md:py-16">
      <Card className="w-full max-w-[1312px] bg-[#FF6B01] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border-none">
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

      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-[1312px] gap-4 sm:gap-6 md:gap-8">
        <Card className="flex w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[609px] bg-[#FF6B01] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border-none">
          <CardContent className="flex items-center justify-center w-full">
            <img
              className="w-full h-full object-cover"
              alt="AI Teddy"
              src="/Device2.png"
            />
          </CardContent>
        </Card>

        <Card className="flex w-full md:w-1/2 h-auto sm:h-auto md:h-[500px] lg:h-[609px] bg-[#FF6B01] rounded-[20px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border-none mt-4 md:mt-0">
          <CardContent className="flex flex-col items-start justify-between p-4 sm:p-6 md:p-8 py-[30px] sm:py-[40px] md:py-[60px] w-full">
            <div className="flex flex-col items-center justify-between   gap-3 sm:gap-4 md:gap-5 w-full">
              <h2 className="self-stretch mt-[-1.00px] font-['Baloo_2',Helvetica] font-bold text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl  text-center">
                Make Playtime Smarter with CheekoAI!
              </h2>

              <p className="self-stretch font-['Arial-Regular',Helvetica] font-normal text-white text-sm sm:text-base md:text-lg lg:text-xl text-center ">
                Choose your favorite CheekoAI companion and bring home the gift of screen-free conversations, learning, and fun.
              </p>
            </div>

            <Button
              onClick={() => window.open('https://rzp.io/rzp/uOIscPfX', '_blank', 'noopener,noreferrer')}
              className={`w-full py-2 sm:py-2.5 md:py-3 lg:py-3.5 px-3 sm:px-4 md:px-5 lg:px-7 bg-black hover:bg-black/90 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] h-auto mt-4 sm:mt-6 md:mt-0 ${isProductRoute ? 'invisible' : ''}`}
            >
              <span className="font-['Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-base sm:text-lg md:text-xl lg:text-2xl text-center leading-5 sm:leading-6 md:leading-6 lg:leading-7">
                Pre-Order Now
              </span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
