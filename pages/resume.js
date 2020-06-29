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
  leftSection: {
    width: '40%',
    backgroundColor: 'gray',
    color: 'white',
    height: '100vh',
    padding: '16px'
  },
  viewer: {
    width: '100%',
    height: 'inherit',
    border: 0
  },
  header: {
    fontSize: '29pt',
    marginBottom: '4px',
  },
  subHeader: {
    fontSize: '20pt',
  },
  jobHeader: {
    fontSize: '25pt',
  },
  jobSubHeader: {
    fontSize: '17pt',
  },
  paragraph: {
    fontSize: '12pt'
  },
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  jobSection: {
    marginBottom: '8px',
  },
  rightSection: {
  }
});

// Create Document Component
const Resume = () => {
  return (
    <div style={styles.container}>
      <DynamicComponentWithNoSSR style={styles.viewer}>
        <Document>
          <Page size="LETTER" style={styles.page}>
            <View style={styles.leftSection}>
              <Text style={styles.header}>Ian Cristopher Buena</Text>
              <Text style={styles.subHeader}>26e La Salle, Brgy. Silangan, Quezon City</Text>
            </View>
            <View style={styles.rightSection}>
              <View style={styles.jobSection}>
                <Text style={styles.jobHeader}>Go Digital Corp | Software Eng. - NodeJS / DevOps</Text>
                <Text style={styles.jobSubHeader}>Go Digital Corp | Software Eng. - NodeJS / DevOps</Text>
              </View>
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
