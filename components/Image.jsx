import React from 'react'

function Image({ link, image, alt }) {
  return (
    <a href={link} target="_blank" className="image">
        <img src={image} alt={alt} />
    </a>
  )
}

export default Image