import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { StyledEngineProvider } from '@mui/material/styles';
import PulsePieChart from './mui/PulsePieChart'
import AnimatedStripes from './mui/AnimatedStripes'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <PulsePieChart />
//   </StrictMode>
// )

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
    <PulsePieChart />
    {/* <AnimatedStripes /> */}
    </StyledEngineProvider>
  </StrictMode>
);
