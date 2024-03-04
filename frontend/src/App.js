import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { DataProvider } from './DataContext'
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router className="App">
      <DataProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
                    
        </Routes>
      </DataProvider>
    </Router>
  );
}

export default App;
