import Footer from "./components/Footer";
import Home from "./components/Home";
import Author from "./components/Liabrary/Author";
import Book from "./components/Liabrary/Book";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import DataProvider from "./Context/DataContext";
import BookStore from "./components/BookStore";
import AuthorCollection from "./components/Liabrary/AuthorCollection";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/author" element={<Author />} />
          <Route path="/bookStore" element={<BookStore />} />
          <Route path="/authorCollection" element={<AuthorCollection />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
