import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      title: "Chat & Learn",
      description:
        "CheekoAI talks and teaches through natural conversations.",
        icon: (
          <img
            className="w-full h-54"
            alt="Ic outline color"
            src="/1.png"
          />
        ),
      borderColor: "border-[#E73032]",
    },
    {
      id: 2,
      title: "Adapts & Grows",
      description:
        "The AI evolves with your child’s interests and learning speed.",
        icon: (
          <img
            className="w-full h-54"
            alt="Material symbols"
            src="/2.png"
          />
        ),
      borderColor: "border-[#ffd700]",
    },
    {
      id: 3,
      title: "Fun Learning Games",
      description:
        "Math, science, and stories turn into playtime adventures..",
      icon: (
        <img
          className="w-full h-54"
          alt="Ic outline color"
          src="/3.png"
        />
      ),
      borderColor: "border-[#ffd700]",
    },
    {
     
      id: 4,
      title: "Parent Powered",
      description:
        "Stay in charge with filters, goals, and safe settings.",
      icon: (
        <div className="relative w-11 h-11">
          <img
            className="absolute w-[37px] h-[33px] top-1.5 left-1"
            alt="Group"
            src="/4.png"
          />
        </div>
      ),
      borderColor: "border-[#E73032]",
    },
    {
      id: 5,
      title: "Creative Play Mode",
    description:
      "Inspire imagination through storytelling and fun challenges.",
    icon: (
      <img
        className="w-full h-54"
        alt="Material symbols"
        src="4.png"
      />
    ),
      borderColor: "border-[#E73032]",
    },
    {
      id: 6,
      title: "Personalized Adventures",
    description:
      "Stories and games customized just for your child!.",
    icon: (
      <div className="relative w-11 h-11">
        <img
          className="absolute w-[37px] h-[38px] top-1.5 left-1"
          alt="Group"
            src="/6.png"
        />
      </div>
    ),
      borderColor: "border-[#ffd700]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[40px] mt-6">
      <div className="flex flex-col items-center relative w-full">
        <div className="flex  flex-col items-center justify-center relative w-full gap-3 ">
          <h2 className="relative flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-5xl text-center tracking-[0] leading-12">
            Let&apos;s hug, chat &amp; learn with 
          </h2>
          <h2 className="relative flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#FF6B01] text-5xl text-center tracking-[0] leading-8"> Cheeko AI Toy</h2>

        
        </div>

        <div className="w-full h-[368px] mt-9 flex items-center justify-center">
          <img
            className="max-w-full max-h-full object-contain"
            alt="AI Teddy Bear"
            src="/image-8.png"
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-3 px-4 py-0 w-full">
        {[0, 2, 4].map((startIndex) => (
          <div
            key={startIndex}
            className="flex items-center justify-center gap-2 w-full"
          >
            {features.slice(startIndex, startIndex + 2).map((feature) => (
              <Card
                key={feature.id}
                className={`flex flex-col items-center justify-center gap-2.5 p-0 w-[180px] h-[180px] rounded-2xl overflow-hidden border-t-[6px] ${feature.borderColor} shadow-[1px_1px_20px_#0000001a]`}
              >
                <CardContent className="flex flex-col items-start gap-3 p-4 w-full h-full">
                  <div className="w-11 h-11 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="w-full [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-lg tracking-[0] leading-5">
                      {feature.title}
                    </h3>
                    <p className="w-full [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs tracking-[0] leading-[16px]">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};