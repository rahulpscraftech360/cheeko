import React from "react";
import { Button } from "../../components/ui/button";
import { 
  MenuIcon, 
  HomeIcon, 
  DollarSignIcon, 
  ShoppingBagIcon,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FAQSection } from "../sections/FAQSection/FAQSection";

// Location data
const countries = [
  { id: "IN", name: "India" }
];

const states = {
  "IN": [
    { id: "DL", name: "Delhi" },
    { id: "MH", name: "Maharashtra" },
    { id: "KA", name: "Karnataka" },
    { id: "TN", name: "Tamil Nadu" },
    { id: "UP", name: "Uttar Pradesh" }
  ]
};

const cities = {
  "DL": [
    { id: "ND", name: "New Delhi" },
  ],
  "MH": [
    { id: "BOM", name: "Mumbai" },
    { id: "PUN", name: "Pune" },
  ],
  "KA": [
    { id: "BLR", name: "Bangalore" },
    { id: "MYS", name: "Mysore" },
  ],
  "TN": [
    { id: "CHE", name: "Chennai" },
    { id: "CBE", name: "Coimbatore" },
  ],
  "UP": [
    { id: "LKO", name: "Lucknow" },
    { id: "KNP", name: "Kanpur" },
  ]
};

export const AddressPage = (): JSX.Element => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = React.useState("IN");
  const [selectedState, setSelectedState] = React.useState("");
  const [selectedCity, setSelectedCity] = React.useState("");

  // Reset city when state changes
  React.useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);

  // Reset state and city when country changes
  React.useEffect(() => {
    setSelectedState("");
    setSelectedCity("");
  }, [selectedCountry]);

  return (
    <div className="bg-[#f7fbfe] min-h-screen pb-24">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#FF7F11] z-50 shadow-sm">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src="/image-6.png"
                  alt="AI Teddy Logo"
                  className="h-9 w-auto"
                />
              </Link>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              className="w-10 h-10 rounded-full hover:bg-white/10 transition-colors"
            >
              <MenuIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </header>

      {/* Progress Indicators */}
      <div className="pt-16 pb-4 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          <div className="flex items-center justify-between relative max-w-[375px] mx-auto sm:max-w-none">
            {/* Cart Icon */}
            <div className="flex flex-col items-center z-10">
              <div className="w-12 h-12 rounded-full bg-[#FF7F11] flex items-center justify-center">
                <ShoppingBagIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs mt-1 text-[#FF7F11] font-medium">Cart</span>
            </div>

            {/* Home Icon */}
            <div className="flex flex-col items-center z-10">
              <div className="w-12 h-12 rounded-full bg-[#FF7F11] flex items-center justify-center">
                <HomeIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs mt-1 text-[#FF7F11] font-medium">Address</span>
            </div>

            {/* Payment Icon */}
            <div className="flex flex-col items-center z-10">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <DollarSignIcon className="w-6 h-6 text-gray-500" />
              </div>
              <span className="text-xs mt-1 text-gray-500">Payment</span>
            </div>

            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-200">
              <div className="w-2/3 h-full bg-[#FF7F11]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[375px] mx-auto sm:max-w-none">
          {/* Shipping Form */}
          <FAQSection />
        </div>
      </div>
    </div>
  );
};