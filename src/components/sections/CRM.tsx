import { X } from "lucide-react";
import { Button } from "../ui/button";

interface PonintsProps {
  id: string;
  image?: string;
  title: string;
  badge?: string;
  description: string;
}

const withOutPonints: PonintsProps[] = [
  {
    id: "wop-1",
    title: "Manual Data Entry",
    badge: "3+ Hours wasted daily",
    description:
      "Copying LinkedIn contacts to CRM manually plus losing conversation history",
  },
  {
    id: "wop-2",
    title: "Incomplete Data",
    badge: "60% Data Incomplete",
    description:
      "LinkedIn profiles missing Email and Phones from 700M+ Database",
  },
  {
    id: "wop-3",
    title: "No CRM Visibility",
    badge: "Zero context available",
    description:
      "Can’t see existing CRM contacts when browsing LinkedIn profiles",
  },
  {
    id: "wop-4",
    title: "Limited Productivity",
    badge: "No smart assistance",
    description:
      "Writing messages manually plus no AI assistant for reply, Invite or comments.",
  },
];

const withPonints: PonintsProps[] = [
  {
    id: "wp-1",
    image: "images/completeBi.png",
    title: "Complete Bi-Directional Sync",
    description:
      "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
  },
  {
    id: "wp-2",
    image: "images/contact.png",
    title: "700M+ Contacts + Enrichment",
    description:
      "Get verified emails and phone numbers from a vast global database.",
  },
  {
    id: "wp-3",
    image: "images/overlay.png",
    title: "CRM Overlay on LinkedIn",
    description:
      "See full CRM insights directly on LinkedIn profiles without switching tabs.",
  },
  {
    id: "wp-4",
    image: "images/brain.png",
    title: "AI Response + Templates + Bulk Exports",
    description:
      "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
  },
];

const CRM = () => {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto">
        <h1 className="text-4xl font-semibold text-center mb-12 text-gray-900">
          Every LinkedIn Prospector faces these daily challenges
        </h1>

        <div className="flex gap-9 justify-center">
          {/* Without LeadCRM */}
          <div className="bg-[#FFF7F8] rounded-lg p-6 max-w-[541px] w-full">
            <img
              src="images/Without-LeadCRM.webp"
              className="w-[491px] h-[191px]"
            />
            <h2 className="text-xl mt-5 mb-7 font-semibold text-[#D24B68]">
              Without LeadCRM
            </h2>

            <div className="space-y-4">
              {withOutPonints?.map((item: PonintsProps) => (
                <div className="flex items-center gap-5" key={item.id}>
                  <X className="text-[#D24B68] size-6 min-w-6" />
                  <div>
                    <div className="flex mb- items-center gap-1.5 mb-1.5">
                      <h3 className="font-semibold text-[20px] text-[#262626]">
                        {item.title}
                      </h3>
                      <span className="text-[13px] bg-[#FFDCD4] font-medium text-[#FF4C51] p-1.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[#4C4C4C]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative font-poppins flex flex-col items-center justify-center before:content-[''] before:w-[1px] before:flex-1 before:h-full before:bg-[#BCBCBC] after:content-[''] after:w-[1px] after:flex-1 after:h-full after:bg-[#BCBCBC] gap-4 py-7 text-[18px] font-medium text-deep-blue">
            VS
          </div>
          {/* With LeadCRM */}
          <div className="shadow-[0_8px_24px_0_rgba(149,157,165,0.2)] max-w-[541px] w-full rounded-lg p-6">
            <img
              src="images/With-LeadCRM.webp"
              className="w-[491px] h-[191px]"
            />
            <h2 className="text-xl mt-5 mb-7 font-semibold text-[#097737]">
              With LeadCRM
            </h2>

            <div className="space-y-4">
              {withPonints?.map((item: PonintsProps) => (
                <div className="flex items-center gap-5" key={item.id}>
                  <img src={item.image} className="size-10 min-w-10" />
                  <div>
                    <div className="flex mb- items-center gap-1.5 mb-1.5">
                      <h3 className="font-semibold text-[20px] text-[#262626]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#4C4C4C]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mt-18 mx-auto w-fit">
          <Button size="lg" variant="secondary">
            Start Using LeadCRM Now
          </Button>
          <img
            src="images/save-vector.png"
            className="absolute left-full -bottom-1/2 w-[265px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CRM;
