import { PlayIcon } from "lucide-react";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { TeddyImage } from "../../components/TeddyImage/TeddyImage";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { ContactSection } from "../HomePage/sections/ContactSection";

export const Test = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProductPage = location.pathname === '/product';
  const [scrollPosition, setScrollPosition] = useState(0);
  const [teddyPosition, setTeddyPosition] = useState(-100);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Animate teddy falling
    const animateTeddy = () => {
      setTeddyPosition(prev => {
        if (prev >= 65) return 65; 
        return prev + 2;
      });
    };

    const animation = setInterval(animateTeddy, 16); // ~60fps
    return () => clearInterval(animation);
  }, []);

  const teddyStyle: React.CSSProperties = {
    position: scrollPosition > 100 ? 'absolute' : 'fixed',
    top: scrollPosition > 100 ? `${Math.min(scrollPosition + 100, window.innerHeight)}px` : `${teddyPosition}%`,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: scrollPosition > 100 ? '50%' : '100%',
    height: 'auto',
    zIndex: 30,
    transition: scrollPosition > 100 ? 'none' : 'top 0.016s linear'
  };

  return (
    <>
      <section className="relative w-full bg-[#ff7f11] overflow-hidden py-12 px-4">
        <div className="container relative mx-auto max-w-[375px] md:max-w-none">
          {/* Decorative circles */}
          <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
            <div className="absolute w-[356px] h-[383px] top-[223px] left-[79px] overflow-hidden rotate-[36.63deg]">
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
          <Card className="flex flex-col w-full max-w-[343px] mx-auto md:max-w-[600px] items-center bg-transparent border-none shadow-none">
            <CardContent className="flex flex-col items-start gap-5 p-0 w-full">
              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                <div className="relative flex items-start">
                  <h1 className="relative [font-family:'Clash_Display-Bold',Helvetica] font-bold text-white text-[42px] md:text-[76px] tracking-[0] leading-[1.2]">
                    AI
                  </h1>
                  <img
                    className="w-[120px] h-[120px] -mt-5 -ml-2 object-cover md:w-[160px] md:h-[160px] md:-ml-4"
                    alt="Ai chat"
                    src="/ai-chat-02-3d-1.png"
                  />
                </div>
                <h1 className="relative [font-family:'Clash_Display-Bold',Helvetica] font-bold text-white text-[42px] md:text-[76px] tracking-[0] leading-[1.2]">
                  Teddy Bear!
                </h1>

                <p className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-white text-sm md:text-base tracking-[0] leading-5 max-w-[80%]">
                  Imagine the joy on your child&apos;s face when Chhota Bheem
                  talks back, responds to their touch, and shares exciting stories
                  just like a real friend!
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3 relative self-stretch w-full mt-4">
                {!isProductPage && (
                  <Button 
                    className="w-full md:w-auto px-8 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-base"
                    onClick={() => navigate('/product')}
                  >
                    Pre-Order Now!
                  </Button>
                )}

                <Button className="w-full md:w-auto px-8 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-base">
                  Our Story
                  <PlayIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Decorative leaf element */}
          <div className="absolute w-[123px] h-[105px] top-[373px] right-0 rotate-180">
            <div className="relative h-[105px]">
              <img
                className="absolute w-[123px] h-[105px] top-0 left-0 -rotate-180"
                alt="Vector"
                src="/vector-5-1.svg"
              />
              <img
                className="absolute w-[79px] h-[84px] top-5 left-[30px] -rotate-180 object-cover"
                alt="Leaf"
                src="/leaf.png"
              />
            </div>
          </div>
        </div>
      </section>

      <div style={teddyStyle}>
        <TeddyImage />
      </div>

      <div className="w-full">
        <ContactSection />
      </div>
    </>
  );
};