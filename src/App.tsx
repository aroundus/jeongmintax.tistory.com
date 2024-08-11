import { Layout } from '@/components';
import { KeyVisualSection, ListSection } from '@/components/Section';

import '@/assets/styles/reset.scss';
import '@/assets/styles/style.scss';

import 'virtual:stylex.css';

export function App() {
  return (
    <Layout>
      {document.getElementById('tt-body-index') && document.querySelector('[data-cover-group="KEY_VISUAL"]') && (
        <KeyVisualSection />
      )}
      {document.getElementById('tt-body-index') && document.querySelector('[data-cover-group="LIST"]') && (
        <ListSection />
      )}
    </Layout>
  );
}
