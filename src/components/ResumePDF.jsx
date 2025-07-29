import React from "react";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    maxWidth: '8.5in',
    width: '100%',
    minHeight: '11in',
    margin: '0 auto',
    padding: 54,
    backgroundColor: '#fff',
    color: '#000',
    fontFamily: 'Times-Roman',
    fontSize: 11,
    lineHeight: 1.15,
    border: '1 solid #e5e7eb',
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textTransform: 'uppercase',
    letterSpacing: 1,
    textAlign: 'center',
  },
  contact: {
    fontSize: 10,
    marginBottom: 3,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 8,
    paddingBottom: 2,
    letterSpacing: 0.5,
  },
  institution: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 5,
  },
  schoolName: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  degree: {
    fontStyle: 'italic',
    marginBottom: 3,
  },
  date: {
    fontStyle: 'italic',
    textAlign: 'right',
    fontSize: 10,
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 11,
  },
  positionTitle: {
    fontStyle: 'italic',
    marginBottom: 3,
  },
  experienceDates: {
    fontStyle: 'italic',
    textAlign: 'right',
    fontSize: 10,
  },
  jobDetails: {
    fontSize: 10,
    lineHeight: 1.3,
    marginTop: 5,
    textAlign: 'left',
  },
  bulletPoint: {
    fontSize: 10,
    lineHeight: 1.3,
    marginBottom: 2,
    textAlign: 'left',
    paddingLeft: 10,
    textIndent: -10,
  },
  field: {
    fontSize: 12,
    marginBottom: 4,
  },
});

// Creating the document component

const ResumePDF = ({ name, email, address, linkedin, educationEntries, experienceEntries }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.section}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.contact}>
          {email}
          {email && (address || linkedin) ? ' | ' : ''}
          {address}
          {address && linkedin ? ' | ' : ''}
          {linkedin}
        </Text>
      </View>

      {/* Education Section */}
      {educationEntries && educationEntries.length > 0 && educationEntries.some(edu => edu.schoolName || edu.major || edu.graduationDate) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {educationEntries.map((education, index) => (
            (education.schoolName || education.major || education.graduationDate) && (
              <View key={index} style={styles.institution}>
                <View>
                  {education.schoolName && <Text style={styles.schoolName}>{education.schoolName}</Text>}
                  {education.major && <Text style={styles.degree}>{education.major}</Text>}
                </View>
                <View>
                  {education.graduationDate && <Text style={styles.date}>Expected Graduation: {education.graduationDate}</Text>}
                </View>
              </View>
            )
          ))}
        </View>
      )}

      {/* Experience Section */}
      {experienceEntries && experienceEntries.length > 0 && experienceEntries.some(exp => exp.companyName || exp.positionTitle || exp.details || exp.startDate || exp.endDate) && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {experienceEntries.map((experience, index) => {
            const hasContent = experience.companyName || experience.positionTitle || experience.details || experience.startDate || experience.endDate;
            if (hasContent) {
              return (
                <View key={experience.id}>
                  {/* Company and job title section */}
                  <View style={styles.institution}>
                    <View>
                      {experience.companyName && (
                        <Text style={styles.companyName}>{experience.companyName}</Text>
                      )}
                      {experience.positionTitle && (
                        <Text style={styles.positionTitle}>{experience.positionTitle}</Text>
                      )}
                    </View>
                    <View>
                      {(experience.startDate || experience.endDate) && (
                        <Text style={styles.experienceDates}>
                          {experience.startDate}
                          {experience.startDate && experience.endDate && ' - '}
                          {experience.endDate}
                        </Text>
                      )}
                    </View>
                  </View>
                  {/* Job details section */}
                  {experience.details && (
                    <View style={styles.jobDetails}>
                      {experience.details.split('\n').map((line, idx) => (
                        line.trim() && (
                          <Text key={idx} style={styles.bulletPoint}>
                            • {line.trim()}
                          </Text>
                        )
                      ))}
                    </View>
                  )}
                </View>
              );
            }
            return null;
          })}
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;