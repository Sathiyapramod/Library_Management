// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./Components/HomePage";
import { Dashboard } from "./Components/Dashboard";
import { ListOfBooks } from "./ListOfBooks";
import Viewbook from "./Components/Viewbook";
import IssuedBooks from "./Components/IssuedBooks";
import TermsConditions from "./Components/TermsConditions";
import About from "./Components/About";
import { PageNotFound } from "./Components/PageNotFound";
import Addbook from "./Components/Addbook";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div>
          <Navbar />
        </div>
        <div className="container-fluid">
          {[1, 2, 3].map((index) => {
            return <br key={index} />;
          })}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/books" element={<ListOfBooks />} />
            <Route path="/books/:bookid" element={<Viewbook />} />
            <Route path="/issued" element={<IssuedBooks />} />
            <Route path="/about" element={<About />} />
            <Route path="/tnc" element={<TermsConditions />} />
            <Route path="/addbook" element={<Addbook />} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="*" element={<Navigate replace to={"/404"} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
