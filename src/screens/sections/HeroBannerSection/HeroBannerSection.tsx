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
  
    { value: "99%", label: "Parent Satisfaction" },
    { value: "24/7", label: "Learning & Fun" },
    { value: "5M+ ", label: "Happy Children" },
  ];

  // Update the initial position and add bounce parameters
  
  const [bounceCount, setBounceCount] = useState(0);

  useEffect(() => {
    setTimeout(() => setLeftSectionVisible(true), 100);
    setTimeout(() => setRightSectionVisible(true), 600);
    setTimeout(() => setTeddyVisible(true), 200);
    
    let animationId: number;
    let lastTime = 0;
    const FALL_SPEED = 700; // Reduced from 500 (40% of original speed)
    const FINAL_POSITION = 180;
    const BOUNCE_HEIGHT = 100;
    const BOUNCE_DAMPING = 0.6; // Reduced damping for longer bounce decay
    
    if (teddyVisible) {
      const animateTeddy = (currentTime: number) => {
        if (!lastTime) lastTime = currentTime;
        const deltaTime = (currentTime - lastTime) / 1000;
        lastTime = currentTime;
        
        setTeddyPosition(prev => {
          // Smoother bounce logic with damping
          if (prev >= FINAL_POSITION && bounceCount === 0) {
            setBounceCount(1);
            return FINAL_POSITION + BOUNCE_HEIGHT;
          } else if (bounceCount === 1) {
            const newPosition = prev - (FALL_SPEED * deltaTime * BOUNCE_DAMPING);
            if (newPosition <= FINAL_POSITION) {
             // setBounceCount(0); // Reset for potential subsequent bounces
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
  }, [teddyVisible, bounceCount, teddyAnimationComplete]); // Removed teddyPosition from deps

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let isAnimating = false;
    
    if (rightSectionVisible && teddyVisible && !isAnimating) {
      isAnimating = true;
      // Create an array to track animation progress for each stat
      const animationProgress = [0, 0, 0];
      const duration = 1400;
      const steps = 20;
      const interval = duration / steps;
      let currentStep = 0;

      const animate = () => {
        if (currentStep < steps) {
          currentStep++;
          const progress = currentStep / steps;
          
          // Update animation progress
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
    left: '695px', // Increased from 535px to move right
    width: '690px',
    height: '690px',
    transition: 'transform 0.04s cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Increased from 0.03s
    opacity: teddyPosition > -700 ? Math.min((teddyPosition + 700) / 200, 1) : 0,
  };

  return (
    <section className="relative w-full h-[800px] bg-[#f7fbfe]  overflow-hidden shadow-[0px_8px_20px_#0000001a]">
      <div className="relative w-full h-full">
        {/* Adjusted width with proper media query syntax */}
        <div className="absolute w-[600px] md:w-[1069px] h-[800px] top-0 left-0 bg-[#FF6B01] overflow-hidden  rounded-[0px_60px_60px_0px]" style={leftSectionStyle}>
          <div className="relative w-[510px] md:w-[987px] h-[824px] top-[156px] -left-[26px] md:-left-40">
            <div className="absolute w-[230px] md:w-[356px] h-[248px] md:h-[383px] top-[372px] left-[51px] md:left-[79px] overflow-hidden rotate-[36.63deg]">
              <div className="relative w-[422px] md:w-[651px] h-[422px] md:h-[651px] top-[-14px] md:top-[-22px] left-[-96px] md:left-[-148px]">
                <div className="h-[422px] md:h-[651px]">
                  <div className="relative w-[422px] md:w-[651px] h-[422px] md:h-[651px] rounded-[211px] md:rounded-[325.5px]">
                    <div className="absolute w-[131px] md:w-[202px] h-[131px] md:h-[202px] top-[36px] md:top-56 left-[36px] md:left-56 rounded-[65.5px] md:rounded-[101.22px] border-[0.64px] border-solid border-white" />
                    <div className="absolute w-[212px] md:w-[327px] h-[212px] md:h-[327px] top-[105px] md:top-[162px] left-[105px] md:left-[162px] rounded-[106px] md:rounded-[163.55px] border-[0.64px] border-solid border-white opacity-80" />
                    <div className="absolute w-[283px] md:w-[436px] h-[283px] md:h-[436px] top-[69px] md:top-[107px] left-[69px] md:left-[107px] rounded-[141.5px] md:rounded-[218.18px] border-[0.64px] border-solid border-white opacity-60" />
                    <div className="absolute w-[351px] md:w-[542px] h-[351px] md:h-[542px] top-[36px] md:top-[55px] left-[36px] md:left-[55px] rounded-[175.5px] md:rounded-[270.88px] border-[0.64px] border-solid border-white opacity-40" />
                    <div className="absolute w-[422px] md:w-[651px] h-[422px] md:h-[651px] top-0 left-0 rounded-[211px] md:rounded-[325.5px] border-[0.64px] border-solid border-white opacity-20" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[365px] md:w-[563px] items-center absolute top-0 left-[36px] md:left-56">
              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                
                  <div className="relative self-stretch mt-[20px] [font-family:'Clash_Display-Bold',Helvetica] font-bold text-white text-6xl md:text-9xl tracking-[0] leading-[75px] md:leading-[116px]">
                    <img 
                      src="/maintitle.png" 
                      alt="AI Teddy Bear" 
                      className="w-full max-w-[900px] mt-6"
                    />
                  </div>
                  <p className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-white text-base md:text-xl tracking-[0] leading-5 md:leading-7">
                    Imagine the joy on your child&apos;s face when Chhota Bheem
                    talks back, responds to their touch, and shares exciting
                    stories just like a real friend!
                  </p>
                </div>

                <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <Button onClick={() => navigate('/product')} className="flex-1 justify-center px-5 md:px-7 py-2.5 md:py-3.5 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-xl md:text-2xl h-auto">
                   Pre-Order Now!
                  </Button>
                  <Button className="flex-1 justify-center px-5 md:px-7 py-2.5 md:py-3.5 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-xl md:text-2xl h-auto">
                    Our Story
                    <PlayIcon className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                  </Button>
                </div>
              </div>

              {/* <img
                className="absolute w-[112px] md:w-[172px] h-[112px] md:h-[172px] top-[-20px] md:top-[-30px] left-[86px] md:left-[132px] object-cover"
                alt="Ai chat"
                src="/ai-chat-02-3d-1.png"
              /> */}
            </div>
          </div>
        </div>

     

{teddyVisible && (
          <div className="absolute w-full flex  left-[497px] md:left-[685px]" style={{ 
            zIndex: 10,
            pointerEvents: 'none'
          }}>
            <img
              className="object-contain max-w-[447px] md:max-w-[690px] max-h-[60vh] w-auto h-auto"
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
        <div className="absolute w-[148px] md:w-[229px] h-[143px] md:h-[220px] top-[616px] left-[86%] rotate-180" style={rightSectionStyle}>
          <div className="relative h-[169px] md:h-[260px]">
            <img
              className="absolute w-[168px] md:w-[259px] h-[133px] md:h-[205px] top-1 left-3 md:left-5 -rotate-0"
              alt="Vector"
              src="/vector-5-1.svg"
            />
            <img
              className="absolute w-[149px] md:w-[230px] h-[162px] md:h-[250px] top-1 left-3 md:left-5 -rotate-90 object-cover p-6 md:p-10"
              alt="Leaf"
              src="/leaf.png"
            />
          </div>
        </div>

        <div className="flex flex-col w-[104px] md:w-[161px] items-start gap-2 md:gap-3 absolute top-[239px] left-[78%] " style={rightSectionStyle}>
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-1.5 md:gap-2.5 px-[8px] md:px-[13px] py-[17px] md:py-[26px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-lg md:rounded-xl overflow-hidden shadow-[1px_1px_20px_#0000001a]"
            >
              <CardContent className="flex flex-col items-center gap-0.5 md:gap-1 relative self-stretch w-full flex-[0_0_auto] p-0">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#FF6B01] text-[21px] md:text-[32px] text-center tracking-[0] leading-5 md:leading-7">
                  {/* Display the actual stat value with animation opacity */}
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
