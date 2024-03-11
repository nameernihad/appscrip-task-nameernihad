/* eslint-disable react/prop-types */
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const FilterSelection = ({ products, ShowSideBar, setShowSideBar }) => {
    const [filterHandle, setFilterHandle] = useState(false)
    const handleSidebar = () => {
      setShowSideBar(prevShowSideBar => !prevShowSideBar);
      setFilterHandle(!filterHandle)
    };

    useEffect(() => {
      console.log(ShowSideBar)
    }, [ShowSideBar])
    
  
    return (
      <div className="w-full px-20 py-5 flex border-b justify-between items-center">
        <div className="flex gap-5 items-center">
          <p className="text-black font-medium">{products.length}</p>
          <FontAwesomeIcon icon={faChevronRight} />
          <p
            className="underline font-thin font-serif text-slate-300 cursor-pointer"
            onClick={handleSidebar}
          >
            {filterHandle ? "HIDE FILTERS" : "SHOW FILTERS"}
          </p>
        </div>
        <div>Recommended</div>
      </div>
    );
  };
  