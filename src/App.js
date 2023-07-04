// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

// import Login component
import { Login } from "./pages/Login";
// import Signup component
import { SignUp } from "./pages/SignUp";
import { HomePage } from "./pages/HomePage";
import { AuthProvider } from "./context/AuthContext";
// import ContactUs component
// import Homepage from "./components/ContactUs";

function App() {
  
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
