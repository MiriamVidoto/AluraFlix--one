import { Routes, Route } from "react-router-dom"
import { VideosProvider } from "./context/VideosContext"
import Home from "./pages/Home"
import NewVideo from "./pages/NewVideo"

function App() {
  return (
    <VideosProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novo-video" element={<NewVideo />} />
      </Routes>
    </VideosProvider>
  )
}

export default App
