import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {Routes, Route} from 'react-router-dom';
import  './index.css'
import './App.css';
import Topbar from "./Screen/global/Topbar";
import Dashboard from './Screen/dashboard';


function App() {
  const [theme, colorMode] = useMode() 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
    <div className="app">
     <mein className="content">
      <Topbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
      </mein>  
    </div>
    
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
