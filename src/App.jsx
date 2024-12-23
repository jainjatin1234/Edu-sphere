import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoutes";
import { AuthContextProvider } from "./utils/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import ManyCourses from "./components/ManyCourses";
import CourseDetails from "./components/CourseDetails";
import AboutUs from "./components/About";
import ContactUs from "./components/ContactUs";
import Checkout from "./components/Checkout";
import DashBoard from "./components/DashBoard";
import Chats from "./components/Chats";
import Content from "./components/Content";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/manycourses" element={<ManyCourses />} />
          <Route path="/coursedetails/:id" element={<CourseDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="/content"
            element={
              <ProtectedRoute>
                <Content />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chats"
            element={
              <ProtectedRoute>
                <Chats />
              </ProtectedRoute>
            }
          />
          <Route
            path="/coursedetails/:id/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
