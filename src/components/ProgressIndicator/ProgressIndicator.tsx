import React from "react";
import { HomeIcon, DollarSignIcon, ShoppingBagIcon } from "lucide-react";

interface Step {
  icon: JSX.Element;
  label: string;
  isActive: boolean;
}

interface ProgressIndicatorProps {
  currentStep: 'cart' | 'address' | 'payment';
}

export const ProgressIndicator = ({ currentStep }: ProgressIndicatorProps): JSX.Element => {
  const steps: Step[] = [
    {
      icon: <ShoppingBagIcon className="w-6 h-6" />,
      label: "Cart",
      isActive: currentStep === 'cart' || currentStep === 'address' || currentStep === 'payment'
    },
    {
      icon: <HomeIcon className="w-6 h-6" />,
      label: "Address",
      isActive: currentStep === 'address' || currentStep === 'payment'
    },
    {
      icon: <DollarSignIcon className="w-6 h-6" />,
      label: "Payment",
      isActive: currentStep === 'payment'
    }
  ];

  const getProgressWidth = () => {
    switch (currentStep) {
      case 'cart':
        return 'w-1/3';
      case 'address':
        return 'w-2/3';
      case 'payment':
        return 'w-full';
      default:
        return 'w-0';
    }
  };

  return (
    <div className="pt-16 pb-4 bg-white w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="flex items-center justify-between relative max-w-[375px] mx-auto sm:max-w-none">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center z-10">
              <div className={`w-12 h-12 rounded-full ${
                step.isActive ? 'bg-[#FF6B01]' : 'bg-gray-200'
              } flex items-center justify-center transition-colors duration-300`}>
                {React.cloneElement(step.icon, { 
                  className: `w-6 h-6 ${step.isActive ? 'text-white' : 'text-gray-500'}`
                })}
              </div>
              <span className={`text-xs mt-1 font-medium ${
                step.isActive ? 'text-[#FF6B01]' : 'text-gray-500'
              } transition-colors duration-300`}>
                {step.label}
              </span>
            </div>
          ))}

          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-200">
            <div className={`h-full bg-[#FF6B01] transition-all duration-300 ${getProgressWidth()}`} />
          </div>
        </div>
      </div>
    </div>
  );
};