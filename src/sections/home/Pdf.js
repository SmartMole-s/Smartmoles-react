
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
//hooks
import useLocales from '../../hooks/useLocales';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function AboutPdf() {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const { translate } = useLocales();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
        <div style={{ height: '720px' }}>
          <Viewer fileUrl={translate('Pdf.src')} plugins={[defaultLayoutPluginInstance]} />
        </div>
    </Worker>
  );
}
