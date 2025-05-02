import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature data for mapping
  const features = [
    {
      id: 1,
      title: "Creative Mode",
      description:
        "Encourages imagination through drawing, storytelling, and creative play.",
      icon: (
        <img
          className="w-11 h-11"
          alt="Ic outline "
          src="/ic_outline-color-lens.svg"
        />
      ),
      borderColor: "border-[#6bcb77]",
    },
    {
      id: 2,
      title: "Voice Interaction",
      description:
        "Speaks & listens like a real buddy, responding to your child's questions and commands.",
        icon: (
          <img
            className="w-11 h-11"
            alt="Ic outline "
            src="/material-symbols_mic-outline-rounded.svg"
          />
        ),
     
      
      borderColor: "border-[#ffd700]",
    },
    {
      id: 3,
      title: "Adaptive Learning",
      description:
        "Grows smarter with play, adapting to your child's interests and learning pace.",
      icon: (
        <img
          className="w-11 h-11"
          alt="Flowbite brain"
           src="/material-symbols-light_privacy-tip-outline-rounded (1).svg"
        />
      ),
      borderColor: "border-[#6bcb77]",
    },
    {
     
      id: 4,
      title: "Parent Controls",
      description:
        "Set learning goals, screen time limits, and monitor progress through the parent app.",
      icon: (
        <img
          className="w-11 h-11"
          alt="Material symbols"
            src="/flowbite-brain-outline.svg"
         
        />
      ),
      borderColor: "border-[#ffd700]",
    },
    {
      id: 5,
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
    },
    {
      id: 6,
      title: "Storytelling",
      description:
        "Creates personalized stories featuring your child's name and interests.",
      icon: (
        <div className="relative w-11 h-11">
          <img
            className="absolute w-[37px] h-[38px] top-1.5 left-1"
            alt="Group"
            src="/mingcute_book-line (1).svg"
          />
        </div>
      ),
      borderColor: "border-[#ffd700]",
    },
  ];

  return (
    <section className="flex flex-col w-full items-start gap-[40px]">
      <div className="flex flex-col items-center relative w-full">
        <div className="flex items-center justify-center relative w-full">
          <h2 className="relative flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[32px] text-center tracking-[0] leading-8">
            Let&apos;s hug, chat &amp; learn with AI Teddy!
          </h2>

          <img
            className="absolute w-[52px] h-[52px] top-[22px] right-[38px] object-cover"
            alt="Saly"
            src="/saly-43.png"
          />
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