"use client";

import { Scanner } from "@yudiel/react-qr-scanner";
import QrConfigWrapper from "./config-wrapper";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile-memo";

const QrScanner = () => {
  const isMobile = useIsMobile();

  const [code, setCode] = useState<string | null>(null);

  if (!isMobile) {
    return (
      <div className="text-center my-4 w-full px-6">
        <h2 className="border-cyan-400 text-cyan-500 bg-cyan-700 dark:bg-cyan-900/40 border-2 p-3 rounded-xl">
          You are Not Using Mobile
        </h2>
        <QrConfigWrapper code={code} />
      </div>
    );
  }

  return (
    <>
      <div id="qr-code-scanner" className="w-64 mx-auto rounded-md">
        <Scanner onScan={(result) => setCode(result[0]?.rawValue)} />
      </div>
      <QrConfigWrapper code={code} />
    </>
  );
};

export default QrScanner;
