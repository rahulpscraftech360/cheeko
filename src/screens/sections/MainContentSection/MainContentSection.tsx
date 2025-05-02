import { MicIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Replace the useEffect with mouse event handlers
  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-[#f7fbfe] py-[135px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
    >
      <div className="container mx-auto max-w-[1312px] relative">
        {/* Heading Section */}
        <div 
          className={`relative flex justify-center mb-[74px] transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <h2 className="relative w-[604px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[64px] text-center tracking-[0] leading-[62px]">
            Let&apos; s hug, chat &amp; learn with AI Teddy!
          </h2>
          <div className="absolute w-[134px] h-[134px] top-[-58px] right-[189px] rotate-[-158.45deg]">
            <img
              className="absolute w-[134px] h-[134px] -top-3  rotate-[200.45deg] object-cover"
              alt="Saly"
              src="/saly-43.png"
            />
          </div>
        </div>

        {/* Main Content with Image and Feature Cards */}
        <div className="flex justify-between items-center">
          {/* Left Column */}
          <div 
            className={`flex flex-col w-[200px] gap-[180px] transition-all duration-1000 transform ${
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
            className={`w-[626px] h-[626px] object-cover transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
            alt="AI Teddy Bear"
            src="/image-8-1.png"
          />

          {/* Right Column */}
          <div 
            className={`flex flex-col w-[200px] gap-[180px] transition-all duration-1000 transform ${
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
          className={`absolute top-[50%] left-[20%] w-[200px] transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <div className="flex items-center">
            <div className="flex-1"></div> {/* Spacer */}
            {renderFeatureCard(
              featureCards.find((card) => card.position === "left-special")!,
            )}
          </div>
        </div>

        <div 
          className={`absolute top-[50%] right-[20%] w-[200px] transition-all duration-1000 transform ${
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
    title: "Voice Interaction",
    description:
      "Speaks & listens like a real buddy, responding to your child's questions and commands.",
    icon: <MicIcon className="w-11 h-11" />,
    borderColor: "border-[#6bcb77]",
    position: "left-top",
  },
  {
    title: "Creative Mode",
    description:
      "Encourages imagination through drawing, storytelling, and creative play.",
    icon: (
      <img
        className="w-11 h-11"
        alt="Ic outline color"
        src="/ic_outline-color-lens.svg"
      />
    ),
    borderColor: "border-[#6bcb77]",
    position: "left-bottom",
  },
  {
    title: "Adaptive Learning",
    description:
      "Grows smarter with play, adapting to your child's interests and learning pace.",
    icon: (
      <img
        className="w-11 h-11"
        alt="Flowbite brain"
        src="/flowbite-brain-outline.svg"
      />
    ),
    borderColor: "border-[#ffd700]",
    position: "left-special",
  },
  {
    title: "Parent Controls",
    description:
      "Set learning goals, screen time limits, and monitor progress through the parent app.",
    icon: (
      <img
        className="w-11 h-11"
        alt="Material symbols"
        src="/Vectorshiled.svg"
      />
    ),
    borderColor: "border-[#ffd700]",
    position: "right-special",
  },
  {
    title: "Educational Games",
    description:
      "Over 100 built-in games that make learning math, science, and language arts fun.",
    icon: (
      <div className="relative w-11 h-11">
        <img
          className="absolute w-[37px] h-[33px] top-1.5 left-1"
          alt="Group"
          src="/Group.svg"
        />
      </div>
    ),
    borderColor: "border-[#6bcb77]",
    position: "right-top",
  },
  {
    title: "Storytelling",
    description:
      "Creates personalized stories featuring your child's name and interests.",
    icon: (
      <div className="relative w-11 h-11">
        <img
          className="absolute w-[37px] h-[38px] top-1.5 left-1"
          alt="Group"
          src="/mingcute_book-line.svg"
        />
      </div>
    ),
    borderColor: "border-[#6bcb77]",
    position: "right-bottom",
  },
];

// Helper function to render feature card
const renderFeatureCard = (card: (typeof featureCards)[0]) => (
  <Card
    className={`flex flex-col items-start gap-3 bg-white rounded-2xl overflow-hidden border-t-[6px] [border-top-style:solid] ${card.borderColor} shadow-[2px_2px_20px_#0000001f] w-[200px] h-[180px] ${
      card.position.includes("special")
        ? "p-4"
        : card.position.includes("bottom")
          ? "p-4"
          : "p-4"
    }`}
  >
    <CardContent className="flex flex-col items-start gap-2 p-0 w-full">
      <div className="w-8 h-8">
        {card.icon}
      </div>
      <div className="flex flex-col items-start gap-1.5 w-full">
        <h3 className="[font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-lg leading-5 w-full tracking-[0]">
          {card.title}
        </h3>
        <p className="w-full [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs tracking-[0] leading-4">
          {card.description}
        </p>
      </div>
    </CardContent>
  </Card>
);
