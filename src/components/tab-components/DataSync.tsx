import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
const DataSync = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-[22px] text-[#4d4d4d]">
        40+ hours lost to copy-paste. Every. Single. Month..
        <span className="text-[13px] bg-[#FFDCD4] font-medium text-[#FF4C51] p-1.5 rounded-full">
          Lost Lead Context
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6.5">
        {/* Left Card */}
        <Card className="bg-[#FFFFCE] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5">
          <CardContent className="flex h-full justify-between flex-col gap-5 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                The Solution? LeadCRM's Instant Data Sync.
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try LeadCRM Data Sync{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/CRM-Data-Sync-1.png"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
        <Card className="bg-[#FFFFCE] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5">
          <CardContent className="flex h-full flex-col justify-between gap-5 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                Unlock instant CRM insights on every profile you visit.
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try LeadCRM Data Overlay{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/CRM-Data-Sync-2.png"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DataSync;
