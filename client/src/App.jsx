import { Outlet } from "react-router-dom";
import Text from "./components/Text";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <div>
      {/* <Outlet /> */}
      <LandingPage />

      {/* <h1>Cinema Booking System</h1>
      <Text /> */}
    </div>
  );
}
