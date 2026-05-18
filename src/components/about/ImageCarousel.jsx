import React, { useState, useEffect } from 'react'
import Img1 from '../../asserts/Jingjing1.jpg'
import Img2 from '../../asserts/Jingjing2.jpg'
import Img3 from '../../asserts/Jingjing3.jpg'
import Img4 from '../../asserts/Jingjing4.JPEG'
import Img5 from '../../asserts/Jingjing5.JPEG'


const images = [Img1, Img2, Img3, Img4, Img5]

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent(i => (i - 1 + images.length) % images.length)
  const next = () => setCurrent(i => (i + 1) % images.length)

  return (
    <div className="carousel">
      <button className="carousel__btn carousel__btn--prev" onClick={prev} aria-label="Previous">&#8249;</button>

      <div className="carousel__track-wrapper">
        <div
          className="carousel__track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Profile ${i + 1}`} className="carousel__img" />
          ))}
        </div>
      </div>

      <button className="carousel__btn carousel__btn--next" onClick={next} aria-label="Next">&#8250;</button>

      <div className="carousel__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`carousel__dot${i === current ? ' carousel__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel
