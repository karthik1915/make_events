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
import QRData from "./qr-data";

function QrConfigWrapper({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();

  return (
    <section
      className={cn(
        "px-1 md:grid grid-cols-[1fr_0.5fr] gap-x-2",
        isMobile ? "mt-36" : "mt-14"
      )}
    >
      {!isMobile ? (
        <>
          <QRData />

          <Card>
            <CardHeader>
              <CardTitle>Quick Config</CardTitle>
              <CardDescription>
                Configuration for Qr Code Scanner
              </CardDescription>
            </CardHeader>
            {children}
          </Card>
        </>
      ) : (
        <>
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
              {children}
            </DialogContent>
          </Dialog>
          <QRData />
        </>
      )}
    </section>
  );
}

export default QrConfigWrapper;
