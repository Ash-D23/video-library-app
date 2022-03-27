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
                <h3>Title | by User</h3>
                <div class="single-video--actions">
                  <div class="single-video--actions--container">
                    <div class="single-video--action">
                      <i class="far fa-thumbs-up"></i>
                      <p class="margin-left--small">Like</p>
                    </div>
                    <div class="single-video--action">
                      <i class="far fa-clock"></i>
                      <p class="margin-left--small">Add to Watch Later</p>
                    </div>
                    <div class="single-video--action">
                      <i class="fas fa-list"></i>
                      <p class="margin-left--small">Add to Playlist</p>
                    </div>
                  </div>
                  <div>
                    Views | 4 hous ago
                  </div>
                </div>
            </div>

            <div class="single-video--description">
              <h3>Description</h3>
              <p class="padding-tb--small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at pellentesque ex. Etiam efficitur purus urna, quis rutrum lorem viverra nec. Phasellus augue sem, blandit a nibh sed, viverra consequat tortor. Nam posuere nibh quis nisi congue, vel rutrum dolor rutrum.</p>
            </div>
          </div>
      </div>
      <div class="notes--section">
        <div class="notes__container">
            <div className="note__input--container margin-tb--large">          
                <input onChange={null} value={null} className="note__input margin-right--medium" placeholder="note" />
                <button onClick={null} className="btn btn--secondary">Submit</button>
            </div> 
            <div class="padding-top--small">
                <div class="container__flex--spacebetween margin-tb--large">
                  <p class="note--content">This is good</p>
                  <i class="far fa-trash-alt"></i>
                </div>
                <div class="container__flex--spacebetween margin-tb--large">
                  <p class="note--content">This is good, and bad at same time and lot more so keep improving</p>
                  <i class="far fa-trash-alt"></i>
                </div>
                <div class="container__flex--spacebetween margin-tb--large">
                  <p class="note--content">This is explained well</p>
                  <i class="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleVideoPage