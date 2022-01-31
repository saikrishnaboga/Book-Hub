import {Component} from 'react'

import Header from '../Header'
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
        </div>
      </>
    )
  }
}

export default Home
