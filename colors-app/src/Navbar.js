import React, { Component } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {

  constructor(props){
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);

  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open:true });
    this.props.handleFormatChange(e.target.value);
  }

  closeSnackbar(){
    this.setState({ open: false });
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
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX</MenuItem>
            <MenuItem value="rgb">RGB</MenuItem>
            <MenuItem value="rgba">RGBA</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{vertical: "bottom", horizontal: "left"}}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format changed to {format.toUpperCase()}.
            </span>}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton 
              onClick={this.closeSnackbar} 
              color='inherit' 
              key="close" 
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    )
  }
}

// Leave export below to see if default rcc shortcut works the same.
// export default Navbar