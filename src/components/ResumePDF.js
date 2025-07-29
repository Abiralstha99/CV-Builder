import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: { padding: 30, fontFamily: 'Helvetica' },
    section: { marginBottom: 16},
    heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
});

// Creating the document component
const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
       <Text style={styles.heading}>Personal Information</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;