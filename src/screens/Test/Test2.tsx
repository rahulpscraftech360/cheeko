import { PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";


// Change from named export to default export
export default function Test2(): JSX.Element {
  // Stats data for the cards on the right
  const statsData = [
    { percentage: "99%", label: "Parent Satisfaction" },
    { percentage: "99%", label: "Parent Satisfaction" },
    { percentage: "5M+", label: "Parent Satisfaction" },
  ];
  const navigate = useNavigate();
  // Animation states
  const [leftSectionVisible, setLeftSectionVisible] = useState(false);
  const [rightSectionVisible, setRightSectionVisible] = useState(false);
  const [teddyVisible, setTeddyVisible] = useState(false);
  // Initial position state change
  const [teddyPosition, setTeddyPosition] = useState(-700);

  useEffect(() => {
    // Trigger left section animation immediately
    setTimeout(() => setLeftSectionVisible(true), 100);
    
    // Trigger right section animation after left section
    setTimeout(() => setRightSectionVisible(true), 600);
    
    // Start teddy animation earlier
    setTimeout(() => setTeddyVisible(true), 200);  // Changed from 1200 to 200
    
    // Animate teddy falling
    let animationId: number;
    let lastTime = 0;
    const FALL_SPEED = 600; // pixels per second
    
    if (teddyVisible) {
      const animateTeddy = (currentTime: number) => {
        if (!lastTime) lastTime = currentTime;
        const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
        lastTime = currentTime;
        
        setTeddyPosition(prev => {
          if (prev >= 111) return 111; // Final position
          const newPosition = prev + (FALL_SPEED * deltaTime);
          return Math.min(newPosition, 111);
        });
        
        if (teddyPosition < 111) {
          animationId = requestAnimationFrame(animateTeddy);
        }
      };
      
      animationId = requestAnimationFrame(animateTeddy);
    }
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
        lastTime = 0;
      }
    };
  }, [teddyVisible, teddyPosition]);

  const leftSectionStyle = {
    transform: leftSectionVisible ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.5s ease-out',
  };

  const rightSectionStyle = {
    transform: rightSectionVisible ? 'translateX(0)' : 'translateX(100%)',
    transition: 'transform 0.5s ease-out',
    opacity: rightSectionVisible ? 1 : 0,
  };

  const teddyStyle: React.CSSProperties = {
    position: 'absolute' as const,
    top: `${teddyPosition}px`,
    left: '525px',
    width: '690px',
    height: '690px',
    transition: 'top 0.016s linear', // Smooth transition between frames
    opacity: teddyPosition > -700 ? Math.min((teddyPosition + 700) / 200, 1) : 0,
    clipPath: `inset(${Math.max(0, -teddyPosition)}px 0px 0px 0px)`
  };
  
  return (
    <section className="relative w-full h-[800px] bg-[#f7fbfe] rounded-[0px_0px_60px_60px] overflow-hidden shadow-[0px_8px_20px_#0000001a]">
      <div className="relative w-full h-full">
        {/* Left orange background with circular patterns */}
        <div className="absolute  w-[929px] h-[800px] top-0 left-0 bg-[#FF6B01] overflow-hidden" style={leftSectionStyle}>
          <div className="relative w-[787px] h-[824px] top-[156px] -left-40">
            {/* Circular patterns */}
            <div className="absolute w-[356px] h-[383px] top-[372px] left-[79px] overflow-hidden rotate-[36.63deg]">
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

            {/* Hero content */}
            <div className="flex flex-col w-[563px] items-center absolute top-0 left-56">
              <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <h1 className="relative self-stretch mt-[-1.00px] [font-family:'Clash_Display-Bold',Helvetica] font-bold text-white text-9xl tracking-[0] leading-[116px]">
                    AI
                    <br />
                    Teddy Bear!
                  </h1>

                  <p className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-white text-xl tracking-[0] leading-7">
                    Imagine the joy on your child&apos;s face when Chhota Bheem
                    talks back, responds to their touch, and shares exciting
                    stories just like a real friend!
                  </p>
                </div>

                <div  className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <Button    onClick={() => navigate('/product')} className="flex-1 justify-center px-7 py-3.5 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-2xl h-auto">
                  Pre-Order Now!
                  </Button>

                  <Button className="flex-1 justify-center px-7 py-3.5 bg-black rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-2xl h-auto">
                    Our Story
                    <PlayIcon className="w-6 h-6 ml-2" />
                  </Button>
                </div>
              </div>

              <img
                className="absolute w-[172px] h-[172px] top-[-30px] left-[132px] object-cover"
                alt="Ai chat"
                src="/ai-chat-02-3d-1.png"
              />
            </div>
          </div>
        </div>

        {/* Main teddy bear image */}
        {teddyVisible && (
          <img
            className="absolute w-[690px] h-[690px] left-[525px] object-cover"
            style={teddyStyle}
            alt="AI Teddy Bear"
            src="/device.png"
          />
        )}

        <div className="absolute w-[239px] h-[205px] top-[616px] left-[1221px] rotate-180" style={rightSectionStyle}>
          <div className="relative h-[205px]">
            <img
              className="absolute w-[239px] h-[205px] top-0 left-0 -rotate-180"
              alt="Vector"
              src="/vector-5-1.svg"
            />
            <img
              className="absolute w-[191px] h-[183px] top-5 left-5 -rotate-180 object-cover"
              alt="Leaf"
              src="/leaf.png"
            />
          </div>
        </div>

        {/* Stats cards */}
        <div className="flex flex-col w-[161px] items-start gap-3 absolute top-[239px] left-[1215px]" style={rightSectionStyle}>
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-2.5 px-[13px] py-[26px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl overflow-hidden shadow-[1px_1px_20px_#0000001a]"
            >
              <CardContent className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto] p-0">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#FF6B01] text-[32px] text-center tracking-[0] leading-7">
                  {stat.percentage}
                </div>
                <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-base text-center leading-4 relative self-stretch tracking-[0]">
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
