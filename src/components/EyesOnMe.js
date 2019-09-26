// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return {
      <div>
        <input type="password" onKeyUp={this.handleInputPassword} />
      </div>
    }
  }
}

export default EyesOnMe;
