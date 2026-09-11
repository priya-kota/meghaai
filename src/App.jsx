// import { Routes, Route } from "react-router-dom";

// /* Layout */
// import Navbar from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";

// /* Main Pages */
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Solutions from "./pages/Solutions";
// import About from "./pages/About";

// /* Resources & Blog Pages */
// import ResourcesPage from "./pages/Resources";
// import BlogDetail from "./pages/BlogDetail";
// import BlogDetail2 from "./pages/BlogDetail2";
// import BlogDetail3 from "./pages/BlogDetail3";
// import BlogDetail4 from "./pages/BlogDetail4";
// import BlogDetail5 from "./pages/BlogDetail5";
// import BlogDetail6 from "./pages/BlogDetail6";
// import BlogDetail7 from "./pages/BlogDetail7";
// import BlogDetail8 from "./pages/BlogDetail8";
// import BlogDetail9 from "./pages/BlogDetail9";
// import PressRelease from "./pages/PressRelease";
// import AllPosts from "./pages/AllPosts";
// import Blog from "./pages/Blog";

// function App() {
//   return (
//     <>
//       {/* GLOBAL NAVBAR */}
//       <Navbar />

//       <Routes>
//         {/* Main Website */}
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/solutions" element={<Solutions />} />
//         <Route path="/about" element={<About />} />

//         {/* Resources Section */}
//         <Route path="/resources" element={<ResourcesPage />} />

//         {/* Blog Details */}
//         <Route path="/blog/1" element={<BlogDetail />} />
//         <Route path="/blog/2" element={<BlogDetail2 />} />
//         <Route path="/blog/3" element={<BlogDetail3 />} />
//         <Route path="/blog/4" element={<BlogDetail4 />} />
//         <Route path="/blog/5" element={<BlogDetail5 />} />
//         <Route path="/blog/6" element={<BlogDetail6 />} />
//         <Route path="/blog/7" element={<BlogDetail7 />} />
//         <Route path="/blog/8" element={<BlogDetail8 />} />
//         <Route path="/blog/9" element={<BlogDetail9 />} />
//       <Route path="/pressrelease" element={<PressRelease />} />
// <Route path="/allposts" element={<AllPosts />} />
// <Route path="/blog" element={<Blog />} />
//       </Routes>

//       {/* GLOBAL FOOTER */}
//       <Footer />
//     </>
//   );
// }

// export default App;

// import ProductDetail from "./pages/ProductDetail";
import StructuralHealthMonitoring from "./pages/StructuralHealthMonitoring";
import CobblePrediction from "./pages/CobblePrediction";
import VibrationMonitoring from "./pages/VibrationMonitoring";
import ScrollToTop from "./components/layout/ScrollToTop";
// import AmbientBackground from "./components/AmbientBackground";
import { Routes, Route } from "react-router-dom";
/* Global layout */
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CookieConsent from "./components/layout/CookieConsent";
import CookiePreferences from "./components/layout/CookiePreferences";
import { CookieConsentProvider } from "./hooks/useCookieConsent";

import FloatingCTA from "./components/layout/FloatingCTA";

/* Main pages */
import Home from "./pages/Home";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import About from "./pages/About";
import Industries from "./pages/Industries";

/* Resources and blog pages */
import ResourcesPage from "./pages/Resources";
import Blog from "./pages/Blog";
import AllPosts from "./pages/AllPosts";
import PressRelease from "./pages/PressRelease";

/* Policy pages */
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import CookiePolicy from "./pages/CookiePolicy";

import BlogDetail from "./pages/BlogDetail";
import BlogDetail2 from "./pages/BlogDetail2";
import BlogDetail3 from "./pages/BlogDetail3";
import BlogDetail4 from "./pages/BlogDetail4";
import BlogDetail5 from "./pages/BlogDetail5";
import BlogDetail6 from "./pages/BlogDetail6";
import BlogDetail7 from "./pages/BlogDetail7";
import BlogDetail8 from "./pages/BlogDetail8";
import BlogDetail9 from "./pages/BlogDetail9";

function App() {
  return (
    <CookieConsentProvider>
      {/* <AmbientBackground /> */}

      {/* Global navigation */}
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Main website pages */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        {/* <Route
          path="/products/:productId"
          element={<ProductDetail />}
        /> */}
        <Route
          path="/products/structural-health-monitoring"
          element={<StructuralHealthMonitoring />}
        />

        <Route
          path="/products/cobble-monitoring"
          element={<CobblePrediction />}
        />

        <Route
          path="/products/vibration-monitoring"
          element={<VibrationMonitoring />}
        />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/overview" element={<About />} />
        <Route path="/leadership" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<About />} />

        {/* Resources */}
        <Route path="/resources" element={<ResourcesPage />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/pressrelease" element={<PressRelease />} />

        {/* Blog details */}
        <Route path="/blog/1" element={<BlogDetail />} />
        <Route path="/blog/2" element={<BlogDetail2 />} />
        <Route path="/blog/3" element={<BlogDetail3 />} />
        <Route path="/blog/4" element={<BlogDetail4 />} />
        <Route path="/blog/5" element={<BlogDetail5 />} />
        <Route path="/blog/6" element={<BlogDetail6 />} />
        <Route path="/blog/7" element={<BlogDetail7 />} />
        <Route path="/blog/8" element={<BlogDetail8 />} />
        <Route path="/blog/9" element={<BlogDetail9 />} />

        {/* Policy pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      {/* Global Floating CTA */}
       <FloatingCTA /> 
      {/* Global footer */}
      <Footer />

      {/* Global Cookie Consent */}
      <CookieConsent />
      <CookiePreferences />
    </CookieConsentProvider>
  );
}

export default App;