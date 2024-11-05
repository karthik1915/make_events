"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Settings2 } from "lucide-react";
import React from "react";
import QRConfig from "./config";
import { useIsMobile } from "@/hooks/use-mobile-memo";

function QrConfigWrapper({ code }: { code: string | null }) {
  const isMobile = useIsMobile();

  return (
    <section
      className={cn(
        "px-1 md:grid grid-cols-[1fr_520px] gap-x-2",
        isMobile ? "mt-36" : "mt-14"
      )}
    >
      {/* Conditional Rendering based on screen size */}
      {!isMobile ? (
        <>
          {/* Show "Config for qr scanner" first on larger screens */}
          <Card>
            <CardHeader>Config for qr scanner</CardHeader>
          </Card>

          {/* Show "Quick Config" second on larger screens */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Config</CardTitle>
              <CardDescription>
                Configuration for Qr Code Scanner
              </CardDescription>
            </CardHeader>
            <QRConfig code={code} />
          </Card>
        </>
      ) : (
        <>
          {/* Show "Quick Config" first on mobile */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2 float-end m-3">
                <Settings2 size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Quick Config</DialogTitle>
                <DialogDescription>
                  Configuration for Qr Code Scanner
                </DialogDescription>
              </DialogHeader>
              <QRConfig code={code} />
            </DialogContent>
          </Dialog>

          {/* Show "Config for qr scanner" second on mobile */}
          <Card>
            <CardHeader>Config for qr scanner</CardHeader>
          </Card>
        </>
      )}
    </section>
  );
}

export default QrConfigWrapper;
