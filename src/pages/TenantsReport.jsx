import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";

import cairoFont from "../assets/Cairo-Regular.ttf";

Font.register({
  family: "Cairo",
  src: cairoFont,
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Cairo",
    direction: "rtl",
    padding: 30,
  },
  heading: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    borderBottom: "1px solid #ccc",
    paddingVertical: 6,
  },
  cell: {
    flex: 1,
    fontSize: 12,
    paddingHorizontal: 4,
  },
});

const tenants = [
  { name: "أحمد علي", apartment: "A1", rent: 1500 },
  { name: "سارة محمد", apartment: "B2", rent: 1800 },
  { name: "محمد سعيد", apartment: "C3", rent: 1700 },
];

const PDFDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.heading}>تقرير المستأجرين</Text>
      {tenants.map((t, i) => (
        <View key={i} style={styles.row}>
          <Text style={styles.cell}>{t.name}</Text>
          <Text style={styles.cell}>{t.apartment}</Text>
          <Text style={styles.cell}>{t.rent} ج.م</Text>
        </View>
      ))}
    </Page>
  </Document>
);

const TenantsReport = () => {
  return (
    <div className="h-screen">
      <PDFViewer width="100%" height="100%">
        <PDFDocument />
      </PDFViewer>
    </div>
  );
};

export default TenantsReport;
