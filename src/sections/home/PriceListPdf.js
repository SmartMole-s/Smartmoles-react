import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function PriceListPdf() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <div style={{ height: '720px' }}>
        <Viewer fileUrl={'/static/pdf/fiyat-listesi.pdf'} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}
