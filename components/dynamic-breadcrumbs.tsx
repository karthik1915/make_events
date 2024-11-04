"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

function DynamicBreadCrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean); // Filter to remove empty strings

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => (
          <React.Fragment key={path}>
            <BreadcrumbItem className="hidden md:flex flex-row gap-3">
              {index === paths.length - 1 ? (
                <BreadcrumbPage>{path}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink
                    href={`/${paths.slice(0, index + 1).join("/")}`}
                  >
                    {path}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default DynamicBreadCrumbs;
