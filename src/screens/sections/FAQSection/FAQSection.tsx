import { ChevronDownIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Separator } from "../../../components/ui/separator";

interface FormField {
  label: string;
  placeholder: string;
  required: boolean;
  fullWidth?: boolean;
  hasDropdown?: boolean;
  value?: string;
}

export const FAQSection = (): JSX.Element => {
  const navigate = useNavigate();
  // Form field data for mapping
  const formFields: FormField[][] = [
    [
      {
        label: "First Name",
        placeholder: "Enter Your First Name",
        required: true,
      },
      {
        label: "Last Name",
        placeholder: "Enter Your Last Name",
        required: true,
      },
    ],
    [
      { label: "Email", placeholder: "Enter Your Email", required: true },
      {
        label: "Mobile Number",
        placeholder: "Enter Your Mobile Number",
        required: true,
      },
    ],
    [
      {
        label: "Address",
        placeholder: "Enter Your Address",
        required: true,
        fullWidth: true,
      },
    ],
    [
      { label: "Postal Code", placeholder: "Enter Your Email", required: true },
      {
        label: "City",
        placeholder: "Select Your City",
        required: true,
        hasDropdown: true,
      },
    ],
    [
      {
        label: "Country",
        placeholder: "India",
        required: true,
        hasDropdown: true,
        value: "India",
      },
      {
        label: "State",
        placeholder: "Select Your State",
        required: true,
        hasDropdown: true,
      },
    ],
  ];

  // Billing details data
  const billingItems = [
    { label: "Cart Total", note: "(Exclu. of all taxes)", value: "$99.9" },
    { label: "GST", value: "$99.9" },
    { label: "Shipping Charges", value: "$99.9" },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full items-start justify-between gap-4 px-4 md:px-16 py-0">
      <Card className="flex flex-col w-full md:w-[865px] items-start gap-2.5 p-4 md:p-6 bg-[#d9d9d94c] rounded-[20px] overflow-hidden">
        <CardContent className="flex flex-col items-center gap-7 relative self-stretch w-full p-0">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-1 relative self-stretch w-full">
              <h2 className="self-stretch font-semibold text-2xl leading-7 [font-family:'Baloo_2',Helvetica] text-[#1e1e1e]">
                Shipping Progress
              </h2>
              <p className="relative self-stretch [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs leading-5">
                Please provide the relevant information for your order.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
              {formFields.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-[13px] relative self-stretch w-full"
                >
                  {row.map((field, fieldIndex) => (
                    <div
                      key={`field-${rowIndex}-${fieldIndex}`}
                      className={`flex flex-col items-start gap-2.5 relative w-full ${field.fullWidth ? "md:w-full" : "md:flex-1 md:grow"}`}
                    >
                      <div className="relative self-stretch [font-family:'Switzer_Variable-Medium',Helvetica] font-medium text-lg leading-[21.6px]">
                        <span className="text-[#1e1e1e]">{field.label} </span>
                        {field.required && (
                          <span className="text-[#de3d31]">*</span>
                        )}
                      </div>

                      {field.hasDropdown ? (
                        <Select>
                          <SelectTrigger className="h-[52px] px-4 py-3.5 bg-white rounded-lg">
                            <SelectValue
                              placeholder={field.placeholder}
                              defaultValue={field.value}
                              className="text-[#969696] text-base"
                            />
                            <ChevronDownIcon className="w-6 h-6" />
                          </SelectTrigger>
                        </Select>
                      ) : (
                        <Input
                          className="h-[52px] px-4 py-3.5 bg-white rounded-lg text-[#969696] text-base [font-family:'Arial-Regular',Helvetica]"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Button className="flex gap-2.5 px-7 py-1 self-stretch w-full bg-[#FF6B01] items-center justify-center rounded-[40px]">
            <span className="font-semibold text-xl text-center leading-7 [font-family:'Baloo_2',Helvetica] text-white">
              Save Credentials
            </span>
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full md:w-[419px] bg-[#d9d9d94c] rounded-[20px] overflow-hidden">
        <CardContent className="flex flex-col w-full items-start gap-7 p-6">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
            <h2 className="self-stretch [font-family:'Baloo_2',Helvetica] font-semibold text-[#1e1e1e] text-2xl leading-7">
              Billing Details
            </h2>

            <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
              {billingItems.map((item, index) => (
                <div
                  key={`billing-${index}`}
                  className="flex flex-col items-start gap-3 relative self-stretch w-full"
                >
                  <div className="flex items-center justify-between relative self-stretch w-full">
                    <div
                      className={`flex ${item.note ? "w-[206px]" : ""} items-center relative ${!item.note ? "flex-1 grow" : ""}`}
                    >
                      <div className="relative flex-1 [font-family:'Baloo_2',Helvetica] font-medium text-[#1e1e1e] text-base leading-5">
                        {item.label}
                      </div>
                      {item.note && (
                        <div className="relative flex-1 ml-[-60px] [font-family:'Arial-Regular',Helvetica] font-normal text-[#1e1e1eb2] text-xs leading-4">
                          {item.note}
                        </div>
                      )}
                    </div>
                    <div className="relative flex-1 [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-base text-right leading-5">
                      {item.value}
                    </div>
                  </div>
                  <Separator className="w-full" />
                </div>
              ))}

              <div className="flex flex-col items-start gap-3 relative self-stretch w-full">
                <div className="flex items-center justify-between relative self-stretch w-full">
                  <div className="flex items-center relative flex-1 grow">
                    <div className="relative flex-1 [font-family:'Baloo_2',Helvetica] font-bold text-[#1e1e1e] text-lg leading-5">
                      Total Amount
                    </div>
                  </div>
                  <div className="flex-1 text-[#1e1e1e] text-lg text-right leading-5 [font-family:'Baloo_2',Helvetica] font-bold">
                    $99.9
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Button   onClick={() => navigate("/payment")}  className="flex gap-2.5 px-7 py-1 self-stretch w-full bg-[#FF6B01] items-center justify-center rounded-[40px]">
            <span className="flex-1 [font-family:'Baloo_2',Helvetica] font-semibold text-white text-xl text-center leading-7">
              Proceed
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
