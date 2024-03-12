/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const AccordionItem = ({ id, heading, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id={`accordion-collapse-${id}`} data-accordion="collapse">
      <h2 id={`accordion-collapse-heading-${id}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-t-xl focus:ring-gray-200 hover:bg-gray-100 gap-3"
          data-accordion-target={`#accordion-collapse-body-${id}`}
          aria-expanded={isOpen}
          aria-controls={`accordion-collapse-body-${id}`}
          onClick={toggleAccordion}
        >
          <span>{heading}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 rotate-${isOpen ? "180" : "0"} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${id}`}
        className={`overflow-hidden transition-height duration-300 ${
          isOpen ? "h-auto" : "h-0"
        }`}
        aria-labelledby={`accordion-collapse-heading-${id}`}
      >
        {content}
      </div>
    </div>
  );
};

const Sidebar = ({ setProducts, setLoading }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    axios
      .get(`${baseUrl}/products/categories`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    axios
      .get(`${baseUrl}/products/category/${selectedCategory}`)
      .then((res) => {
        setLoading(true);
        const initialActiveProducts = {};
        res.data.forEach((product) => {
          initialActiveProducts[product.id] = false;
        });
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <aside
      id="default-sidebar"
      className="absolute w-screen sm:w-96 h-screen transition-transform  sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          <AccordionItem
            id="1"
            heading="Categories"
            content={category.map((cat, index) => (
              <div key={index} className="p-5 border border-b-0 border-gray-200">
                <label className="block mb-2 text-gray-500 dark:text-gray-400">
                  Select Category:
                </label>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`category-${index}`}
                    name="category"
                    className="mr-2"
                    value={cat}
                    checked={selectedCategory === cat}
                    onChange={handleCategoryChange} // Add onChange event handler
                  />
                  <label htmlFor={`category-${index}`} className="text-gray-500">
                    {cat}
                  </label>
                </div>
              </div>
            ))}
          />
          <AccordionItem
            id="1"
            heading="Occasion"
            content={
              <div className="p-5 border border-b-0 border-gray-200">
                <label className="block mb-2 text-gray-500 dark:text-gray-400">
                  Select Category:
                </label>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`category`}
                    name="category"
                    className="mr-2"
                  />
                  <label htmlFor={`category`} className="text-gray-500">
                    domo1
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`category`}
                    name="category"
                    className="mr-2"
                  />
                  <label htmlFor={`category`} className="text-gray-500">
                    domo2
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id={`category`}
                    name="category"
                    className="mr-2"
                  />
                  <label htmlFor={`category`} className="text-gray-500">
                    domo3
                  </label>
                </div>
              </div>
            }
          />
          {/* Other AccordionItem components */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
