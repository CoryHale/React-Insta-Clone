import React from "react";
import './SearchBar.css'

const SearchBar = () => {
    return (
        <header className="header">
            <div className="title">
                <i className="fab fa-instagram instagram"></i>
                <h1>Instagram</h1>
            </div>
            <div className="searchBar">
                <input type="text" className="search" name="search" placeholder="Search" ></input>
            </div>
            <div className="icons">
                <i className="fal fa-compass"></i>
                <i className="fal fa-heart"></i>
                <i className="fal fa-user"></i>
            </div>
        </header>
    )
}

export default SearchBar;