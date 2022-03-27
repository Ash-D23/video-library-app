import React from 'react';
import './SingleVideoPage.css'

function SingleVideoPage() {
  return (
    <div className='single-video__container'>
      <div className="single-video--content">
          <div className="single-video">
            
            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            
            <div className="single-video--info">
                <h3>Title | by User</h3>
                <div className="single-video--actions">
                  <div className="single-video--actions--container">
                    <div className="single-video--action">
                      <i className="far fa-thumbs-up"></i>
                      <p className="margin-left--small">Like</p>
                    </div>
                    <div className="single-video--action">
                      <i className="far fa-clock"></i>
                      <p className="margin-left--small">Add to Watch Later</p>
                    </div>
                    <div className="single-video--action">
                      <i className="fas fa-list"></i>
                      <p className="margin-left--small">Add to Playlist</p>
                    </div>
                  </div>
                  <div>
                    Views | 4 hous ago
                  </div>
                </div>
            </div>

            <div className="single-video--description">
              <h3>Description</h3>
              <p className="padding-tb--small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at pellentesque ex. Etiam efficitur purus urna, quis rutrum lorem viverra nec. Phasellus augue sem, blandit a nibh sed, viverra consequat tortor. Nam posuere nibh quis nisi congue, vel rutrum dolor rutrum.</p>
            </div>
          </div>
      </div>
      <div className="notes--section">
        <div className="notes__container">
            <div className="note__input--container margin-tb--large">          
                <input onChange={null} value={null} className="note__input margin-right--medium" placeholder="note" />
                <button onClick={null} className="btn btn--secondary">Submit</button>
            </div> 
            <div className="padding-top--small">
                <div className="container__flex--spacebetween margin-tb--large">
                  <p className="note--content">This is good</p>
                  <i className="far fa-trash-alt"></i>
                </div>
                <div className="container__flex--spacebetween margin-tb--large">
                  <p className="note--content">This is good, and bad at same time and lot more so keep improving</p>
                  <i className="far fa-trash-alt"></i>
                </div>
                <div className="container__flex--spacebetween margin-tb--large">
                  <p className="note--content">This is explained well</p>
                  <i className="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleVideoPage