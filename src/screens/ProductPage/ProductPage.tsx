import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { useScreenSize } from "../../hooks/useScreenSize";
import { PricingSection } from "../HomePage/sections/PricingSection/PricingSection";
import { ProductShowcaseSection } from "../HomePage/sections/ProductShowcaseSection/ProductShowcaseSection";
import { FeaturesSection } from "../sections/FeaturesSection/FeaturesSection";
import { ImageGallerySection } from "../sections/ImageGallerySection";
import { NavigationSection } from "../sections/NavigationSection";
import { VideoSection } from "../sections/VideoSection/VideoSection";

export const ProductPage = (): JSX.Element => {
  const { isMobile } = useScreenSize();
  const [quantity, setQuantity] = React.useState(1);
  const navigate = useNavigate();

  const features = [
    {
      title: "Friendly Conversations",
      description: "AI Teddy listens and responds like a real friend.",
    },
    {
      title: "Exciting Storytelling",
      description: "Enjoy personalized bedtime stories and fun adventures.",
    },
    {
      title: "Smart Learning",
      description: "Helps with early education through games and activities.",
    },
    {
      title: "Emotional Support",
      description: "Provides comfort and companionship anytime.",
    },
    {
      title: "Parental Controls",
      description: "Safe, secure, and designed with kids in mind.",
    },
  ];

  const sharedInfo = [
    { 
      label: "Dimensions", 
      value: "15 cm height, perfect for tabletop or bedside placement" 
    },
    { 
      label: "Power", 
      value: "Rechargeable via Type-C" 
    },
    { 
      label: "Materials", 
      value: "Safe, non-toxic, durable materials, including plush elements and sturdy plastic base" 
    },
    { 
      label: "Connectivity", 
      value: "Wi-Fi enabled for seamless AI updates and interactions" 
    },
    { 
      label: "Supported Languages", 
      value: "English, French, Chinese, Japanese, Korean, Spanish etc" 
    },
  ];

  const description = `AI Teddy is more than just a toy—it's a smart, interactive companion designed to grow with your child! Powered by advanced AI, AI Teddy listens, chats, tells stories, and even helps with learning. With its soft, cuddly design and intelligent features, it makes playtime fun and educational. Meet Little Charlie, the interactive AI-powered companion that brings fun and conversation into your child's world! This talking cactus is more than just a toy—it's a friend that listens, responds, and engages in playful banter, helping kids develop communication skills and providing endless entertainment.`;

  return (
    <div className="bg-[#f7fbfe] min-h-screen">
      {/* Header */}
      <Header/>
    
      
      <div className="mx-auto px-4 pt-16">
      <VideoSection />
      </div>
      <div className="mx-auto px-4 pt-16">
      <FeaturesSection />
      </div>
      {/* Main content with padding-top to account for fixed header */}
      <div className="max-w-[375px] mx-auto px-4 pt-16">
        
       

        {/* Product Info */}
       
       
      </div>
      {isMobile ? ( <div className="w-full">
        <ProductShowcaseSection/>
            </div>):(<><div className="w-full">
                <ImageGallerySection />
                </div>
               <div className="w-full mt-12">
               {/* <TestimonialsSection /> */}
             </div></>
              )}

{isMobile ?(<div className="w-full mt-12">
          <PricingSection />
        </div>): (<NavigationSection />)}
    </div>
  );
};