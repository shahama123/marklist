import Login from "./Login";
import Marklist from "./Marklist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/marklist" element={<Marklist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
