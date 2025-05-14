import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFDownloadLink, // استخدم لعمل رابط لتحميل PDF
} from "@react-pdf/renderer";

// استيراد الخط الخاص بك
import cairoFont from "../assets/Cairo-Regular.ttf";

// تسجيل الخط
Font.register({
  family: "Cairo",
  src: cairoFont,
});

// إعداد الأنماط (styles)
const styles = StyleSheet.create({
  page: {
    fontFamily: "Cairo",
    direction: "rtl", // لضمان الاتجاه من اليمين لليسار
    padding: 20,
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
    paddingVertical: 6,
    marginBottom: 6,
  },
  cell: {
    flex: 1,
    fontSize: 12,
    textAlign: "center", // لتوسيط النص داخل الخلايا
    paddingHorizontal: 4,
  },
  table: {
    display: "table",
    width: "100%",
  },
  tableHeader: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
});

// بيانات المستأجرين
const tenants = [
  { name: "أحمد علي", apartment: "A1", rent: 1500 },
  { name: "سارة محمد", apartment: "B2", rent: 1800 },
  { name: "محمد سعيد", apartment: "C3", rent: 1700 },
];

// مستند PDF
const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>تقرير المستأجرين</Text>
      <View style={styles.table}>
        {/* رأس الجدول */}
        <View style={styles.row}>
          <Text style={[styles.cell, styles.tableHeader]}>الاسم</Text>
          <Text style={[styles.cell, styles.tableHeader]}>الرقم</Text>
          <Text style={[styles.cell, styles.tableHeader]}>الإيجار (ج.م)</Text>
        </View>
        {/* بيانات الجدول */}
        {tenants.map((t, i) => (
          <View key={i} style={styles.row}>
            <Text style={styles.cell}>{t.name}</Text>
            <Text style={styles.cell}>{t.apartment}</Text>
            <Text style={styles.cell}>{t.rent} ج.م</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

// الصفحة التي تحتوي على رابط لتحميل الـ PDF
const TenantsReport = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <PDFDownloadLink
        document={<PDFDocument />}
        fileName="tenant_report.pdf"
        style={{
          textDecoration: "none",
          backgroundColor: "#4CAF50",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          fontWeight: "bold",
        }}
      >
        {({ loading }) =>
          loading ? "تحميل التقرير..." : "تحميل تقرير المستأجرين"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default TenantsReport;
