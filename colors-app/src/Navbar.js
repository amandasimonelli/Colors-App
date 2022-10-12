import React, { Component } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = { format: "hex" };
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({ format: e.target.value });
    this.props.handleChange(e.target.value);
  }

  render() {

    const {level, changeLevel} = this.props;
    const { format } = this.state;

    return (
      <header className='Navbar'>
        <div className='logo'>
            <a href="/">ZenColor</a>
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
                onChange={changeLevel}
            />
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
      </header>
    )
  }
}

// Leave export below to see if default rcc shortcut works the same.
// export default Navbar