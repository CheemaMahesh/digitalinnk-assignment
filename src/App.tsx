import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import Nav from "./components/nav";

const Home = lazy(() => import("./features/home"));
const Cart = lazy(() => import("./features/cart"));
const NotFound = lazy(() => import("./components/not-found"));

function App() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </section>
  );
}

export default App;
