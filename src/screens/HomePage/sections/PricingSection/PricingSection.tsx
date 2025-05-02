import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";

export const PricingSection = (): JSX.Element => {
  // Quick Links data
  const quickLinks = [
    "Features",
    "Try Demo",
    "Testimonials",
    "Pricing",
    "FAQs",
  ];

  // Support links data
  const supportLinks = [
    "Help Center",
    "User Guides",
    "Warranty Info",
    "Returns & Refunds",
    "Contact Us",
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      text: "123 Innovation Drive, Tech City, CA 94043",
    },
    { icon: <PhoneIcon className="w-6 h-6" />, text: "12345678790" },
    { icon: <MailIcon className="w-6 h-6" />, text: "temp@gmail.conm" },
  ];

  // Footer links data
  const footerLinks = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="w-full px-4 py-6 bg-[#ffffffb2] shadow-[4px_0px_20px_#0000001f]">
      <div className="flex flex-col items-start gap-7 w-full">
        {/* Company info and social media */}
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            <img
              className="w-[135px] h-9 object-cover"
              alt="AI Chhota Bheem Logo"
              src="/image-6.png"
            />

            <p className="font-normal text-[#1e1e1eb2] text-base leading-6">
              Creating the future of play with AI-powered educational toys that
              grow with your child.
            </p>
          </div>

          <div className="flex items-center gap-[22px] w-full">
            <FacebookIcon className="w-6 h-6" />
            <InstagramIcon className="w-6 h-6" />
            <YoutubeIcon className="w-6 h-6" />
          </div>
        </div>

        {/* Links and Contact section */}
        <div className="flex flex-col items-start gap-6 w-full">
          {/* Quick Links and Support columns */}
          <div className="flex items-start w-full">
            <div className="flex flex-col items-start gap-4 flex-1">
              <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 [font-family:'Baloo_2',Helvetica]">
                Quick Links
              </h3>

              <div className="flex flex-col items-start gap-3 w-full">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-full font-normal text-[#1e1e1eb2] text-xl leading-8"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 flex-1">
              <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 [font-family:'Baloo_2',Helvetica]">
                Support
              </h3>

              <div className="flex flex-col items-start gap-3 w-full">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-full font-normal text-[#1e1e1eb2] text-xl leading-8"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Us section */}
          <div className="flex flex-col items-start gap-4 w-full">
            <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 [font-family:'Baloo_2',Helvetica]">
              Contact Us
            </h3>

            <div className="flex flex-col items-start w-full">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-2.5 w-full"
                >
                  {item.icon}
                  <span className="flex-1 font-normal text-[#1e1e1eb2] text-xl leading-8">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright and legal links */}
        <div className="flex flex-col items-start justify-center gap-[15px] w-full">
          <p className="w-full font-normal text-[#1e1e1eb2] text-xl leading-8">
            © 2025 AI Chhota Bheem. All rights reserved.
          </p>

          <div className="flex items-center gap-[43px] w-full">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="flex-1 font-normal text-[#1e1e1eb2] text-xs leading-[14px]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
