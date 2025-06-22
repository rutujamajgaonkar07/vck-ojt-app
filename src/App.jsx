import { Route, BrowserRouter as Router,Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPages from "./pages/AboutPage"
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
const App = () => {
    return (
        <div>
          <Router>
            <Routes>
                  <Route path="/" element={<HomePage/>} />
                  <Route path="/home" element={<HomePage/>}/>
                  <Route path="/about" element={<AboutPages/>}/>
                  
            </Routes>
            <div>
                <ChatbotComponent/>
            </div>
            </Router>         
        </div>
    )
}

export default App
