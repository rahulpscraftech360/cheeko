import {
  DollarSignIcon,
  HomeIcon,
  MenuIcon,
  ShoppingBagIcon,
} from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

export const PaymentPage = (): JSX.Element => {
 const [paymentMethod, setPaymentMethod] = React.useState('credit');
   const paymentMethods = [
    {
      id: "credit-card",
      name: "Credit Card",
      isSelected: true,
      cards: [
        { id: "visa", src: "/visa.png", alt: "Visa", width: 68, height: 57 },
        {
          id: "mastercard",
          src: "/image-14.png",
          alt: "Mastercard",
          width: 63,
          height: 49,
        },
        {
          id: "amex",
          src: "/image-13.png",
          alt: "American Express",
          width: 70,
          height: 57,
        },
      ],
    },
    {
      id: "uip",
      name: "UIP Payment",
      isSelected: false,
      cards: [
        {
          id: "google-pay",
          src: "/google-pay.png",
          alt: "Google Pay",
          width: 70,
          height: 57,
        },
      ],
    },
  ];

  // Billing details data
  const billingItems = [
    {
      name: "Cart Total",
      description: "(Exclu. of all taxes)",
      amount: "$99.9",
    },
    { name: "GST", amount: "$99.9" },
    { name: "Shipping Charges", amount: "$99.9" },
  ];
  const navigate = useNavigate();

  const handlePayment = () => {
    // Simulate payment process
    const isSuccess = Math.random() > 0.5; // 50% chance of success
    
    navigate('/payment-status', { state: { status: isSuccess ? 'success' : 'failed' } });
  };

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
              <div className="w-12 h-12 rounded-full bg-[#FF7F11] flex items-center justify-center">
                <DollarSignIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xs mt-1 text-[#FF7F11] font-medium">Payment</span>
            </div>

            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-[2px] bg-gray-200">
              <div className="w-full h-full bg-[#FF7F11]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[375px] mx-auto sm:max-w-none">
          {/* Payment Form */}
          <div className="bg-white rounded-xl p-6 mt-4">
            <h2 className="text-2xl font-bold text-[#1e1e1e] mb-2">Payment Method</h2>
            <p className="text-gray-600 mb-8">Please provide the payment method for your order.</p>
            
            <form className="space-y-6 ">
              {/* Payment Method Selection */}
              <div className="space-y-4 ">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id === 'credit-card' ? 'credit' : 'upi')}
                    className={`flex items-center gap-3 w-full p-4 rounded-lg border ${
                      (method.id === 'credit-card' && paymentMethod === 'credit') || 
                      (method.id === 'uip' && paymentMethod === 'upi')
                        ? 'border-[#6BCB77] bg-[#6BCB77]/10' 
                        : 'border-gray-200'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      (method.id === 'credit-card' && paymentMethod === 'credit') || 
                      (method.id === 'uip' && paymentMethod === 'upi')
                        ? 'border-[#6BCB77]' 
                        : 'border-gray-300'
                    }`}>
                      {((method.id === 'credit-card' && paymentMethod === 'credit') || 
                        (method.id === 'uip' && paymentMethod === 'upi')) && (
                        <div className="w-3 h-3 rounded-full bg-[#6BCB77]" />
                      )}
                    </div>
                    <span className="font-medium">{method.name}</span>
                  </button>
                ))}

                {/* Payment Icons */}
                {paymentMethod === 'credit' && (
                  <div className="flex items-center gap-4 px-4">
                    {paymentMethods[0].cards.map((card) => (
                      <img 
                        key={card.id}
                        src={card.src} 
                        alt={card.alt} 
                        className="h-8"
                        style={{ width: card.width, height: card.height }}
                      />
                    ))}
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="flex items-center gap-4 px-4">
                    {paymentMethods[1].cards.map((card) => (
                      <img 
                        key={card.id}
                        src={card.src} 
                        alt={card.alt} 
                        className="h-8 ml-auto"
                        style={{ width: card.width, height: card.height }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {paymentMethod === 'credit' && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#1e1e1e]">
                      Card Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Card Number"
                      className="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7F11] text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-[#1e1e1e]">
                        Expiration Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Expiration Date"
                        className="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7F11] text-sm"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="block text-sm font-medium text-[#1e1e1e]">
                        CVV <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your CVV"
                        className="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7F11] text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-[#1e1e1e]">
                      Name on Card <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name on Card"
                      className="w-full h-12 px-4 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF7F11] text-sm"
                    />
                  </div>
                </div>
              )}

              {/* Proceed to Pay Button */}
              <Button 
                className="w-full bg-[#FF7F11] text-white text-lg py-6 rounded-full"
                onClick={handlePayment}
              >
                Proceed to Pay
              </Button>
            </form>

            {/* Billing Details */}
            
            <div className="mt-8 pt-6  bg-[#d9d9d94c] border-t border-gray-200 rounded-[20px] overflow-hidden gap-7 p-6">
              <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
              <div className="space-y-4">
                {billingItems.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600 text-lg">{item.name}</span>
                    <div className="flex flex-col items-end">
                      <span className="text-[#FF7F11] text-xl font-bold">{item.amount}</span>
                      {item.description && (
                        <span className="text-gray-500 text-sm">{item.description}</span>
                      )}
                    </div>
                  </div>
                ))}
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total Amount</span>
                    <span className="text-[#FF7F11] text-2xl font-bold">$99.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};