import { Header } from "../../components/Header";
import { TeddyImage } from "../../components/TeddyImage/TeddyImage";
import { useScreenSize } from "../../hooks/useScreenSize";
import { Frame } from "../Frame";
import { Section } from "../Section";
import { CallToActionSection } from "../sections/CallToActionSection/CallToActionSection";
import { HeroBannerSection } from "../sections/HeroBannerSection/HeroBannerSection";
import { ImageGallerySection } from "../sections/ImageGallerySection";
import { MainContentSection } from "../sections/MainContentSection/MainContentSection";
import { NavigationSection } from "../sections/NavigationSection";
import { ProductDetailsSection } from "../sections/ProductDetailsSection";
import { RelatedProductsSection } from "../sections/RelatedProductsSection";
import { ContactSection } from "./sections/ContactSection";
import { FAQSection } from "./sections/FAQSection/FAQSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { LogoSection } from "./sections/LogoSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { ProductShowcaseSection } from "./sections/ProductShowcaseSection/ProductShowcaseSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const HomePage = (): JSX.Element => {
  const { isMobile } = useScreenSize();

  return (
    <div className="bg-[#f7fbfe] flex flex-col items-center w-full">
      <Header />

      {/* Render HeroBannerSection outside the max-width container for desktop */}
      {!isMobile && <HeroBannerSection />}

      <div className="bg-[#f7fbfe] w-full  pt-16">
        {isMobile ? (
          // Mobile view
          <>
            <div className="w-full">
              <FAQSection />
            </div>

            <div className="relative w-full" style={{ marginTop: '-38%', marginBottom: '-50%', zIndex: 30 }}>
              <TeddyImage />
            </div>
          
            <div className="w-full">
              <ContactSection />
            </div>
          
            {/* Features section for mobile */}
            <div className="w-full FeaturesSection">
              <FeaturesSection />
            </div>
            <div className="w-full">
            <Frame />
            </div>
            <div className="w-full mt-8">
              <ProductShowcaseSection/>
            </div>
            <div className="w-full mt-12">
          <LogoSection />
        </div>
        <div className="w-full mt-12">
          <TestimonialsSection />
        </div>
        <div className="w-full mt-12">
          <PricingSection />
        </div>
            {/* Product showcase section for mobile */}
          
          </>
        ) : (
          // Desktop view
          <>
            {/* HeroBannerSection moved outside this container */}
            <div className="w-full">
              <MainContentSection />
            </div>
            <div className="w-full bg-black ">
            <Section />
            </div>
            
            <div className="w-full">
            <ImageGallerySection />
            </div>
          </>
        )}
      </div>
      
      {/* Full width section outside the max-width container */}
      {!isMobile && <div className="RelatedProductsSection"><RelatedProductsSection /></div>}
    
      <div className="bg-[#f7fbfe] w-full max-w-screen-2xl">
        {!isMobile && (
          <>
            <div className="w-full mt-12">
              <CallToActionSection />
            </div>
            <div className="w-full mt-12">
              <ProductDetailsSection />
            </div>
          </>
        )}
      </div>
      
      {!isMobile && <NavigationSection />}
    </div>
  );
};
