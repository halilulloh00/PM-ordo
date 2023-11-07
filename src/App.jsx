import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Role from "./pages/Role";
import Fyp from "./pages/ForgotYourPassword";
import Sd from "./pages/SellerDetails";
import Chp from "./pages/ChangePassword";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/role" element={<Role />} />
        <Route path="/forgotyoupassword" element={<Fyp />} />
        <Route path="/sellerdetails" element={<Sd />} />
        <Route path="/changepassword" element={<Chp />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
