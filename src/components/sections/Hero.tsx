import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="pt-21 pb-10 bg-[url(/images/hero-bg.png)] bg-contain">
      <div className="container-narrow flex flex-col items-center text-center">
        {/* Small text above headline */}
        <p className="text-sm p-2 text-[#63657E] mb-3 border border-[#9ACCFF] rounded-full w-fit mx-auto">
          🚀 Thousands of Professionals using LeadCRM
        </p>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-[58px] font-semibold text-dark-primary leading-16 mb-[25px]">
          LinkedIn CRM Integration
          <br />
          Capture, Sync and Enrich in{" "}
          <span className="text-primary relative whitespace-nowrap">
            Both Ways
            <img
              src="images/underline.png"
              alt="line"
              className="w-full h-auto absolute left-4 rotate-x-180 -bottom-4"
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-dark-secondary leading-7 font-semibold max-w-[862px] w-full mb-6 text-[19px] mx-auto">
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on LinkedIn profiles. Complete bi-directional integration
          with HubSpot, Salesforce, and Pipedrive.
        </p>
        <div className="flex items-center gap-11 mb-10 bg-[linear-gradient(90.37deg,#5ED3FF_-12.35%,#6EC6FE_0.67%,#EB65F4_100.24%,#FD58F2_114.28%)] rounded-xl p-4">
          <span className="text-[#2E2E2E] text-[22px] leading-7 font-medium">
            Works with
          </span>
          <div className="flex items-center gap-5">
            <div className="size-15 rounded-full">
              <img src="images/Pipedrive.webp" className="w-full h-full" />
            </div>
            <div className="size-15 rounded-full">
              <img src="images/HubSpot.webp" className="w-full h-full" />
            </div>
            <div className="size-15 rounded-full">
              <img src="images/Salesforce.webp" className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Ratings */}
        <div className="flex justify-center gap-4 mb-10">
          <img
            src="images/social-rating.png"
            className="w-full max-w-[400px] h-auto"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            className="flex gap-5 cursor-pointer bg-[#373737] text-white text-sm p-3 rounded-md hover:shadow-2xl transition-colors"
            href="https://chromewebstore.google.com/detail/leadcrm-ai-sales-companio/hpncohefniamkphainmdcghaljbiaiol"
            target="_blank"
          >
            <div className="flex flex-col items-start">
              <span className="font-light text-[12px]">Available in</span>
              <span className="font-medium">Chrome Web Store</span>
            </div>
            <img
              src="images/chrome.png"
              alt="Chrome"
              className="size-[34px]  ml-2 bg-white p-1.5 rounded-full"
            />
          </a>
          {/* <Button className="bg-black text-white hover:bg-gray-800">
            Available in Chrome Web Store
          </Button> */}
          <Button size="lg" variant="secondary" className="h-15">
            Get a Free Trial Now!
          </Button>
        </div>
      </div>
    </section>
  );
}
