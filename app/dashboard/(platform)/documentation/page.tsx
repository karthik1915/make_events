import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function DocumentsMainPage() {
  return (
    <section className="p-3.5">
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <div className="border rounded-lg flex flex-col w-64">
        <Link
          className="p-2 flex justify-between items-center"
          href="/dashboard/documentation/get-started"
        >
          Get Started <ChevronRight size={16} />
        </Link>
        <Separator />
        <Link
          className="p-2 flex justify-between items-center"
          href="/dashboard/documentation/tutorials"
        >
          Tutorials <ChevronRight size={16} />
        </Link>
        <Separator />
        <Link
          className="p-2 flex justify-between items-center"
          href="/dashboard/documentation/change-logs"
        >
          Changelogs <ChevronRight size={16} />
        </Link>
      </div>
    </section>
  );
}

export default DocumentsMainPage;
