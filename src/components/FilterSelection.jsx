/* eslint-disable react/prop-types */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const FilterSelection = ({
  products,
  showSideBar,
  setShowSideBar,
  setProducts,
}) => {
  const [filterHandle, setFilterHandle] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleSidebar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
    setFilterHandle(!filterHandle);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false);

    // Sort products based on the selected option
    let sortedProducts = [...products];
    if (option === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (option === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    }

    // Update the products state with the sorted products
    setProducts(sortedProducts);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter products based on the search query
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    // Update the products state with the filtered products
    setProducts(filteredProducts);
  };

  useEffect(() => {
    console.log(showSideBar);
    // Check if the viewport width is less than or equal to 768px (typical phone size)
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Add a listener to update isMobile state when viewport width changes
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [showSideBar]);

  return (
    <div className="w-full px-20 py-5 flex border-b justify-between items-center relative">
      <div className="flex gap-5 items-center">
        <p className="text-black font-medium">{products.length}</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="cursor-pointer"
        />
        <div
          className="underline font-thin font-serif text-slate-300 cursor-pointer"
          onClick={handleSidebar}
        >
          {filterHandle ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
      </div>

      <div className={`relative flex gap-5 ${isMobile ? 'flex-col items-center justify-center' : ''}`}>
        {!isMobile && (
          <form className="max-w-lg mx-auto">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-60 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search"
                required
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        )}
        <div className="relative flex flex-col justify-center">
          <div className=" flex items-center">
          {selectedOption}
          <FontAwesomeIcon
            icon={faChevronDown}
            className="ml-1 cursor-pointer"
            onClick={() => setDropdownOpen((prev) => !prev)}
          />
        </div>
        {dropdownOpen && (
          <div className="absolute top-full left-0 w-40 bg-white border border-gray-200 mt-1 shadow-lg rounded">
            <ul className="py-1">
              {["Price: High to Low", "Price: Low to High"].map(
                (option, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 cursor-pointer ${
                      option === selectedOption ? "bg-gray-200" : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
        )}
        </div>
        
      </div>
    </div>
  );
};
