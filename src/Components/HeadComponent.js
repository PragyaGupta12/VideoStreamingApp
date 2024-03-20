import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/navSlice";
import { YOUTUBE_SEARCH_API } from "../Utils/configs";
import { cacheResults } from "../Utils/searchSlice";

// import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState(""); //the moment this state is changed, reconsiliation process takes place and re-rendering happens
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const searchCache = useSelector(store=>store.search)
  
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  //Debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      //cache logic
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]) //if the search val is there in the cache then set that query's value (iphone: ["iphone 11","iphone 13"]) in suggestions or else make an API call
      } else {
        getSearchSuggestions();
      }
    }, 200); //making sure that it call the API after 200 ms instead of calling it immediately at each key press for search.

    return () => {
      clearTimeout(timer); //clearing the timer when re-rendering happens at another key press for search because the useEffect depends on searchQuery
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const suggestionData = await fetch(YOUTUBE_SEARCH_API + searchQuery); // this because the API link takes query in the URL and the suggestion is then given. So here the search is done through searchQuery.
    const json = await suggestionData.json();
    setSuggestions(json[1]);

    //updating cache, if the searched val is not there in the cache then we need to add it for future use
    dispatch(cacheResults({
      [searchQuery]: json[1] //dispatching an action and the payload for it is an obj that is the searched query and it's val
  }))
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex m-2 col-span-1">
        <img
          className="h-10 p-2 cursor-pointer"
          src="https://p7.hiclipart.com/preview/616/930/362/hamburger-button-computer-icons-menu-bar-line.jpg"
          alt="menu"
          onClick={() => toggleMenuHandler()}
        />
        {/* <Link to="/"> */}
        <a href="/">
          <img
            className="h-10 p-2 mx-1 cursor-pointer"
            src="https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
            alt="logo"
          />
        </a>
        {/* </Link> */}
      </div>
      <div className="col-span-10 px-96 m-2">
        <div>
          <input
            className="rounded-l-full border border-gray-400 w-72 p-1"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onFocus={()=>setShowSuggestions(true)} //this to make sure the suggestion div doesn't show always
            onBlur={()=>setShowSuggestions(false)}
          />
          <button className="rounded-r-full py-1 px-2 border border-gray-400 bg-gray-400">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white m-2 py-2 px-5 w-[17rem] rounded-md shadow-md border border-gray-100">
            <ul>
              {suggestions.map((s) => {
                return (
                  <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={s}>
                    {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10 p-2 m-2"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
