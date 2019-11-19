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
            <img 
              src={props.fox}
              alt="fox"
            />
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

export default connect(mapStateToProps, { getFoxImage })(FoxImage);