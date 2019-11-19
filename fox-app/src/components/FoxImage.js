import React from 'react';
import { connect } from 'react-redux';

// Actions
import { getFoxImage } from '../actions';

const FoxImage = props => {

  const fetchFoxImage = e => {
    e.preventDefault();
    props.getFoxImage();
  }

  return (
    <div>
      <h1>Fox Image Generator</h1>
      <div>
        {props.fox.map(fox => {
          return (
            <img 
              key={fox.link}
              src={fox.image}
              alt="fox image"
            />
          )
        })}
      </div>
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={fetchFoxImage}>New Fox Image</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    fox: state.fox,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchFoxImage })(FoxImage);