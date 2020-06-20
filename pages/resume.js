import dynamic from 'next/dynamic'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/PDFViewer'),
  { ssr: false }
)

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const Resume = () => {
  return (
    <DynamicComponentWithNoSSR>
      <Document>
        <Page size="LETTER" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </DynamicComponentWithNoSSR>
  )
}

export default Resume
