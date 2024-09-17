import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./components/Result";
import Quiz from "./components/Quiz";
import Main from "./components/Main";
import { CheckUserExist } from "./components/helper/Helper"; // Ensure this is a component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/quiz"
          element={
            <CheckUserExist>
              <Quiz />
            </CheckUserExist>
          }
        />
        <Route
          path="/result"
          element={
            <CheckUserExist>
              <Result />
            </CheckUserExist>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
