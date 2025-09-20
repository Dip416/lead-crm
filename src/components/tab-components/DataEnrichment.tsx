import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const DataEnrichment = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-[22px] text-[#4d4d4d]">
        It’s hard to find the accurate contact data for every prospects by
        <span className="text-[13px] bg-[#FFDCD4] font-medium text-[#FF4C51] p-1.5 rounded-full">
          Incomplete Data
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6.5">
        {/* Left Card */}
        <Card className="bg-[#F0F4FD] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5">
          <CardContent className="flex h-full justify-between flex-col gap-5 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                Here is how LeadCRM tackles that situation.
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try LeadCRM Data Enrichment{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/CRM-Data-Enrichment.png"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
        <Card className="bg-[#F0F4FD] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5">
          <CardContent className="flex h-full flex-col justify-between gap-5 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                Capture Every Lead. Every Time.
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try Our Advanced Waterfall Enrichm{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/CRM-Data-Enrichment-2.webp"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DataEnrichment;
