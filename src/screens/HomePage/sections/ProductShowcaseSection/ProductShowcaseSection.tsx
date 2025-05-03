import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";

// Testimonial data for mapping
const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Product Designer",
    image: "/ellipse-76.svg",
    review:
      "ToyAI has been a game-changer for my daughter's learning journey. She's improved her math skills significantly while having so much fun she doesn't even realize she's learning!",
    featured: true,
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Product Designer",
    image: "/ellipse-76-1.svg",
    review:
      "ToyAI has been a game-changer for my daughter's learning journey. She's improved her math skills significantly while having so much fun she doesn't even realize she's learning!",
    featured: false,
  },
  {
    id: 3,
    name: "Jane Doe",
    title: "Product Designer",
    image: "/ellipse-76-2.svg",
    review:
      "ToyAI has been a game-changer for my daughter's learning journey. She's improved her math skills significantly while having so much fun she doesn't even realize she's learning!",
    featured: false,
  },
];

export const ProductShowcaseSection = (): JSX.Element => {
  const location = useLocation();
  const isProductRoute = location.pathname === "/product";
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);

  const handleVideoClick = () => {
    setIsPlaying(true);
  };
  
  return (
    <section className="flex flex-col w-full max-w-[372px] gap-[61px] mx-auto">
      {/* Product Showcase */}
      <div className="flex flex-col items-start gap-5 px-4 py-0 w-full">
        {/* Video Preview Card */}
        <Card className="w-full bg-transparent rounded-[20px] overflow-hidden ">
          <CardContent className="p-0 h-full">
          
              <video 
                className="w-full h-full object-contain"
               loop
                autoPlay
                src="/video/Explode_Animation_Potrait.mp4"
              >
               
              </video>
          
          </CardContent>
        </Card>

        {/* Product Cards Row */}
        <div className="flex items-center gap-2 w-full">
          {/* Product Image Card */}
          <Card className="flex-1 bg-[#FF6B01] rounded-[20px] h-[163px] overflow-hidden border-0">
            <CardContent className="flex items-center justify-center ">
              <img
                className="w-full h-full object-cover"
                alt="AI Teddy product"
                src="/device.png"
              />
            </CardContent>
          </Card>

          {/* Product Info Card */}
          <Card className="flex-1 bg-[#FF6B01] rounded-[20px] h-[163px] overflow-hidden border-0">
            <CardContent className="flex flex-col items-center justify-center p-2.5 py-[21px]">
              <div className="flex flex-col items-start justify-center gap-2.5 w-full">
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <h3 className="w-full  font-['Baloo_2',Helvetica] font-bold text-white text-xl leading-5">
                    Let&apos;s hug, chat &amp; learn with AI Teddy!
                  </h3>
                  <p className="w-full font-['Arial-Regular',Helvetica] font-normal text-white text-[8px] leading-[10px]">
                    Select the perfect AI Chhota Bheem package for your
                    child&#39;s learning adventure.
                  </p>
                </div>
                {!isProductRoute ? ( <Button   onClick={() => navigate('/product')} className="w-full py-2 px-4 bg-black rounded-[40px] h-auto">
                  <span className="font-['Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-[10px] leading-3">
                  Pre-Order Now!
                  </span>
                </Button>):(<Button   onClick={() => navigate('/product')} className="w-full invisible  py-1 px-4 bg-black rounded-[40px] h-auto">
                  <span className="font-['Baloo_2',Helvetica] font-semibold text-[#ffffffee] text-[10px] leading-3">
                  Pre-Order Now!
                  </span>
                </Button>)}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials Section - Only show if not on product route */}
      {!isProductRoute && (
        <div id="mobile-testimonials" className="flex items-center gap-2.5 px-4 py-6 w-full bg-[#d9d9d940]">
          <div className="flex flex-col items-end gap-6 w-full">
            {/* Section Header */}
            <div className="flex flex-col items-center gap-4 w-full">
              <div className="flex flex-col items-center gap-2 w-full">
                <h2 className="w-full mt-[-1.00px] font-['Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-[28px] text-center leading-5">
                  Why Parents Love It!
                </h2>
                <p className="w-full font-['Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs text-center leading-4">
                  Join thousands of happy families who have made AI Chhota Bheem
                  part of their children&#39;s learning journey.
                </p>
              </div>

              {/* Testimonial Cards */}
              <div className="flex flex-col items-start gap-5 w-full">
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.id}
                    className={`w-full bg-white rounded-[16px_16px_0px_0px] overflow-hidden ${
                      testimonial.featured ? "border-b-4 border-[#FF6B01]" : ""
                    }`}
                  >
                    <CardContent className="px-5 py-6">
                      <div className="flex flex-col items-center justify-center gap-5 w-full">
                        <div className="flex flex-col items-start gap-4 w-full">
                          {/* User Info */}
                          <div className="flex flex-wrap items-center gap-[10px_10px] w-full">
                            <img
                              className="relative w-[85.8px] h-[85.8px] mt-[-12.90px] mb-[-24.90px] ml-[-18.90px]"
                              alt="User avatar"
                              src={testimonial.image}
                            />
                            <div className="flex flex-col items-start gap-0.5 flex-1">
                              <h4 className="w-full mt-[-1.00px] font-['Baloo_2',Helvetica] font-bold text-[#1b1b1b] text-xl leading-7">
                                {testimonial.name}
                              </h4>
                              <p className="w-full font-['Arial-Regular',Helvetica] font-normal text-[#494949] text-xs leading-[18px]">
                                {testimonial.title}
                              </p>
                            </div>
                          </div>

                          {/* Review Text */}
                          <p className="w-full font-['Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-base leading-6">
                            {testimonial.review}
                          </p>
                        </div>

                        {/* StarIcon Rating */}
                        <div className="flex items-center gap-1 w-full">
                          {[...Array(5)].map((_, i) => (
                            <img
                              key={i}
                              className="w-5 h-5"
                              alt="Star"
                              src="/star.svg"
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-end gap-4 w-full">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-[19.5px] rotate-180 p-[7px]"
              >
                <img
                  className="w-6 h-6 -rotate-180"
                  alt="Previous"
                  src="/majesticons-arrow-up.svg"
                />
              </Button>
              <Button
                size="icon"
                className="w-10 h-10 rounded-[19.5px] bg-[#FF6B01] p-[7px]"
              >
                <img
                  className="w-6 h-6"
                  alt="Next"
                  src="/majesticons-arrow-up-2.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
