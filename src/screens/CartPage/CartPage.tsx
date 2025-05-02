import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { ProgressIndicator } from "../../components/ProgressIndicator";
import { ReviewsSection } from "../sections/ReviewsSection/ReviewsSection";

export const CartPage = (): JSX.Element => {
  const [quantity, setQuantity] = React.useState(1);
  const navigate = useNavigate();

  return (
    <div className=" flex flex-col items-center w-full">
      <Header />
      {/* <ProgressIndicator currentStep="cart" /> */}
  <div className="mt-36"></div>
      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[375px] mx-auto sm:max-w-none mb-5">

        
        
        
          <ReviewsSection />
          
        </div>
        
      </div>
    </div>
  );
};