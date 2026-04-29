import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import BottomNavbar from "./components/BottomNavbar";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <BottomNavbar />
    </BrowserRouter>
  );
}

export default App;