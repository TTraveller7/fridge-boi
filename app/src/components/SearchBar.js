import React, {useState} from 'react';
import { BsSearch } from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai"

function SearchBar({ data }) {
const [filteredData, setFilteredData] = useState([]);
const [wordEntered, setWordEntered] = useState("");

const handleFilter = (event) => {
  const searchWord = event.target.value;
  setWordEntered(searchWord);
  const newFilter = data.filter((value) => {
    return value.text.toLowerCase().includes(searchWord.toLowerCase());
  });

  if (searchWord === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
};

const clearInput = () => {
  setFilteredData([]);
  setWordEntered("");
};

  return (
    <div className='search'>
      <div className='searchInput'>
        <input type="text" placeholder="Enter name of the food you want ..." />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <BsSearch />
          ) : (
            <AiOutlineCloseCircle id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map(value => {
            return (
              <div className="dataItem">
                <p>{value.text} </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;