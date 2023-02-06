import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import  './index.css'
import './App.css';

function App() {
  const [theme, colorMode] = useMode() 
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
    <div className="app">
     <h1>soomro123 </h1>  
    </div>
    </CssBaseline>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
