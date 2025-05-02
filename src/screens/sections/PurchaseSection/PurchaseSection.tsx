import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "../../../components/ui/radio-group";
import { Separator } from "../../../components/ui/separator";
import { useNavigate } from "react-router-dom";

export const PurchaseSection = (): JSX.Element => {
  const navigate = useNavigate();
  // Payment method options data
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

  return (
    <section className="flex flex-wrap justify-between gap-6 px-16 py-12 w-full">
      {/* Payment Method Card */}
      <Card className="flex-1 min-w-[320px] bg-[#d9d9d94c] rounded-[20px] border-none">
        <CardContent className="p-6">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5">
              {/* Header */}
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold text-2xl leading-7 [font-family:'Baloo_2',Helvetica] text-[#1e1e1e]">
                  Payment Method
                </h2>
                <p className="text-xs leading-5 [font-family:'Arial-Regular',Helvetica] text-[#1e1e1eb2]">
                  Please provide the payment method for your order.
                </p>
              </div>

              {/* Payment Methods */}
              <RadioGroup
                defaultValue="credit-card"
                className="flex flex-col gap-4"
              >
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center gap-4 w-full"
                  >
                    <div className="flex items-center gap-2.5">
                      <RadioGroupItem
                        value={method.id}
                        id={method.id}
                        className="w-6 h-6"
                      />
                      <Label
                        htmlFor={method.id}
                        className={`mt-[-1.00px] [font-family:'Arial-Regular',Helvetica] font-normal text-xl leading-8 whitespace-nowrap ${
                          method.isSelected
                            ? "text-[#1e1e1eb2]"
                            : "text-[#1e1e1e80]"
                        }`}
                      >
                        {method.name}
                      </Label>
                    </div>
                    <div className="flex flex-wrap items-center gap-[28px_28px] flex-1">
                      {method.cards.map((card) => (
                        <div
                          key={card.id}
                          className="relative w-[107px] h-[57px]"
                        >
                          <img
                            className={`absolute object-cover ${
                              card.id === "visa"
                                ? "w-[68px] h-[57px] top-0 left-5"
                                : card.id === "mastercard"
                                  ? "w-[63px] h-[49px] top-1 left-[22px]"
                                  : "w-[70px] h-[57px] top-0 left-[19px]"
                            }`}
                            alt={card.alt}
                            src={card.src}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </RadioGroup>

              {/* Card Details Form */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2.5">
                  <Label className="[font-family:'Switzer_Variable-Medium',Helvetica] font-medium text-lg leading-[21.6px]">
                    Card Number <span className="text-[#de3d31]">*</span>
                  </Label>
                  <Input
                    placeholder="Enter Your Card Number"
                    className="h-[52px] px-4 py-3.5 bg-white rounded-lg text-base [font-family:'Arial-Regular',Helvetica]"
                  />
                </div>

                <div className="flex items-center gap-[13px]">
                  <div className="flex flex-col gap-2.5 flex-1">
                    <Label className="[font-family:'Switzer_Variable-Medium',Helvetica] font-medium text-lg leading-[21.6px]">
                      Expirartion Date <span className="text-[#de3d31]">*</span>
                    </Label>
                    <Input
                      placeholder="Enter Your Expiration Date"
                      className="h-[52px] px-4 py-3.5 bg-white rounded-lg text-base [font-family:'Arial-Regular',Helvetica]"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 flex-1">
                    <Label className="[font-family:'Switzer_Variable-Medium',Helvetica] font-medium text-lg leading-[21.6px]">
                      CVV <span className="text-[#de3d31]">*</span>
                    </Label>
                    <Input
                      placeholder="Enter Your CVV"
                      className="h-[52px] px-4 py-3.5 bg-white rounded-lg text-base [font-family:'Arial-Regular',Helvetica]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <Label className="[font-family:'Switzer_Variable-Medium',Helvetica] font-medium text-lg leading-[21.6px]">
                    Name on Card <span className="text-[#de3d31]">*</span>
                  </Label>
                  <Input
                    placeholder="Enter Your Name on Card"
                    className="h-[52px] px-4 py-3.5 bg-white rounded-lg text-base [font-family:'Arial-Regular',Helvetica]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Button */}
            <Button className="w-full py-1 px-7 bg-[#ff7f11] hover:bg-[#e67200] rounded-[40px] text-white">
              <span className="[font-family:'Baloo_2',Helvetica] font-semibold text-xl text-center leading-7">
                Proceed to Pay
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Billing Details Card */}
      <Card className="w-[419px] bg-[#d9d9d94c] rounded-[20px] border-none">
        <CardContent className="p-6">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-2xl leading-7 [font-family:'Baloo_2',Helvetica] text-[#1e1e1e]">
                Billing Details
              </h2>

              <div className="flex flex-col gap-4">
                {billingItems.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center w-[206px]">
                        <div className="flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-medium text-[#1e1e1e] text-base leading-5">
                          {item.name}
                        </div>
                        {item.description && (
                          <div className="flex-1 ml-[-60px] [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs leading-4">
                            {item.description}
                          </div>
                        )}
                      </div>
                      <div className="flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-base text-right leading-5">
                        {item.amount}
                      </div>
                    </div>
                    <Separator className="w-full h-px" />
                  </div>
                ))}

                {/* Total Amount */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0.5 flex-1">
                      <div className="flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-lg leading-5">
                        Total Amount
                      </div>
                    </div>
                    <div className="flex-1 mt-[-1.00px] [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-lg text-right leading-5">
                      $99.9
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Proceed Button */}
            <Button   onClick={() => navigate("/payment")}  className="w-full py-1 px-7 bg-[#ff7f11] hover:bg-[#e67200] rounded-[40px] text-white">
              <span className="[font-family:'Baloo_2',Helvetica] font-semibold text-xl text-center leading-7">
                Proceed
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
