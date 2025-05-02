import { InfoIcon, StarIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Separator } from "../../../components/ui/separator";

export const ReviewsSection = (): JSX.Element => {
  // Product data
  const product = {
    name: "AI - Teddy Bear",
    price: "$99.9",
    reviews: "(2.5 K) Reviews",
    image: "/device.png",
    quantity: 1,
  };

  // Billing data
  const billingDetails = [
    { label: "Cart Total", subtext: "(Exclu. of all taxes)", amount: "$99.9" },
    { label: "GST", amount: "$99.9" },
    { label: "Shipping Charges", amount: "$99.9" },
    { label: "Total Amount", amount: "$99.9", isBold: true },
  ];
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-4 w-full justify-between">
      <Card className="flex-1 bg-[#d9d9d94c] rounded-[20px] overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="flex flex-wrap items-start gap-[6px_6px] flex-1">
            <div className="w-5 h-5 rounded bg-[#FF6B01] flex items-center justify-center">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

              <div className="w-full md:w-[263px] h-[249px] items-center px-3.5 py-[7px] bg-[#d9d9d980] rounded-xl flex gap-2.5 overflow-hidden">
                <img
                  className="flex-1 self-stretch grow object-cover"
                  alt="Product"
                  src={product.image}
                />
              </div>
            </div>

            <div className="flex flex-col w-full md:w-[506px] gap-6">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold text-2xl leading-7 [font-family:'Baloo_2',Helvetica] text-[#1e1e1e]">
                        {product.name}
                      </h3>

                      <div className="flex items-center gap-1.5 w-full">
                        <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 fill-[#6BCB77] text-[#6BCB77]" />
                    ))}
                        </div>

                        <div className="flex-1 [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs leading-4">
                          {product.reviews}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-1 mt-2 md:mt-0">
                      <div className="text-[#FF6B01] text-[32px] text-right leading-8 [font-family:'Baloo_2',Helvetica] font-bold">
                        {product.price}
                      </div>

                      <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs text-right leading-4">
                        MRP incl. of all taxes
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full">
                    <div className="w-fit [font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-lg leading-5">
                      Quantity :
                    </div>

                    <div className="relative w-[65px] h-6 rounded overflow-hidden border-[1.5px] border-solid border-[#d9d9d9] flex items-center justify-between px-2">
                      <button className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e80] text-lg leading-[10px]">
                        -
                      </button>
                      <span className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-lg leading-[10px]">
                        {product.quantity}
                      </span>
                      <button className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e80] text-lg leading-[10px]">
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <Separator className="w-full" />

                <div className="flex items-center gap-1 w-full">
                  <InfoIcon className="w-4 h-4" />
                  <div className="text-[#1e1e1eb2] text-xs leading-5 flex-1 [font-family:'Arial-Regular',Helvetica] font-normal">
                    Cash on delivery is available on this product
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-[120px] h-8 rounded-[40px] border border-solid border-[#1e1e1e4c] [font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-base"
              >
                Remove
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full md:w-[419px] bg-[#d9d9d94c] rounded-[20px] overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col gap-7 w-full">
            <div className="flex flex-col gap-5 w-full">
              <h3 className="[font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-2xl leading-7">
                Billing Details
              </h3>

              <div className="flex flex-col gap-4 w-full">
                {billingDetails.map((item, index) => (
                  <React.Fragment key={index}>
                    {index < billingDetails.length - 1 && (
                      <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center gap-1">
                            <div className="[font-family:'Baloo_2',Helvetica] font-medium text-[#1e1e1e] text-base leading-5">
                              {item.label}
                            </div>
                            {item.subtext && (
                              <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs leading-4">
                                {item.subtext}
                              </div>
                            )}
                          </div>
                          <div className="[font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-base text-right leading-5">
                            {item.amount}
                          </div>
                        </div>
                        <Separator className="w-full" />
                      </div>
                    )}

                    {index === billingDetails.length - 1 && (
                      <div className="flex items-center justify-between w-full">
                        <div className="[font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-lg leading-5">
                          {item.label}
                        </div>
                        <div className="[font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-lg text-right leading-5">
                          {item.amount}
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <Button
              onClick={() => {
                window.location.href = "https://rzp.io/rzp/efhdlbt";
              }}
              className="w-full py-1 bg-[#FF6B01] hover:bg-[#FF6B01]/90 rounded-[40px] [font-family:'Baloo_2',Helvetica] font-semibold text-white text-xl text-center leading-7"
            >
              Proceed
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
