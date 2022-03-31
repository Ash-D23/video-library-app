import React from 'react'

function VideoHead({ heading, description }) {
  return (
    <div className="main--heading">
        <h2 className="video__title clr--secondary margin-tb--large">{heading}</h2>
        <p className="text--large margin-tb--large">{description}</p>
    </div>
)
}

export default VideoHead