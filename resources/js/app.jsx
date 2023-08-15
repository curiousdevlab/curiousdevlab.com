import '../css/app.css';

import { createInertiaApp } from './inertiajsflow/react/index.esm.js';
import { hydrateRoot, createRoot } from 'react-dom/client'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Curious Dev Lab';

createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx', { eager: true })),
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
    //hydrateRoot(el, <App {...props} />)
  },
  progress: {
    showSpinner: true,
    color: 'yellow'
  }
})
