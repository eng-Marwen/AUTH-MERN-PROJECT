import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br
    from-gray-900 via-green-900 to-emerald-900 
    flex items-center justify-center relative overflow-hidden"
    >
      <Routes>
        <Route path="/" element={"Home"}></Route>
        <Route path="/signup" element={<SignUpPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
