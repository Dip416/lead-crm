import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
const AIProductivity = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-[22px] text-[#4d4d4d]">
        Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.
        <span className="text-[13px] bg-[#FFDCD4] font-medium text-[#FF4C51] p-1.5 rounded-full">
          No Smart Assistanc
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6.5">
        {/* Left Card */}
        <Card className="bg-[#FFE9FE] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5">
          <CardContent className="flex h-full justify-between flex-col gap-3 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                Get the same high-impact engagement in 80% less time.
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try LeadCRM AI Response{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/AI-Comment-1.webp"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
        <Card className="bg-[#FFE9FE] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5">
          <CardContent className="flex h-full flex-col justify-between gap-3 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                Use Shortcuts to reply faster.
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try LeadCRM Templates{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/AI-Comment-2.webp"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AIProductivity;
