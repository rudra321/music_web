import { Route, Routes } from "react-router-dom";
import './App.css';
import LoginPage from "./Routes/LoginPage";
import OTPVerfication from "./Routes/OTPVerification"
import Songs from "./Routes/Songs"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path ="/OTPVerification" element={<OTPVerfication/>}/>
        <Route path = "/Songs" element={<Songs/>}/>
      </Routes>
    </>
  );
}

export default App;
