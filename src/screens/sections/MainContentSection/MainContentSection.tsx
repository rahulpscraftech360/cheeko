import { MicIcon } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Replace the useEffect with mouse event handlers
  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5, // Trigger when 30% of the section is visible
      }
    );
  
    const section = sectionRef.current;
    if (section) observer.observe(section);
  
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  



  return (
    <section 
    ref={sectionRef} 
      className="w-full bg-[#f7fbfe] overflow-hidden"
      onMouseEnter={handleMouseEnter}
    >
      <div className="container mx-auto max-w-[90vw] relative ">
        {/* Heading Section */}
        <div 
          className={`relative flex z-0 justify-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        > <div>
          <h2 className="relative w-full [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[86px] text-center tracking-[0] leading-[62px]">
            Let&apos; s hug, chat &amp; learn with
          </h2>
          <h2 className="relative w-full [font-family:'Baloo_2',Helvetica] font-bold text-[#FF6B01] text-[86px] text-center tracking-[0] leading-[62px] mt-8">
          Cheeko AI Toy!
          </h2>
          </div>
        </div>

        {/* Main Content with Image and Feature Cards */}
        <div className="relative flex justify-between items-center z-10 h-full">

          {/* Left Column */}
          <div 
            className={`flex flex-col w-[200px] md:ml-[-66px] lg:ml-0 gap-[220px] transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            {renderFeatureCard(
              featureCards.find((card) => card.position === "left-top")!,
            )}
            {renderFeatureCard(
              featureCards.find((card) => card.position === "left-bottom")!,
            )}
          </div>

          {/* Center Image */}
          <img
            className={`w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[650px] lg:h-[650px] object-cover transition-all duration-1000 transform relative ml-[10px] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            alt="AI Teddy Bear"
            src="/image-8-1.png"
          />

          {/* Right Column */}
          <div 
            className={`flex flex-col w-[200px] gap-[220px] transition-all duration-1000 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
            }`}
          >
            {renderFeatureCard(
              featureCards.find((card) => card.position === "right-top")!,
            )}
            {renderFeatureCard(
              featureCards.find((card) => card.position === "right-bottom")!,
            )}
          </div>
        </div>

        {/* Special Cards (positioned differently in the original) */}
        <div 
          className={`absolute top-[52%] md:top-[56%] lg:top-[50%] left-[20%] md:left-[4%] lg:left-[20%] w-[200px] transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="flex items-center">
            {renderFeatureCard(
              featureCards.find((card) => card.position === "left-special")!,
            )}
          </div>
        </div>

        <div 
          className={`absolute top-[52%] md:top-[54%] lg:top-[50%]  right-[20%] md:right-[-5%] lg:right-[20%] w-[200px] transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <div className="flex items-center">
            {renderFeatureCard(
              featureCards.find((card) => card.position === "right-special")!,
            )}
            <div className="flex-1"></div> {/* Spacer */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature card data for mapping
const featureCards = [
  {
    title: "Chat & Learn",
    description:
      "CheekoAI talks and teaches through natural conversations.",
      icon: (
        <img
          className="w-full h-54"
          alt="Ic outline color"
          src="/mage_robot-happy.svg"
        />
      ),
    borderColor: "border-[#E73032]",
    position: "left-top",
  },
  {
    title: "Fun Learning Games",
    description:
      "Math, science, and stories turn into playtime adventures..",
    icon: (
      <img
        className="w-full h-54"
        alt="Ic outline color"
        src="hugeicons_puzzle.svg"
      />
    ),
    borderColor: "border-[#E73032]",
    position: "left-bottom",
  },
  {
    title: "Adapts & Grows",
    description:
      "The AI evolves with your child’s interests and learning speed.",
      icon: (
        <img
          className="w-full h-54"
          alt="Material symbols"
          src="ion_stats-chart-outline.svg"
        />
      ),
    borderColor: "border-[#ffd700]",
    position: "left-special",
  },
  {
    title: "Creative Play Mode",
    description:
      "Inspire imagination through storytelling and fun challenges.",
    icon: (
      <img
        className="w-full h-54"
        alt="Material symbols"
        src="material-symbols_rocket-outline.svg"
      />
    ),
    borderColor: "border-[#ffd700]",
    position: "right-special",
  },
  {
    title: "Parent Powered",
    description:
      "Stay in charge with filters, goals, and safe settings.",
    icon: (
      <div className="relative w-11 h-11">
        <img
          className="absolute w-[33px] h-[33px] left-1"
          alt="Group"
          src="/fa6-solid_hand-holding-heart.svg"
        />
      </div>
    ),
    borderColor: "border-[#E73032]",
    position: "right-top",
  },
  {
    title: "Personalized Adventures",
    description:
      "Stories and games customized just for your child!.",
    icon: (
      <div className="relative w-11 h-11">
        <img
          className="absolute w-[37px] h-[38px] left-1"
          alt="Group"
            src="/grommet-icons_map.svg"
        />
      </div>
    ),
    borderColor: "border-[#E73032]",
    position: "right-bottom",
  },
];

// Helper function to render feature card
const renderFeatureCard = (card: (typeof featureCards)[0]) => (
  <Card
    className={`flex flex-col items-start gap-3 bg-white rounded-2xl overflow-hidden border-t-[6px] [border-top-style:solid] ${card.borderColor} shadow-[2px_2px_20px_#0000001f] w-[160px] sm:w-[170px] md:w-[170px] lg:w-[200px] h-[120px] sm:h-[125px] md:h-[125px] lg:h-[146px] ${
      card.position.includes("special")
        ? "p-3 sm:p-3 md:p-3 lg:p-4"
        : card.position.includes("bottom")
          ? "p-3 sm:p-3 md:p-3 lg:p-4"
          : "p-3 sm:p-3 md:p-3 lg:p-4"
    }`}
  >
    <CardContent className="flex flex-col items-start gap-1 sm:gap-1.5 md:gap-1.5 p-0 w-full">
      <div className="w-6 h-6 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8">
        {card.icon}
      </div>
      <div className="flex flex-col items-start gap-1 sm:gap-1 md:gap-1 lg:gap-1.5 w-full">
        <h3 className="[font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-base sm:text-base md:text-base lg:text-lg leading-4 sm:leading-4 md:leading-4 lg:leading-5 w-full tracking-[0]">
          {card.title}
        </h3>
        <p className="w-full [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-[10px] sm:text-[10px] md:text-[10px] lg:text-xs tracking-[0] leading-3 sm:leading-3 md:leading-3 lg:leading-4">
          {card.description}
        </p>
      </div>
    </CardContent>
  </Card>
);
