import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";

export const NavigationSection = (): JSX.Element => {
  // Quick links data
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

  // Contact information data
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      text: "123 Innovation Drive, Tech City, CA 94043",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      text: "12345678790",
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
      text: "temp@gmail.conm",
    },
  ];

  // Footer policies data
  const policies = ["Privacy Policy", "Terms of Service", "Cookie Policy"];

  return (
    <footer className="w-full bg-[#ffffffb2] shadow-[4px_0px_20px_#0000001f] py-12 mt-10">
      <div className="container px-16 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Company Information */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <img
                className="w-[135px] h-9 object-cover"
                alt="Company Logo"
                src="/image-6.png"
              />
              <p className="font-normal text-[#1e1e1eb2] text-base leading-6">
                Creating the future of play with AI-powered educational toys
                that grow with your child.
              </p>
            </div>

            <div className="flex items-center gap-[22px]">
              <FacebookIcon className="w-6 h-6 text-[#1e1e1eb2]" />
              <InstagramIcon className="w-6 h-6 text-[#1e1e1eb2]" />
              <YoutubeIcon className="w-6 h-6 text-[#1e1e1eb2]" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-[67px] flex-1 lg:flex-none lg:w-auto">
            {/* Quick Links */}
            <div className="flex flex-col items-start gap-4 flex-1">
              <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 font-['Baloo_2',Helvetica]">
                Quick Links
              </h3>
              <nav className="flex flex-col items-start gap-3 w-full">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-full font-normal text-[#1e1e1eb2] text-xl leading-8 hover:text-[#1e1e1e] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Support */}
            <div className="flex flex-col items-start gap-4 flex-1">
              <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 font-['Baloo_2',Helvetica]">
                Support
              </h3>
              <nav className="flex flex-col items-start gap-3">
                {supportLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-full font-normal text-[#1e1e1eb2] text-xl leading-8 hover:text-[#1e1e1e] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col items-start gap-4 w-full md:w-[343px]">
              <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 font-['Baloo_2',Helvetica]">
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
        </div>

        <Separator className="w-full h-px bg-[#1e1e1e20]" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <p className="font-normal text-[#1e1e1eb2] text-xl leading-8">
            © 2025 AI Chhota Bheem. All rights reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[43px]">
            {policies.map((policy, index) => (
              <a
                key={index}
                href="#"
                className="font-normal text-[#1e1e1eb2] text-xl leading-8 hover:text-[#1e1e1e] transition-colors"
              >
                {policy}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
