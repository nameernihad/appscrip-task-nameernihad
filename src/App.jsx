
import { Banner } from "./components/Banner";
import  { FooterWithLogo } from "./components/Footer";
import Navbar from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";

export default function App() {
  return (
    <>
        <Navbar />
        <Banner />
        <ProductCard/>
        <FooterWithLogo/>
    </>
  );
}
