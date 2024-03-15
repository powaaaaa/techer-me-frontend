import {
  Document,
  Page,
  Image,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

// スタイルの定義
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: 10,
  },
});

export const QrPdf = ({ qrImageData }: { qrImageData: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Image style={styles.image} src={qrImageData} />
        <Text>こちらのQRコードをスキャンしてください。</Text>
      </View>
    </Page>
  </Document>
);
