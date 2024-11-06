import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import ScannedQRCodes from "./ScannedQRCodes";

function QRData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scanned Data</CardTitle>
      </CardHeader>
      <CardContent>
        <ScannedQRCodes />
      </CardContent>
    </Card>
  );
}

export default QRData;
