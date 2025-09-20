import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DataEnrichment from "../tab-components/DataEnrichment";
import DataSync from "../tab-components/DataSync";
import BulkExport from "../tab-components/BulkExport";
import AIProductivity from "../tab-components/AIProductivity";

const TabTriggerClassName: string =
  "flex-1 cursor-pointer flex h-full gap-2.5 items-center text-sm !shadow-none rounded-none py-3 text-[18px] pb-4 px-4 data-[state=active]:border-b-0 border-t-0 border-x-0 relative data-[state=active]:text-deep-blue font-normal data-[state=active]:font-semibold data-[state=active]:after:bg-deep-blue data-[state=active]:after:absolute data-[state=active]:after:-bottom-0.5 data-[state=active]:after:inset-x-0 data-[state=active]:after:rounded-full data-[state=active]:after:h-[7px] text-gray-600 transition-all data-[state=active]:z-10 data-[state=active]:after:mx-auto data-[state=active]:after:z-20 !bg-transparent";

export default function SalesSolution() {
  return (
    <section className="container-wide py-16 px-6">
      <h2 className="text-2xl md:text-4xl text-center font-semibold text-deep-blue mb-6">
        Complete LinkedIn Sales Solutions
      </h2>
      <p className="text-[#4D4D4D] max-w-239.5 text-center text-[18px] font-normal leading-7 mx-auto">
        Everything you need for professional LinkedIn prospecting
      </p>
      <div className="w-full py-10">
        <Tabs defaultValue="enrichment" className="w-full">
          {/* --- Styled Tabs Header --- */}
          <TabsList className="flex mb-10.5 gap-5 w-full relative justify-between rounded-none bg-white p-0 after:w-full after:h-[3px] h-auto after:bg-[#EDEDED] after:absolute after:bottom-0 after:inset-x-0 after:rounded-full">
            <TabsTrigger value="enrichment" className={TabTriggerClassName}>
              {/* <div className="flex py-5 gap-2.5 items-center"> */}
              <img
                src="images/data-enrichment.png"
                alt="CRM Data Sync"
                className="size-8.5"
              />
              CRM Data Enrichment
              {/* </div> */}
            </TabsTrigger>
            <TabsTrigger value="sync" className={TabTriggerClassName}>
              <img
                src="images/crm-data-sync.png"
                alt="CRM Data Sync"
                className="size-8.5"
              />
              CRM Data Sync
            </TabsTrigger>
            <TabsTrigger value="bulk" className={TabTriggerClassName}>
              <img
                src="images/compass.png"
                alt="CRM Data Sync"
                className="size-8.5"
              />
              Bulk Export & Enrichment
            </TabsTrigger>
            <TabsTrigger value="ai" className={TabTriggerClassName}>
              <img
                src="images/brain.png"
                alt="CRM Data Sync"
                className="size-8.5"
              />
              AI Productivity
            </TabsTrigger>
          </TabsList>
          {/* --- Tab 1 (Two Column like screenshot) --- */}
          <TabsContent value="enrichment">
            <DataEnrichment />
          </TabsContent>
          <TabsContent value="sync">
            <DataSync />
          </TabsContent>
          <TabsContent value="bulk">
            <BulkExport />
          </TabsContent>
          <TabsContent value="ai">
            <AIProductivity />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
