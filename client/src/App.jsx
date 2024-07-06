import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Quiz, Login, NotFound, Prize, Ranking } from "./pages";
import { CenterContent, Header, Footer } from "./components";
import './App.css'

function App() {
    return (
        <Router>
            <Header/>
            <CenterContent>
                <Routes>
                    <Route path="/" element={<Navigate to="/login"/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/quiz" element={<Quiz/>}/>
                    <Route path="/prize" element={<Prize/>}/>
                    <Route path="/ranking" element={<Ranking/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </CenterContent>
            <Footer/>
        </Router>
    )
}

export default App
