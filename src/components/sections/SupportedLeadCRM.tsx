import { Button } from "../ui/button";

const SupportedLeadCRM = () => {
  return (
    <section className="container-wide text-center py-16 px-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-deep-blue mb-6">
        Our Supported LeadCRM
      </h2>
      <p className="text-[#4D4D4D] max-w-239.5 text-[18px] font-normal leading-7 mx-auto">
        LeadCRM provides Native Integrations with popular CRM tools to make the
        most out of your LinkedIn prospecting. We don’t want you to miss any
        revenue opportunity on the internet!
      </p>
      {/* The image below can be added separately under this text if needed */}
      <img src="images/support-crm.svg" className="w-full mt-5 h-auto mb-8" />
      <Button size="lg" variant="secondary" className="h-15">
        Lets Integrate your CRM Now!
      </Button>
    </section>
  );
};

export default SupportedLeadCRM;
