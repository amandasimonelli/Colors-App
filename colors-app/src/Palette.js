import React, { Component } from 'react';
import ColorBox from './ColorBox';
// import {generatePalette} from "./colorHelpers.js"
// import seedColors from './seedColors';
import "./Palette.css";

class Palette extends Component {
    render() {
        const colorBoxes = this.props.palette.colors[300].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ))
        return (
            <div>
                <div className='Palette'>
                    {/* <h1>Palettes</h1> */}
                    {/* Navbar goes here */}
                    <div className='Palette-colors'>{colorBoxes}</div>
                    {/* footer */}
                </div>
            </div>
        )
    }
}

export default Palette; 