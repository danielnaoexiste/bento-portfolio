"use client";

import { useState } from "react";

import { WorkHistoryContent } from "./WorkHistoryContent";
import { WorkHistoryTab } from "./WorkHistoryTab";

export enum WorkTabs {
  CIANDT,
  AIQFOME,
  HIVELABS,
  DEVU,
}

export const WorkHistory = () => {
  const [activeTab, setActiveTab] = useState<WorkTabs>(WorkTabs.CIANDT);

  return (
    <div className="flex flex-col mb-8 gap-y-8 xl:flex-row w-full">
      <nav className="tabs flex flex-nowrap overflow-x-auto xl:overflow-x-visible xl:items-stretch xl:self-start xl:flex-col">
        <WorkHistoryTab
          tab={WorkTabs.CIANDT}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          borderColor="border-red-500"
          textColor="text-red-500"
          translateKey="ciandt"
        />
        <WorkHistoryTab
          tab={WorkTabs.AIQFOME}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          borderColor="border-purple-500"
          textColor="text-purple-500"
          translateKey="aiqfome"
        />
        <WorkHistoryTab
          tab={WorkTabs.HIVELABS}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          borderColor="border-orange-500"
          textColor="text-orange-500"
          translateKey="hivelabs"
        />
        <WorkHistoryTab
          tab={WorkTabs.DEVU}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          borderColor="border-accent"
          textColor="text-accent"
          translateKey="devu"
        />
      </nav>

      <div className="hidden xl:flex divider divider-horizontal" />

      <div className="flex flex-col self-center xl:self-start">
        {activeTab === WorkTabs.CIANDT && (
          <>
            <WorkHistoryContent
              translateKey="ciandt"
              textColor="text-red-500"
            />
            <div className="p-4" />
            <WorkHistoryContent
              translateKey="ciandt2"
              textColor="text-red-500"
            />
            <div className="p-4" />
            <WorkHistoryContent
              translateKey="ciandt3"
              textColor="text-red-500"
            />
          </>
        )}

        {activeTab === WorkTabs.AIQFOME && (
          <WorkHistoryContent
            translateKey="aiqfome"
            textColor="text-purple-500"
          />
        )}

        {activeTab === WorkTabs.HIVELABS && (
          <>
            <WorkHistoryContent
              translateKey="hivelabs"
              textColor="text-orange-500"
            />
            <div className="p-4" />
            <WorkHistoryContent
              translateKey="hivelabs2"
              textColor="text-orange-500"
            />
          </>
        )}

        {activeTab === WorkTabs.DEVU && (
          <>
            <WorkHistoryContent translateKey="devu" textColor="text-accent" />
            <div className="p-4" />
            <WorkHistoryContent translateKey="devu2" textColor="text-accent" />
          </>
        )}
      </div>
    </div>
  );
};
