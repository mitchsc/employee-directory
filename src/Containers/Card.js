import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = {
    details: false
  }

  toggle = () => {
    this.setState({
      details: !this.state.details
    })
  }

  render(){
    const { name, email, id , address} = this.props;
    return (
      <div id='Card' className="tc bg-light-blue dib br3 pv2 ma2 grow bw2 shadow-5" onClick={this.toggle}>
    
        {!this.state.details && ( //default view
        <div id="cardContents">
          <div>
            <img alt='person' src={`https://robohash.org/${id}?set=set5`} width='200px' height='200px'/>
            <div id="info">
                <h2><strong>{name}</strong></h2>
                <p>{email}</p>
            </div>
          </div>
          </div>
        )}
        {this.state.details && ( //details view
          <div id="cardContents">
            <div id="detailContainer" className="tc bg-white dib br3  ma2">
              <h2><strong>Street:</strong> {address.street}</h2>
              <h2><strong>Suite:</strong> {address.suite}</h2>
              <h2><strong>City:</strong> {address.city}</h2>
              <h2><strong>Zip:</strong> {address.zipcode}</h2>
            </div>
          
          </div>
        )}
        
      </div>
    );
  }
}

export default Card;
