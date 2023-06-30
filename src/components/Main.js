import React, { useState } from "react";
import Mard from "./Mard";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Main = () => {
      const [search, setSearch] = useState("");
      const [bookData, setData] = useState([]);
      const searchBook = (evt) => {
            if (evt.key === "Enter") {
                  axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyANalViy9o0zMCHObO4fkvjwzrDCXiFr-k')
                        .then(res => setData(res.data.items))
                        .catch(err => console.log(err))
            }
      }
      return (
            <>
                  <div className="">

                        <div className="row2">
                              <h2>Find Your Book</h2>
                              <div className="search">
                                    <input type="text" placeholder="Enter Name, Genre, year-Of-publish, authors"
                                          value={search} onChange={e => setSearch(e.target.value)}
                                          onKeyDown={searchBook} />
                                    <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>

                              </div>
                        </div>

                  </div>

                  <div className="container">
                        {
                              <Mard book={bookData} />
                        }


                  </div>

            </>

      )
}
export default Main;