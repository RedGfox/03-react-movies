import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import App from './components/App/App';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
