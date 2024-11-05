import React from "react";

function QRConfig({ code }: { code: string | null }) {
  return <div>Scanned Qr Code : {code ? code : "null"}</div>;
}

export default QRConfig;
