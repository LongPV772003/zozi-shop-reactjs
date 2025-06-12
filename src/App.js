import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./components/Cart"; 
import Search from "./pages/Search";
import HandmadeCrafts from "./pages/HandmadeCrafts";
import { CartProvider } from "./context/CartContext"; 
import ProductDetail from "./pages/ProductDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import CartDetail from "./pages/CartDetail";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
        <CartProvider>
        <Router>
          <Navbar />
          <Cart /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search" element={<Search />} />
            <Route path="/category/handmade-crafts" element={<HandmadeCrafts />} />
            <Route path="/productdetail/:slug" element={<ProductDetail />} />
            <Route path="/eventdetail/:slug" element={<EventDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogdetail/:slug" element={<BlogDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<AboutUs />} />
            <Route path="/cartdetail" element={<CartDetail />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
