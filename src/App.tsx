import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Home} from "./pages/Home";
import {CurrentItem} from "./pages/CurrentItem";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/blog/:id" element={<CurrentItem/>} />
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
