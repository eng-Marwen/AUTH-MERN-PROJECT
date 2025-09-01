import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import axios from "axios"


function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 
    flex items-center justify-center relative overflow-hidden"
    >
      <Routes>
        <Route path="/home" element={"Home"}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/verify-email" element={<EmailVerificationPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
