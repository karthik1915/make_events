import { PDFDocument, rgb } from "pdf-lib";
import QRCode from "qrcode";

export default async function editPdfWithQRCode(file: File, code: string) {
  // Convert the file to ArrayBuffer
  const arrayBuffer = await file.arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  // Load the existing PDF
  const pdfDoc = await PDFDocument.load(uint8Array);
  const pages = pdfDoc.getPages();

  // Generate QR code as a data URL
  const qrCodeDataUrl = await QRCode.toDataURL(code);
  const qrCodeImage = await pdfDoc.embedPng(qrCodeDataUrl);
  const qrCodeDims = qrCodeImage.scale(1.2);

  // Draw the QR code on the first page
  const firstPage = pages[0];
  firstPage.drawImage(qrCodeImage, {
    x: 1000,
    y: firstPage.getHeight() - qrCodeDims.height - 270,
    width: qrCodeDims.width,
    height: qrCodeDims.height,
  });

  firstPage.drawText("QR Code for: " + code, {
    x: 40,
    y: firstPage.getHeight() - qrCodeDims.height - 270,
    size: 30,
    color: rgb(1, 1, 1),
  });

  // Save the modified PDF document
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);

  // Create a link element and trigger the download
  const a = document.createElement("a");
  a.href = url;
  a.download = "modified_example.pdf";
  document.body.appendChild(a); // Append the link to the body
  a.click(); // Trigger the download
  document.body.removeChild(a); // Clean up
  URL.revokeObjectURL(url); // Revoke the object URL after download
}
