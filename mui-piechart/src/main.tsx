import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';
import PulsePieChart from './mui/PulsePieChart'


createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
    <PulsePieChart />
    </StyledEngineProvider>
  </StrictMode>
);
