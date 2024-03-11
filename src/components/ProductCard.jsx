import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { FilterSelection } from "./FilterSelection";
import { ProductCardSkeleton } from "./ProductCardSkeleton";
import Sidebar from "./SideBar";

export const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [activeProducts, setActiveProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    axios
      .get(`${baseUrl}/products`)
      .then((res) => {
        const initialActiveProducts = {};
        res.data.forEach((product) => {
          initialActiveProducts[product.id] = false;
        });
        setActiveProducts(initialActiveProducts);
        setProducts(res.data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  const handleIconClick = (productId) => {
    setActiveProducts((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const truncateDescription = (description) => {
    const maxLength = 140;
    if (description.length > maxLength) {
      return `${description.substring(0, maxLength)} ...Read more`;
    } else {
      return description;
    }
  };

  const truncateTitle = (title) => {
    const maxLength = 20;
    if (title.length > maxLength) {
      return `${title.substring(0, maxLength)} ...`;
    } else {
      return title;
    }
  };

  return (
    <>
      <FilterSelection
        products={products}
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />

      {loading ? (
        <ProductCardSkeleton />
      ) : (
        <div className="flex w-full">
          {showSideBar && <Sidebar />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 px-12 py-5 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg h-60 w-full"
                    src={product.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {truncateTitle(product.title)}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700">
                    {truncateDescription(product.description)} <a href="#"></a>
                  </p>
                </div>
                <div className="flex justify-between items-center p-5">
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 text-black hover:text-white transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Add to cart
                    </span>
                  </button>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`transition-all w-6 h-6 duration-500 ${
                      activeProducts[product.id]
                        ? "text-red-500"
                        : "text-slate-300"
                    }`}
                    onClick={() => handleIconClick(product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
