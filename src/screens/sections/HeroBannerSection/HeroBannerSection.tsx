import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

export const HeroBannerSection = (): JSX.Element => {
  const navigate = useNavigate();
  const [leftSectionVisible, setLeftSectionVisible] = useState(false);
  const [rightSectionVisible, setRightSectionVisible] = useState(false);
  const [teddyVisible, setTeddyVisible] = useState(false);
  const [teddyPosition, setTeddyPosition] = useState(-700);
  const [animatedStats, setAnimatedStats] = useState<number[]>([0, 0, 0]);
  const [teddyAnimationComplete, setTeddyAnimationComplete] = useState(false);
  const [statsVisibility, setStatsVisibility] = useState(0);

  const statsData = [
    { value: "90%", label: "Accurate Responses" },
    { value: "24/7", label: "Learning & Fun" },
    { value: "8h+ ", label: "Battery Life" },
  ];

  const [bounceCount, setBounceCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setLeftSectionVisible(true), 100);
    setTimeout(() => setRightSectionVisible(true), 600);
    setTimeout(() => setTeddyVisible(true), 200);
    
    let animationId: number;
    let lastTime = 0;
    const FALL_SPEED = 700;
    const FINAL_POSITION = 200; // Changed from 360 to 260 to position teddy higher
    const BOUNCE_HEIGHT = 100;
    const BOUNCE_DAMPING = 0.6;
    
    if (teddyVisible) {
      const animateTeddy = (currentTime: number) => {
        if (!lastTime) lastTime = currentTime;
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;
        
        setTeddyPosition(prev => {
          if (prev >= FINAL_POSITION && bounceCount === 0) {
            setBounceCount(1);
            return FINAL_POSITION + BOUNCE_HEIGHT;
          } else if (bounceCount === 1) {
            const newPosition = prev - (FALL_SPEED * deltaTime * BOUNCE_DAMPING);
            if (newPosition <= FINAL_POSITION) {
              setTeddyAnimationComplete(true);
              return FINAL_POSITION;
            }
            return newPosition;
          }
          const newPosition = prev + (FALL_SPEED * deltaTime);
          return Math.min(newPosition, FINAL_POSITION);
        });
        
        if (!teddyAnimationComplete) {
          animationId = requestAnimationFrame(animateTeddy);
        }
      };
      
      animationId = requestAnimationFrame(animateTeddy);
    }
    
    return () => cancelAnimationFrame(animationId);
  }, [teddyVisible, bounceCount, teddyAnimationComplete]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let isAnimating = false;
    
    if (rightSectionVisible && teddyVisible && !isAnimating) {
      isAnimating = true;
      const animationProgress = [0, 0, 0];
      const duration = 1400;
      const steps = 20;
      const interval = duration / steps;
      let currentStep = 0;

      const animate = () => {
        if (currentStep < steps) {
          currentStep++;
          const progress = currentStep / steps;
          
          animationProgress[0] = progress;
          animationProgress[1] = progress;
          animationProgress[2] = progress;
          
          setAnimatedStats(animationProgress);
          setStatsVisibility(progress);
          timeoutId = setTimeout(animate, interval);
        }
      };

      animate();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [rightSectionVisible, teddyVisible]);

  const leftSectionStyle = {
    transform: leftSectionVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.5s ease-out',
  };

  const rightSectionStyle = {
    transform: rightSectionVisible ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.5s ease-out',
    opacity: statsVisibility,
  };

  const teddyStyle: React.CSSProperties = {
    position: 'absolute',
    transform: `translateY(${teddyPosition}px)`,
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    transition: 'transform 0.04s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    opacity: teddyPosition > -700 ? Math.min((teddyPosition + 700) / 200, 1) : 0,
  };

  return (
    <section className="relative w-full h-screen bg-[#f7fbfe] overflow-hidden shadow-[0px_8px_20px_#0000001a] ">
      <div className="relative w-full h-full">
        <img
          className="absolute w-[100px] sm:w-[130px] md:w-[200px] lg:w-[259px] h-[80px] sm:h-[100px] md:h-[160px] lg:h-[205px] bottom-0 right-0 -rotate-0 z-10"
          alt="leaf2"
          src="/leaf2.png"
        />
        
        {/* Orange left section */}
        <div className="absolute w-full sm:w-[70%] md:w-[65%] lg:w-[58%] h-screen top-0 left-0 bg-[#FF6B01] overflow-hidden rounded-[0px_0px_0px_0px]" style={leftSectionStyle}>
          <div className="absolute bottom-0 left-0">
            <img
              className="w-[158px] md:w-[221px] h-[153px] md:h-[153px]"
              alt="left"
              src="/left.png"
            />
          </div>
          <div className="relative w-full  h-screen top-[10%]">
            <div className="flex flex-col w-6/4 items-center absolute top-0 left-[36px] md:left-10">
              <div className="flex flex-col items-start gap-14 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]  w-1/2">
                  <div className="relative mt-[80px]">
                    <img 
                      src="/preorder.png" 
                      alt="Pre-order mobile" 
                      className="w-full max-w-[40%] sm:max-w-[40%] md:max-w-[40%] lg:max-w-[40%] mb-4"
                    />
                    <img 
                      src="/maintitle2.png" 
                      alt="AI Teddy Bear" 
                      className="w-full max-w-[80%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[80%] mt-0"
                    />
                  </div>
             
                </div>

                <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <Button  onClick={() => window.open('https://rzp.io/rzp/uOIscPfX', '_blank', 'noopener,noreferrer')} className="w-[300px] md:w-[300px] justify-center px-5 md:px-7 py-2.5 md:py-3.5 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-xl md:text-2xl h-auto">
                     Pre-Order Now
                  </Button>
                
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teddy image */}
        {teddyVisible && (
          <div className="absolute w-full flex justify-center sm:justify-start sm:left-[35%] md:left-[40%] lg:left-[45%] translate-x-[-50%]" style={{ 
            zIndex: 10,
            pointerEvents: 'none',
            top: '50%',
            transform: 'translateY(-50%)'
          }}>
            <img
              className="object-contain max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[790px] xl:max-w-[890px] max-h-[60vh] sm:max-h-[65vh] md:max-h-[65vh] lg:max-h-[75vh] w-auto h-auto"
              style={{
                ...teddyStyle,
                position: 'relative',
                left: 'auto'
              }}
              alt="AI Teddy Bear"
              src="/T-rex.png"
            />
          </div>
        )}
       

        {/* Stats cards - updated positioning */}
        <div className="flex flex-col w-[104px] sm:w-[120px] md:w-[140px] lg:w-[161px] items-start gap-2 md:gap-3 absolute top-[35%] right-[5%] sm:right-[8%] md:right-[10%] lg:right-[12%]" style={rightSectionStyle}>
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-1.5 md:gap-2.5 px-[8px] md:px-[13px] py-[17px] md:py-[26px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg md:rounded-xl overflow-hidden shadow-[1px_1px_20px_#0000001a]"
            >
              <CardContent className="flex flex-col items-center gap-0.5 md:gap-1 relative self-stretch w-full flex-[0_0_auto] p-0">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#FF6B01] text-[21px] md:text-[32px] text-center tracking-[0] leading-5 md:leading-7">
                  <span style={{ opacity: animatedStats[index] }}>
                    {stat.value}
                  </span>
                </div>
                <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs md:text-base text-center leading-3 md:leading-4 relative self-stretch tracking-[0]">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};