import {useEffect} from 'react'
import './App.css'
import {Route, Routes, useLocation, useNavigationType} from "react-router-dom";
import Login from "./pages/Login";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "Alarma App";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.setAttribute("content", metaDescription);
            }
        }
    }, [pathname]);

    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
        </Routes>
    )
}

export default App
