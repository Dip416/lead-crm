import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const steps = [
  {
    id: "hw-1",
    title: "Install the Extension",
    text: "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    image: (
      <img src="images/install-the-extension.webp" className="w-full h-auto" />
    ),
  },
  {
    id: "hw-2",
    title: "Browse LinkedIn",
    text: "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    image: <img src="images/Browse-LinkedIn.webp" className="w-full h-auto" />,
  },
  {
    id: "hw-3",
    title: "Get Enriched Data",
    text: "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
    image: (
      <img src="images/Get-Enriched-Data.webp" className="w-full h-auto" />
    ),
  },
  {
    id: "hw-4",
    title: "Sync to CRM Instantly",
    text: "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow  ups.",
    image: (
      <img src="images/Sync-to-CRM-Instantly.webp" className="w-full h-auto" />
    ),
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-11 pb-13 bg-[#EAEFFA]">
      <div className="container-wide">
        <h1 className="text-4xl font-semibold font-poppins mb-2 text-deep-blue">
          How it Works
        </h1>
        <p className="font-normal mb-11 font-poppins text-gray-dark">
          From setup to success in{" "}
          <span className="font-semibold">4 simple steps</span>
        </p>
        <div className="grid grid-cols-4 gap-6">
          {steps?.map((step, index) => (
            <div
              className="bg-white overflow-hidden hover:border hover:border-primary hover:-translate-y-1 transition-all duration-500 rounded-2xl gap-5 h-full shadow-md flex flex-col justify-between items-center"
              key={step?.id}
            >
              {/* Step Number */}
              <div className="pt-5 px-2.5 flex flex-col items-center text-center">
                <span className="text-[114px] font-sriracha text-primary leading-[114px]  select-none">
                  {index + 1}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-deep-blue mb-2">
                  {step?.title}
                </h3>

                {/* Description */}
                <p className="text-center text-gray-dark leading-relaxed">
                  {step?.text}
                </p>
              </div>
              <div className="w-full flex items-center justify-center">
                {step?.image}
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-15 mx-auto w-fit">
          <Button
            size="lg"
            icon={<ArrowRight className="size-6" />}
            className="flex-row-reverse"
            variant="secondary"
          >
            Try LeadCRM Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
