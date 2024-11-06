import { cn } from "@/lib/utils";
import React from "react";

function ScannedQRCodes() {
  const sampledata = [
    { type: "verified", verified_at: "data" },
    { type: "verified", verified_at: "data" },
    { type: "not-verified", verified_at: "data" },
  ];

  return (
    <div className="flex flex-col-reverse gap-2 w-full ">
      {sampledata.map((data, index) => (
        <ScannedQRCard key={index} data={data} />
      ))}
    </div>
  );
}

const ScannedQRCard = ({ data }: { data: any }) => {
  let color;

  switch (data.type) {
    case "verified":
      color = "border-emerald-400 bg-emerald-300 dark:bg-emerald-800";
      break;
    case "not-verified":
      color = "border-red-400 bg-red-200 dark:bg-red-900";
      break;
    default:
      color = "border-gray-300";
      break;
  }
  return (
    <div className={cn("w-full p-2 border rounded-lg ", color)}>
      {data.verified_at}
    </div>
  );
};

export default ScannedQRCodes;
