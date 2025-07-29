import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: { padding: 30, fontFamily: 'Helvetica' },
    section: { marginBottom: 16},
    heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
     field: { fontSize: 12, marginBottom: 4 },
});

// Creating the document component
const ResumePDF = ({ name, email, address, linkedin, educationEntries, experienceEntries }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.field}>{email}</Text>
        <Text style={styles.field}> {address}</Text>
        <Text style={styles.field}>{linkedin}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {educationEntries.map((edu,i) => (
          <View key={i}>
            <Text style={styles.field}>{edu.schoolName}</Text>
          </View>
        )) }
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        {experienceEntries.map((exp, i) => (
          <View key={i}>
            <Text style={styles.field}>{exp.companyName} - {exp.positionTitle}</Text>
            <Text style={styles.field}>{exp.startDate} - {exp.endDate}</Text>
            <Text style={styles.field}>{exp.details}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default ResumePDF;