import { CircleQuestionMark, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#e6f2f8] font-poppins to-[#dff2f5] text-gray-700">
      <div className="container-wide pt-9 pb-3.5 grid grid-cols-1 md:grid-cols-12 col-gap-8">
        {/* Logo & Description */}
        <div className="col-span-4 md:col-span-4 pr-40 space-y-[26px]">
          <img src="images/logo.png" alt="LeadCRM" className="w-60 h-auto" />
          <p className="text-[16px] text-black">
            LeadCRM is LinkedIn integration tool for your CRM.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-5 text-[#0077b6] text-xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="size-[42px] bg-primary rounded-full flex items-center justify-center"
            >
              <img src="icons/facebook.svg" alt="facebook" className="size-5" />
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              className="size-[42px] bg-primary rounded-full flex items-center justify-center"
            >
              <img src="icons/twitter.svg" alt="facebook" className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="size-[42px] bg-primary rounded-full flex items-center justify-center"
            >
              <img src="icons/linkdn.svg" alt="facebook" className="size-5" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="size-[42px] bg-primary rounded-full flex items-center justify-center"
            >
              <img
                src="icons/instagram.svg"
                alt="facebook"
                className="size-5"
              />
            </a>
          </div>
        </div>

        {/* Integrations */}
        <div className="col-span-4 md:col-span-2">
          <h3 className="font-semibold text-deep-blue leading-10 text-[20px] mb-5">
            Integrations
          </h3>
          <ul className="space-y-2 text-sm">
            <li>HubSpot</li>
            <li>Salesforce</li>
            <li>Pipedrive</li>
            <li className="flex items-center space-x-2">
              <span>Close.io</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <span>Insightly</span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                Coming Soon
              </span>
            </li>
          </ul>
        </div>

        {/* Alternative */}
        <div className="col-span-4 md:col-span-2">
          <h3 className="font-semibold text-deep-blue leading-10 text-[20px] mb-5">
            Alternative
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Surfe VS LeadCRM</li>
            <li>Linkmatch Alternative</li>
          </ul>
        </div>

        {/* Legal */}
        <div className="col-span-4 md:col-span-2">
          <h3 className="font-semibold text-deep-blue leading-10 text-[20px] mb-5">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="col-span-4 md:col-span-2">
          <h3 className="font-semibold text-deep-blue leading-10 text-[20px] mb-5">
            Contact Us
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2">
              <Mail className="text-[#0077b6]" />
              <span>support@leadcrm.io</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="text-[#0077b6]" />
              <span>+1 231-538-7466</span>
            </li>
            <li className="flex items-center space-x-2">
              <CircleQuestionMark className="text-[#0077b6]" />
              <span>Help Center</span>
            </li>
          </ul>

          {/* Chrome Badge */}
          <div className="mt-6">
            <a
              className="flex gap-1 cursor-pointer bg-[#373737] text-white text-sm px-4.5 py-2.5 rounded-2xl hover:shadow-2xl items-center ml-auto w-fit transition-colors"
              href="https://chromewebstore.google.com/detail/leadcrm-ai-sales-companio/hpncohefniamkphainmdcghaljbiaiol"
              target="_blank"
            >
              <div className="flex flex-col items-start">
                <span className="font-light text-[16px]">Available in</span>
                <span className="font-medium text-[16px]">Chrome</span>
              </div>
              <img
                src="images/chrome.png"
                alt="Chrome"
                className="size-7.5 bg-white p-[5px] rounded-full"
              />
            </a>
          </div>
        </div>
        <div className="col-span-full mt-9 text-center text-xs text-gray-500">
          <p className="text-[#54595F] mb-2 text-xs font-normal">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All
            LinkedIn(tm) logos and trademarks displayed on this tool are
            property of LinkedIn. LeadCRM is distributed AS IS. Your use of
            LeadCRM is at your own risk.
          </p>
          <p className="pt-2.5 text-sm text-[#7A7A7A] border-t border-[#8D8D8D94] font-normal">
            Copyright © 2025 LeadCRM. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
    </footer>
  );
}
