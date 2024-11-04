import React from "react";

async function DynamicDocPage({
  params,
}: {
  params: Promise<{ doc: string }>;
}) {
  const doc = (await params).doc;

  console.log(doc);
  return <div>DynamicDocPage : {doc}</div>;
}

export default DynamicDocPage;
