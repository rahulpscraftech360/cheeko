import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { useState } from "react";

export const ImageGallerySection = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductRoute = location.pathname === "/product";
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="flex flex-col w-full items-center gap-[60px] py-16">
      <Card className="w-full max-w-[1312px] h-[640px] bg-[#ff7f11] rounded-[40px] overflow-hidden border-none">
        <CardContent className="p-0 h-full flex items-center justify-center">
          {!isPlaying ? (
            <div 
              className="relative w-[637px] h-[637px]  bg-cover bg-center cursor-pointer"
              onClick={handleVideoClick}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] flex items-center justify-center">
                <img
                  className="w-full h-full"
                  alt="PlayIcon button"
                  src="/solar-play-bold.svg"
                />
              </div>
            </div>
          ) : (
            <video 
              className="w-full h-full object-contain"
              loop
              autoPlay
              src="/video/Animation01.mp4"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </CardContent>
      </Card>

      <div className="flex items-center justify-between w-full max-w-[1312px] gap-8">
        <Card className="flex w-1/2 h-[609px] bg-[#ff7f11] rounded-[40px] overflow-hidden border-none">
          <CardContent className="p-[9px] flex items-center justify-center w-full">
            <img
              className="w-full h-full object-cover"
              alt="AI Teddy"
              src="/412284286-cb0c8fc0-962a-4d41-bb4c-ac56d03b61c1-1-8.png"
            />
          </CardContent>
        </Card>

        <Card className="flex w-1/2 bg-[#ff7f11] rounded-[40px] overflow-hidden border-none">
          <CardContent className="flex flex-col items-start gap-[101px] p-8 py-[76px] w-full">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2 className="self-stretch mt-[-1.00px] font-['Baloo_2',Helvetica] font-bold text-white text-[88px] leading-[80px]">
                Let&apos;s hug, chat &amp; learn with AI Teddy!
              </h2>

              <p className="self-stretch font-['Arial-Regular',Helvetica] font-normal text-white text-xl leading-5">
                Select the perfect AI Chhota Bheem package for your child&#39;s
                learning adventure.
              </p>
            </div>

            <Button
              onClick={() => navigate('/product')}
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
