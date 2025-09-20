import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
const BulkExport = () => {
  return (
    <>
      <div className="flex items-center gap-2 text-[22px] text-[#4d4d4d]">
        Your Sales Navigator Workflow is Broken.
        <span className="text-[13px] bg-[#FFDCD4] font-medium text-[#FF4C51] p-1.5 rounded-full">
          Lost Productivity
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-6.5">
        {/* Left Card */}
        <Card className="bg-[#ECEAFF] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5 pb-0">
          <CardContent className="flex h-full justify-between flex-col gap-5 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                Enrich & Export 250 Profiles in Just 60 Seconds.
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try LeadCRM Bulk Export{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/Bulk-Export-Enrichment-1.png"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
        <Card className="bg-[#ECEAFF] h-full shadow-[0px_2px_8px_0px_#63636333] border-0 p-5 pb-0 pr-0">
          <CardContent className="flex h-full flex-col justify-between gap-5 p-0">
            <div>
              <h2 className="font-semibold mb-3 text-[22px] text-[#262626]">
                Export & enrich profiles to the CRM or G-Sheet
              </h2>
              <a className="text-[#097737] font-semibold flex items-center text-[18px] gap-1">
                Try LeadCRM Bulk Export{" "}
                <ChevronRight className="size-5" strokeWidth={3} />
              </a>
            </div>
            <img
              src="images/Bulk-Export-Enrichment-2.png"
              className="h-auto w-full rounded-[12px]"
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BulkExport;
