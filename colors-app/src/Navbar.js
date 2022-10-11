import React, { Component } from 'react';
import "rc-slider/assets/index.css";
import Slider from 'rc-slider';
import "./Navbar.css";


export default class Navbar extends Component {
  render() {

    const {level, changeLevel} = this.props;

    return (
      <header className='Navbar'>
        <div className='logo'>
            <a href="#">ZenColor</a>
        </div>
        <div className='slider-container'>
            <span>Level: {level}</span>
        </div>
        <div className='slider'>
            <Slider 
                defaultValue={level} 
                min={100} 
                max={900}
                step={100}
                onChange={this.props.changeLevel}
            />
        </div>
      </header>
    )
  }
}

// Leave export below to see if default rcc shortcut works the same.
// export default Navbar