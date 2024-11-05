import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import GeneratePDF from "./components/generate-pdf";
import PDFSetting from "./components/pdf-settings";

function PDFGeneratorPage() {
  return (
    <section className="grid md:grid-cols-[1fr_0.7fr] p-2 gap-2">
      <Card className="p-2">
        <CardHeader>
          <CardTitle>Generate PDF</CardTitle>
        </CardHeader>
        <CardContent>
          <GeneratePDF />
        </CardContent>
      </Card>
      <Card className="p-2">
        <CardHeader>
          <CardTitle>PDF Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <PDFSetting />
        </CardContent>
      </Card>
    </section>
  );
}

export default PDFGeneratorPage;
