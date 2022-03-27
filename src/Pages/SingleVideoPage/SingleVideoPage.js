import React from 'react';
import './SingleVideoPage.css'

function SingleVideoPage() {
  return (
    <div className='single-video__container'>
      <div class="single-video--content">
          <div class="single-video">
            
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            
            <div class="single-video--info">
                <p>Title | by User</p>
                <div class="single-video--actions">
                  <div>
                    Views
                  </div>
                  <div>
                    Like
                  </div>
                </div>
                </div>
          </div>
      </div>
      <div>
        <div class="padding--medium">
          Notes
        </div>
      </div>
    </div>
  )
}

export default SingleVideoPage