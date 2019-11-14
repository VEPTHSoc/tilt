import React from 'react';
import Tilt from 'react-tilt';
import './App.css';

class App extends React.Component{
  onMouseLeave(e){
    console.log('clientY:', e.nativeEvent.clientY);
  }
  render(){
    return(
      <div className="App">
        <Tilt className="Tilt" style={{height: 300, width: 300}} onMouseLeave={this.onMouseLeave}>
          <div className ="Tilt-inner">
          🥶
          </div>
        </Tilt>
      </div>
    )
  }
}


export default App;
