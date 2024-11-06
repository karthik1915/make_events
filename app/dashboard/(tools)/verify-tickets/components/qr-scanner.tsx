"use client";

import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import QrConfigWrapper from "./config-wrapper";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile-memo";
import QRConfig from "./config";
import CurrentQRData from "./CurrentQRData";

const QrScanner = () => {
  const isMobile = useIsMobile();

  const [code, setCode] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  if (!isMobile) {
    return (
      <>
        <div className="my-4 w-full px-6 grid grid-rows-[auto_1fr] ">
          <div>
            <h2 className="border-cyan-600 bg-cyan-400 dark:bg-cyan-900/40 border-2 p-3 rounded-xl">
              You are Not Using Mobile
            </h2>
          </div>
          <QrConfigWrapper>
            <QRConfig />
          </QrConfigWrapper>
        </div>
        <CurrentQRData
          open={open}
          onOpenChange={setOpen}
          code={code}
          setCode={setCode}
        />
      </>
    );
  }

  const onScan = (result: IDetectedBarcode[]) => {
    if (result[0]?.format === "qr_code") {
      setCode(result[0]?.rawValue);
      setOpen(true);
    }
  };

  return (
    <>
      <div id="qr-code-scanner" className="w-64 mx-auto rounded-md">
        <Scanner onScan={onScan} paused={code !== null} />
      </div>
      <QrConfigWrapper>
        <QRConfig />
      </QrConfigWrapper>

      <CurrentQRData
        open={open}
        onOpenChange={setOpen}
        code={code}
        setCode={setCode}
      />
    </>
  );
};

export default QrScanner;
