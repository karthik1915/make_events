"use client";

import React, { Dispatch, SetStateAction } from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function CurrentQRData({
  open,
  onOpenChange,
  code,
  setCode,
}: {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
  code: string | null;
  setCode: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      onClose={() => {
        setCode(null);
      }}
    >
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <div className="max-h-[50vh] min-h-[200px] px-2">
          Scanned Qr : {code}
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default CurrentQRData;
