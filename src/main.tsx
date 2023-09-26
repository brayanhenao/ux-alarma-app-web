import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import CustomTheme from "./themes/CustomTheme";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ThemeProvider theme={CustomTheme}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </ThemeProvider>
)
