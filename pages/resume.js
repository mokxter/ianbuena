import dynamic from 'next/dynamic'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/PDFViewer'),
  { ssr: false }
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100vh',
  },
  viewer: {
    width: '100%',
    height: 'inherit',
    border: 0
  },
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
    <div style={styles.container}>
      <DynamicComponentWithNoSSR style={styles.viewer}>
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
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </DynamicComponentWithNoSSR>
    </div>
  )
}

export default Resume
