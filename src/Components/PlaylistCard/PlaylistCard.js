import React from 'react';
import './PlaylistCard.css'

function PlaylistCard({ playlist: { title, _id, description, videos } }) {
  return (
    <div className="playlist-card__container margin--medium">
      <div>
        <p className='margin-bottom--medium'>{title}</p>
        <p>Videos: {videos.length}</p>
      </div>
      <div>
        <i class="far fa-trash-alt"></i>
      </div>
    </div>
  )
}

export default PlaylistCard