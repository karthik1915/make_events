import { Loader2 } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <Loader2 size={18} className="animate-spin" />
    </div>
  );
}

export default Loading;
