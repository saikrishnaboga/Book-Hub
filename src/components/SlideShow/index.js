import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ReactSlick = () => {
  const SamplePrevArrow = props => {
    const {className, style, onClick} = props
    return (
      <button
        className={className}
        style={{...style, display: 'block', background: 'red'}}
        onClick={onClick}
        type="button"
      >
        a
      </button>
    )
  }
  const settings = {
    dots: false,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Slider>
    </div>
  )
}

export default ReactSlick
