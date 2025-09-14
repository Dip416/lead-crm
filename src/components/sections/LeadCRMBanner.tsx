import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const LeadCRMBanner = () => {
  return (
    <section className="bg-[#EAEFFA] mb-25">
      <div className="container-wide pt-12.5 pb-7">
        <h2 className="text-2xl md:text-4xl font-semibold text-deep-blue mb-7.5">
          Join Thousands of Professionals Using LeadCRM
        </h2>
        {/* Background image */}
        <div className="relative">
          <img
            src="images/banner-image.webp" // replace with your screenshot image path
            alt="LeadCRM Banner"
            className="w-full rounded-lg"
          />
          {/* Text overlay */}
          <div className="absolute top-11 flex w-full flex-col items-center justify-center text-center">
            <h2 className="text-white w-full text-2xl md:text-[44px] leading-16 font-semibold drop-shadow-lg">
              Your LinkedIn Powerhouse for Smarter Lead Management
            </h2>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            icon={<ArrowRight className="size-6" />}
            className="flex-row-reverse mx-auto"
            variant="secondary"
          >
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadCRMBanner;
