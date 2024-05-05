// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  leftAction = () => {
    const {index} = this.state
    if (index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1,
      }))
    }
  }

  rightAction = () => {
    const {index} = this.state

    if (index !== 3) {
      this.setState(prevState => ({
        index: prevState.index + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const index = this.state
    const {imgUrl, companyName, username, description} = reviewsList[index]
    return (
      <div className="container">
        <h1 className="h1">Reviews</h1>
        <div className="card">
          <button
            className="btn1"
            type="button"
            onClick={this.leftAction}
            data-testid="left arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="i1"
              alt="left arrow"
            />
          </button>
          <div className="description">
            <img src={imgUrl} alt={username} className="i2" />
            <p className="p1">{username}</p>
            <p className="p3">{companyName}</p>
            <p className="p4">{description}</p>
          </div>
          <button
            className="btn1"
            type="button"
            onClick={this.rightAction}
            data-testid="right arrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="i1"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
