import React from 'react'

function Notes() {
  return (
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
  )
}

export { Notes }