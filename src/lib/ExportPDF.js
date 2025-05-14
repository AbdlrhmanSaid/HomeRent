import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ExportPDF = ({ tenants }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("Cairo", "bold");
    doc.setFontSize(16);
    doc.text("تقرير المستأجرين", 105, 15, { align: "center" });

    autoTable(doc, {
      head: [["الاسم", "الشقة", "الإيجار"]],
      body: tenants.map((tenant) => [
        tenant.name,
        tenant.apartment,
        `${tenant.rent} ج`,
      ]),
      styles: { font: "Cairo", fontStyle: "normal", halign: "right" },
      headStyles: { fillColor: [13, 148, 136] },
      margin: { top: 25 },
    });

    doc.save("TenantReport.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-4 rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
    >
      تحميل التقرير PDF
    </button>
  );
};

export default ExportPDF;
