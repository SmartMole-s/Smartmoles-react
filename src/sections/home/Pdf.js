
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function AboutPdf() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const lang = localStorage.getItem('i18nextLng');


  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      {lang === 'tr' ? (
        <div style={{ height: '720px' }}>
          <Viewer fileUrl={'/static/pdf/brosur.pdf'} plugins={[defaultLayoutPluginInstance]} />
        </div>
      ) : (
        <div style={{ height: '720px' }}>
          <Viewer fileUrl={'/static/pdf/brosur-ingilizce.pdf'} plugins={[defaultLayoutPluginInstance]} />
        </div>
      )}

      {/* <br></br>
      <Typography variant="h3" sx={{ y: 10, textAlign: 'center' }}>
        İngilizce Broşür
      </Typography>
      <br></br> */}
    </Worker>
  );
}
