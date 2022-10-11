import React, { Component } from 'react';
import ColorBox from './ColorBox';
// import {generatePalette} from "./colorHelpers.js"
// import seedColors from './seedColors';
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from 'rc-slider';

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level){
        this.setState({ level: level })
        // console.log(level);
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div>
                <div className='Palette'>
                    <div className='slider'>
                        <Slider 
                            defaultValue={level} 
                            min={100} 
                            max={900}
                            step={100}
                            onChange={this.changeLevel}
                        />
                    </div>
                    {/* Navbar goes here */}
                    <div className='Palette-colors'>{colorBoxes}</div>
                    {/* footer */}
                </div>
            </div>
        )
    }
}

export default Palette; 