import {Component} from 'react'
import ReactSlick from '../SlideShow'
import Header from '../Header'
import Footer from '../Footer'
import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-main-container">
          <div className="home-container">
            <h1 className="home-heading">Find Your Next Favorite Books?</h1>
            <p className="home-heading-description">
              You are in the right place. Tell us what titles or generes you
              have enjoyed in the past, and we will give you surprisingly
              insightful recommendations.
            </p>
          </div>
          <div className="slider-show-container">
            <div className="top-rated-books-and-find-books slider ">
              <h1 className="top-rated-books">Top Rated Books</h1>
              <button type="button" className="find-books-button">
                FindBooks
              </button>
            </div>
            <ReactSlick />
          </div>
          <Footer />
        </div>
      </>
    )
  }
}

export default Home
