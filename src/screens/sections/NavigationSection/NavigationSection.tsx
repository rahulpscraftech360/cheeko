import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";
import { useState } from "react";
import { Separator } from "../../../components/ui/separator";
import { supabase } from "../../../supabase";
export const NavigationSection = (): JSX.Element => {

  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState('');

  const handleSubscribe = async () => {
    try {
      const { error } = await supabase
        .from('userEmail')
        .insert([{ email: email }]);

      if (error) throw error;

      setSubscribeStatus('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('Failed to subscribe. Please try again.');
      console.error('Error:', error);
    }
  };

  // Quick links data
  // const quickLinks = [
  //   "Features",
  //   "Try Demo",
  //   "Testimonials",
  //   "FAQs",
  // ];

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
      icon: <img 
      src="/material-symbols_mail.png" 
      alt="Facebook" 
      className="w-6 h-6"
    />,
     
      text: "CFT360 DESIGN STUDIO PVT LTD, Survey No. 7/2, 1st Floor, Divitigeramanahally, Deepanjalinagar, Bangalore Karnataka, India, 560026",
    },
    {
      icon: <img 
      src="/ic_baseline-phone.png" 
      alt="Facebook" 
      className="w-6 h-6"
    />,
      text: "+91 8310896240",
    },
    {
      icon: <img 
      src="/material-symbols_mail.png" 
      alt="Facebook" 
      className="w-6 h-6"
    />,
      text: "hr@altio.me",
    },
  ];

  // Footer policies data
  // const policies = ["Privacy Policy", "Terms of Service", "Cookie Policy"];
       const policies = ['']
  return (
    <footer className="w-full bg-[#ffffffb2] shadow-[4px_0px_20px_#0000001f] py-12 mt-10">
      <div className="container  flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Company Information */}
          <div className="flex flex-col items-start gap-6 flex-1">
            <div className="flex flex-col items-start gap-4 w-full">
              <img
                className="w-[332px] h-22 object-cover"
                alt="Company Logo"
                src="/logo.png"
              />
              <p className="font-normal text-[#1e1e1eb2] text-base leading-6">
                Creating the future of play with AI-powered educational toys
                that grow with your child.
              </p>
            </div>

            <div className="flex items-center gap-[22px]">
              <a href="https://www.facebook.com/profile.php?id=61574727151719" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/ri_facebook-fill.png" 
                  alt="Facebook" 
                  className="w-6 h-6"
                />
              </a>
              <a href="https://www.instagram.com/cheekoai/" target="_blank" rel="noopener noreferrer">
              <img 
                  src="/mdi_instagram.png" 
                  alt="Facebook" 
                  className="w-6 h-6"
                />
              </a>
              <a href="https://www.youtube.com/@Cheekoai" target="_blank" rel="noopener noreferrer">
              <img 
                  src="/mdi_youtube.png" 
                  alt="Facebook" 
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-[67px] flex-1 lg:flex-none lg:w-auto">
            {/* Quick Links */}
            {/* <div className="flex flex-col items-start gap-4 flex-1">
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
            </div> */}

            {/* Contact Us */}
            <div className="flex flex-col items-start gap-4 w-full md:w-[343px]">
              <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 font-['Baloo_2',Helvetica]">
                Contact Us
              </h3>
              <div className="flex flex-col items-start w-full">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 py-2.5 w-full"
                  >
                    {item.icon}
                    <span className="flex-1 font-normal text-[#1e1e1eb2] text-xl leading-8">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* For New Updates */}
            <div className="flex flex-col items-start gap-4 w-full md:w-[343px]">
              <h3 className="font-bold text-[#1e1e1e] text-[28px] leading-10 font-['Baloo_2',Helvetica]">
                For New Updates
              </h3>
              {/* Update the For New Updates section */}
              <div className="flex flex-col items-start w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 border border-[#1e1e1e20] rounded-md text-xl"
                />
                {subscribeStatus && (
                  <p className={`text-sm mt-1 ${subscribeStatus.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>
                    {subscribeStatus}
                  </p>
                )}
                <button 
                  onClick={handleSubscribe}
                  className="mt-2 px-4 py-2 bg-[#FF6B01] text-white rounded-full hover:bg-[#333] transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="w-full h-px bg-[#1e1e1e20]" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <p className="font-normal text-[#1e1e1eb2] text-xl leading-8">
            © 2025 Cheekoai.in. All rights reserved.
          </p>

          {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-[43px]">
            {policies.map((policy, index) => (
              <a
                key={index}
                href="#"
                className="font-normal text-[#1e1e1eb2] text-xl leading-8 hover:text-[#1e1e1e] transition-colors"
              >
                {policy}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};
