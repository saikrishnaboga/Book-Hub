import {Component} from 'react'
import {FaSearch} from 'react-icons/fa'
import Header from '../Header'

import './index.css'

class Bookshelves extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="bookshelves-main-container">
          <div className="bookshelves-sub-container">
            <div className="bookshelves-left-navbar">
              <h1 className="left-navbar-heading">Bookshelves</h1>
              <ul className="list-container-of-bookshelves-options">
                <li className="bookshelves-list-item">All</li>
                <li className="bookshelves-list-item">Read</li>
                <li className="bookshelves-list-item">Currently Reading</li>
                <li className="bookshelves-list-item">Want to Read</li>
              </ul>
            </div>
            <div className="bookshelves-search-container">
              <h1 className="search-container-heading">All Books</h1>
              <div className="search-icon-and-input-container">
                <input type="text" id="searchIcon" className="search-input" />
                <label htmlFor="searchIcon" className="search-icon-container">
                  <FaSearch className="search-icon" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Bookshelves
